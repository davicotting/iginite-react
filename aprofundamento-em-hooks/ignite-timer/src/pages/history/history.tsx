    import { useContext } from 'react';
    import { HistoryContainer, HistoryList, Status } from './styles';
    import { CyclesContext } from '../../contexts/cycles-provider';
    import { formatDistanceToNow } from 'date-fns';
    import { ptBR } from 'date-fns/locale';
    export function History(){
        const { cycles } = useContext(CyclesContext);
        return(
            <HistoryContainer>             
                
                
                <h1>Meu histórico</h1>
                <HistoryList>
                    <table>
                        <thead>
                            <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cycles.map(cycle => {
                                return(
                                <tr>
                                <td>{cycle.task}</td>
                                <td>{cycle.minutesAmount} minutos</td>
                                <td>
                                {
                                formatDistanceToNow(cycle.startDate, {
                                    addSuffix: true,
                                    locale: ptBR,
                                })
                                }
                                </td>

                                {
                                    cycle.interruptDate && !cycle.finishedDate && (
                                        <td><Status statusColor='red'>Interrompido</Status></td>
                                    )
                                }

                                {
                                    cycle.finishedDate && (
                                        <td><Status statusColor='green'>Concluído</Status></td>
                                    )
                                }

                                {
                                    cycle.startDate && !cycle.interruptDate && !cycle.finishedDate && (
                                        <td><Status statusColor='yellow'>Em andamento</Status></td>
                                    )
                                }
                                </tr>
                            
                                    )
                                })
                            }
                        </tbody>
                    </table>   
                </HistoryList>
            </HistoryContainer>
        )
    }