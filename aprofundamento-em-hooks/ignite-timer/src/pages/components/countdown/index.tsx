    
    import { CountDownContainer, Separator } from "./styles";
    import { useEffect, useContext } from "react";
    import { differenceInSeconds } from "date-fns"
    import { CyclesContext } from "../../../contexts/cycles-provider";

    export function Countdown(){

        const { activeCycleId, isActiveCycle, amountSecondsPassed, markCurrentCycleAsFinished, setSecondsPassed } = useContext(CyclesContext);
        
       
        const totalInSeconds = isActiveCycle ? isActiveCycle.minutesAmount * 60: 0;

        const currentSeconds = isActiveCycle ? totalInSeconds - amountSecondsPassed: 0;

        const minutesAmount = Math.floor(currentSeconds / 60);
        const secondsAmount = currentSeconds % 60;

        const minutes = String(minutesAmount).padStart(2, "0");
        const seconds = String(secondsAmount).padStart(2, "0");

        useEffect(() => {
            if(isActiveCycle){
                document.title = `${minutes}:${seconds}`;
            } else {
                document.title = "Ignite Timer"
            }
        }, [minutes, seconds, isActiveCycle])

        useEffect(() => {
            let interval: number | undefined;
        
            if (isActiveCycle) {
                interval = setInterval(() => {
                    const secondsDifference = differenceInSeconds(new Date(), isActiveCycle.startDate);
        
                    if (secondsDifference >= totalInSeconds) {
                        markCurrentCycleAsFinished();
                        setSecondsPassed(totalInSeconds);
                        clearInterval(interval);
                    } else {
                        setSecondsPassed(secondsDifference); 
                    }
                }, 1000);
            }
        
            return () => {
                clearInterval(interval); 
            };
        }, [isActiveCycle, totalInSeconds, activeCycleId, markCurrentCycleAsFinished]);

        return(
            <CountDownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Separator>:</Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
            </CountDownContainer>
        )
    }