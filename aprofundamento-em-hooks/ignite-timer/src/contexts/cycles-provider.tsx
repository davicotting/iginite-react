import { createContext, ReactNode, useState } from "react";

interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptDate?: Date;
    finishedDate?: Date;
}

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
    

const [cycles, setCycles] = useState<Cycle[]>([]);
const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

const isActiveCycle = cycles.find((cycle) => cycle.id === activeCycleId);

function markCurrentCycleAsFinished(){
    setCycles((state) =>
        state.map((cycle) => {
            if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() };
            }
            return cycle;
        })
    );
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

    setCycles((prevState) => [...prevState, newCycle]);
    setActiveCycleId(id);
    setSecondsPassed(0)

    // reset();
}

function interruptNewCycle(){

    setCycles((prevState) => prevState.map(cycle => {
        if(cycle.id === activeCycleId){
            return { ...cycle, interruptDate: new Date() }
        } else {
            return cycle;
        }
    }))

    setActiveCycleId(null);

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