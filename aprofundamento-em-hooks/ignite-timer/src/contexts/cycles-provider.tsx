import { createContext, ReactNode, useReducer, useState } from "react";
import { Cycle, cyclesReducer, ReduceTypes } from "../reducers/Cycles";

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

    dispach({
        type: ReduceTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
        payload: isActiveCycle,
    })

    
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

    dispach({
        type: ReduceTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle,
        }
    })

    
    
    setSecondsPassed(0)

    // reset();
}

function interruptNewCycle(){

    dispach({
        type: ReduceTypes.INTERRUPT_CURRENT_CYCLE,
        payload: activeCycleId,
    })

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