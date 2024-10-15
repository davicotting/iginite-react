export interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptDate?: Date;
    finishedDate?: Date;
}

interface CyclesState {
    cycles: Cycle[],
    activeCycleId: string | null,
}

export enum ReduceTypes {
    ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
    INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
    MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}


export function cyclesReducer(state: CyclesState, action: any){

    switch(action.type){
        case ReduceTypes.ADD_NEW_CYCLE:
        return {
            ...state,
            cycles: [...state.cycles, action.payload.newCycle],
            activeCycleId: action.payload.newCycle.id,
        }

        case ReduceTypes.INTERRUPT_CURRENT_CYCLE: 
        return {
            ...state,
            cycles: state.cycles.map((cycle) => {
                if(cycle.id === state.activeCycleId){
                    return { ...cycle, interruptDate: new Date() }
                } else {
                    return cycle;
                }
            }),
            activeCycleId: null,
        }
        case ReduceTypes.MARK_CURRENT_CYCLE_AS_FINISHED: 
        return {
            ...state,
            cycles: state.cycles.map((cycle) => {
                if (cycle.id === state.activeCycleId) {
                    return { ...cycle, finishedDate: new Date() };
                }
                return cycle;
            }),
            activeCycleId: null,
        }

        default: return state
    }
  
}