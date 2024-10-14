    import { Play, HandPalm } from "phosphor-react"
    import { HomeContainer, StartCountdownButton, InterruptCountdownButton} from "./styles"
    import { FormProvider, useForm } from "react-hook-form";
    import { zodResolver } from "@hookform/resolvers/zod";
    import * as zod from "zod";
    import { Countdown } from "../components/countdown";
    import { CycleForm } from "../components/cycle-form";
    import { useContext } from "react";
    import { CyclesContext } from "../../contexts/cycles-provider";

    export function Home(){
        
        const { createNewCycle, isActiveCycle, interruptNewCycle } = useContext(CyclesContext);

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

        function handleCreateNewCycle(data: newCycleFormType){
            createNewCycle(data);
            reset();
        }


        const task = watch("task");

        const isSubmitDisabled = !task;

        
        return(
            <HomeContainer>
            
            <form onSubmit={handleSubmit(handleCreateNewCycle) } >
                
            <FormProvider {...newCycleForm}>
            <CycleForm />
            </FormProvider>
            <Countdown />
            
                {
                    isActiveCycle ? (
                        <div>
                        <InterruptCountdownButton type="button" onClick={interruptNewCycle}>
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