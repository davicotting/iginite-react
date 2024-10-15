import { Cycle } from "./cycles";

export enum ReduceTypes {
    ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
    INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
    MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}

export function AddNewCycleAction(newCycle: Cycle){
    return {
        type: ReduceTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle,
        }
    }
}

export function InterruptCurrentCycleAction(){
    return {
        type: ReduceTypes.INTERRUPT_CURRENT_CYCLE,
    }
}

export function markCurrentCycleAsFinishedAction(){
    return {
        type: ReduceTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
    }
}