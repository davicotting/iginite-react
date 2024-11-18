import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyCircleDollar } from "phosphor-react"
export function Summary(){
    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                
                <strong>R$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                
                <strong>R$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyCircleDollar size={32} color="#00b37e"/>
                </header>
                
                <strong>R$ 17.400,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}