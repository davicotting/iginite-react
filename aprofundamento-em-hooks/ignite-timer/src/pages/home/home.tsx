    import { Play, HandPalm } from "phosphor-react"
    import { CountDownContainer, FormContainer, HomeContainer, Separator, StartCountdownButton, TaskInput, MinutesAmountInput, InterruptCountdownButton} from "./styles"
    import { useForm } from "react-hook-form";
    import { zodResolver } from "@hookform/resolvers/zod";
    import * as zod from "zod";
    import { useEffect, useState } from "react";
    import { differenceInSeconds } from "date-fns";

    export function Home(){

        interface Cycle {
            id: string;
            task: string;
            minutesAmount: number;
            startDate: Date;
            interruptDate?: Date;
            finishedDate?: Date;
        }

        const [cycles, setCycles] = useState<Cycle[]>([]);
        const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
        const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

        const newCycleFormValidation = zod.object({
            task: zod.string().min(1, "O seu novo ciclo deve ter no mínimo 1 caratere."),
            minutesAmount: zod.number()
            .min(5, "O seu novo ciclo deve ter no minimo 5 minutos.")
            .max(60, "O seu ciclo deve ter no maximo 60 minutos."),
        })

        type newCycleFormType = zod.infer<typeof newCycleFormValidation>

        const { register, handleSubmit, watch, reset} = useForm<newCycleFormType>({
            resolver: zodResolver(newCycleFormValidation),
            defaultValues: {
                task: "",
                minutesAmount: 0,
            }
        });
        
       

        

        const isActiveCycle = cycles.find((cycle) => cycle.id === activeCycleId);

        const totalInSeconds = isActiveCycle ? isActiveCycle.minutesAmount * 60: 0;

        const currentSeconds = isActiveCycle ? totalInSeconds - amountSecondsPassed: 0;

        const minutesAmount = Math.floor(currentSeconds / 60);
        const secondsAmount = currentSeconds % 60;

        const minutes = String(minutesAmount).padStart(2, "0");
        const seconds = String(secondsAmount).padStart(2, "0");


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
            setAmountSecondsPassed(0)


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

        useEffect(() => {
            let interval: number | undefined;
        
            if (isActiveCycle) {
                interval = setInterval(() => {
                    const secondsDifference = differenceInSeconds(new Date(), isActiveCycle.startDate);
        
                    if (secondsDifference >= totalInSeconds) {
                        setCycles((state) =>
                            state.map((cycle) => {
                                if (cycle.id === activeCycleId) {
                                    return { ...cycle, finishedDate: new Date() };
                                }
                                return cycle;
                            })
                        );
                        setAmountSecondsPassed(totalInSeconds);
                        clearInterval(interval);
                    } else {
                        setAmountSecondsPassed(secondsDifference); 
                    }
                }, 1000);
            }
        
            return () => {
                clearInterval(interval); 
            };
        }, [isActiveCycle, totalInSeconds, activeCycleId]);

        useEffect(() => {
            if(isActiveCycle){
                document.title = `${minutes}:${seconds}`;
            } else {
                document.title = "Ignite Timer"
            }
        }, [minutes, seconds, isActiveCycle])

        return(
            <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormContainer>

                <label htmlFor="task">Vou trabalhar em</label>
                <TaskInput type="text" placeholder="Dê um nome para o seu projeto" list="task-suggestions"
                {...register("task")}
                disabled={!!isActiveCycle}
                />

            
                <datalist id="task-suggestions">
                    <option value="Codar meu portifolio"/>
                    <option value="Estudar NextJS"/>
                </datalist>
                

                <label htmlFor="minutesAmount">durante</label>
                <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" step={5} min={5} max={60} 
                {...register("minutesAmount", {valueAsNumber: true})}
                disabled={!!isActiveCycle}
                />

                <span>minutos.</span>
                
                </FormContainer>

                <CountDownContainer>
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Separator>:</Separator>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </CountDownContainer>

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
            </HomeContainer>
        )
    }