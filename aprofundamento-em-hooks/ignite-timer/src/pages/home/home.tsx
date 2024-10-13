    import { Play, HandPalm } from "phosphor-react"
    import { HomeContainer, StartCountdownButton, InterruptCountdownButton} from "./styles"
    import { FormProvider, useForm } from "react-hook-form";
    import { zodResolver } from "@hookform/resolvers/zod";
    import * as zod from "zod";
    import { createContext, useState } from "react";
    import { Countdown } from "../components/countdown";
    import { CycleForm } from "../components/cycle-form";

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
    }

    export const CyclesContext = createContext({} as CyclesContextType);


    export function Home(){
 

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

        type newCycleFormType = zod.infer<typeof newCycleFormValidation>

        const newCycleFormValidation = zod.object({
            task: zod.string().min(1, "O seu novo ciclo deve ter no mínimo 1 caratere."),
            minutesAmount: zod.number()
            .min(5, "O seu novo ciclo deve ter no minimo 5 minutos.")
            .max(60, "O seu ciclo deve ter no maximo 60 minutos."),
        })

        const newCycleForm = useForm<newCycleFormType>({
            resolver: zodResolver(newCycleFormValidation),
            defaultValues: {
                task: "",
                minutesAmount: 0,
            }
        });

        const { handleSubmit, watch, reset } = newCycleForm;

        function setSecondsPassed(seconds: number){
            setAmountSecondsPassed(seconds);
        }

        function handleCreateNewCycle(data: newCycleFormType){
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

            reset();
        }

        function handleInterruptCycle(){

            setCycles((prevState) => prevState.map(cycle => {
                if(cycle.id === activeCycleId){
                    return { ...cycle, interruptDate: new Date() }
                } else {
                    return cycle;
                }
            }))

            setActiveCycleId(null);

        }

        const task = watch("task");

        const isSubmitDisabled = !task;

        
        return(
            <HomeContainer>
            <CyclesContext.Provider value={{isActiveCycle, activeCycleId, amountSecondsPassed, markCurrentCycleAsFinished, setSecondsPassed}}>
            <form  onSubmit={handleSubmit(handleCreateNewCycle) } >
                
            <FormProvider {...newCycleForm}>
            <CycleForm />
            </FormProvider>
            <Countdown />
            
                {
                    isActiveCycle ? (
                        <div>
                        <InterruptCountdownButton type="button" onClick={handleInterruptCycle}>
                        <HandPalm size={24}/>
                        Interromper
                        </InterruptCountdownButton>
                        </div>
                    ) : (
                        <StartCountdownButton type="submit"  disabled={isSubmitDisabled}>
                        <Play size={24}/>
                        Começar
                        </StartCountdownButton>
                    )
                }
            </form>
            </CyclesContext.Provider>
            </HomeContainer>
        )
    }