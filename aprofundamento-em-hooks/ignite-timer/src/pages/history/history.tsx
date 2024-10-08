    import { HistoryContainer, HistoryList, Status } from './styles';
    export function History(){
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
                            <tr>
                                <td>Criar tabela de aluno</td>
                                <td>60:00</td>
                                <td>Há cerca de 2 meses</td>
                                <td><Status statusColor='green'>Concluído</Status></td>
                            </tr>
                            <tr>
                                <td>Emitir folha de pagamento</td>
                                <td>60:00</td>
                                <td>Há cerca de 2 meses</td>
                                <td><Status statusColor='yellow'>Em andamento</Status></td>
                            </tr>
                            <tr>
                                <td>Concluir modulo</td>
                                <td>60:00</td>
                                <td>Há cerca de 2 meses</td>
                                <td><Status statusColor='red'>Interrompido</Status></td>
                            </tr>
                        </tbody>
                    </table>   
                </HistoryList>
            </HistoryContainer>
        )
    }