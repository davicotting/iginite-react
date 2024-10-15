import { createContext, ReactNode, useReducer, useState } from "react";
import { Cycle, cyclesReducer } from "../reducers/cycles/cycles";
import { AddNewCycleAction, markCurrentCycleAsFinishedAction } from "../reducers/cycles/actions";
interface CyclesContextType {
    isActiveCycle: Cycle | undefined;
    activeCycleId: string | null;
    amountSecondsPassed: number;
    markCurrentCycleAsFinished: () => void;
    setSecondsPassed: (seconds: number) => void;
    createNewCycle: (data: CreateNewCycleType) => void;
    interruptNewCycle: () => void;
    cycles: Cycle[];
}
interface CreateNewCycleType {
    task: string;
    minutesAmount: number;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
    children: ReactNode;
}

export function CyclesContextProvider({children}: CyclesContextProviderProps){

const [cyclesState, dispach] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null
})

const { cycles, activeCycleId } = cyclesState;

const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

const isActiveCycle = cycles.find((cycle) => cycle.id === activeCycleId);

function markCurrentCycleAsFinished(){

    dispach(markCurrentCycleAsFinishedAction())

    
}

function setSecondsPassed(seconds: number){
    setAmountSecondsPassed(seconds);
}

function createNewCycle(data: CreateNewCycleType){
    const id = String(new Date().getTime());


    const newCycle: Cycle = {
        id,
        task: data.task,
        minutesAmount: data.minutesAmount,
        startDate: new Date(),
    }

    dispach(AddNewCycleAction(newCycle))

    
    
    setSecondsPassed(0)

    // reset();
}

function interruptNewCycle(){

    dispach(interruptNewCycle())

}
    return(
        <CyclesContext.Provider 
        value={{
            cycles,
            isActiveCycle, 
            activeCycleId, 
            amountSecondsPassed, 
            markCurrentCycleAsFinished, 
            setSecondsPassed,
            interruptNewCycle,
            createNewCycle
        }}
        >
            {children}
        </CyclesContext.Provider>
    )
}