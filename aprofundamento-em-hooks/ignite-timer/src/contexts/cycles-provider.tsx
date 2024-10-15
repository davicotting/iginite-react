import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { Cycle, cyclesReducer } from "../reducers/cycles/cycles";
import { AddNewCycleAction, markCurrentCycleAsFinishedAction, InterruptCurrentCycleAction } from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";
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

}, (initialState) => {
    const storedStateAsJSON = localStorage.getItem("@ignite-timer:cyclesState-1.0.0");

    if(storedStateAsJSON){
        return JSON.parse(storedStateAsJSON)
    }

    return initialState;
    
})

useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);

    localStorage.setItem('@ignite-timer:cyclesState-1.0.0', stateJSON);
}, [cyclesState])

const { cycles, activeCycleId } = cyclesState;

const isActiveCycle = cycles.find((cycle) => cycle.id === activeCycleId);

const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {

    if(isActiveCycle){
        return differenceInSeconds(new Date(), new Date(isActiveCycle.startDate))
    }

    return 0;
});



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

    dispach(InterruptCurrentCycleAction())

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