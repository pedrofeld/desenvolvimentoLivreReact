import { StylizedTable } from "./styleds/PricesTable";

function PricesTable() {
    return (
        <StylizedTable>
            <table>
                <thead>
                    <tr>
                    <th>Serviço</th>
                    <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Coloração</td>
                        <td>R$ 90,00</td>
                    </tr>
                    <tr>
                        <td>Hidratação</td>
                        <td>R$ 70,00</td>
                    </tr>
                    <tr>
                        <td>Nutrição</td>
                        <td>R$ 60,00</td>
                    </tr>
                    <tr>
                        <td>Reconstrução</td>
                        <td>R$ 90,00</td>
                    </tr>
                    <tr>
                        <td>Progressiva</td>
                        <td>R$ 170,00</td>
                    </tr>
                    <tr>
                        <td>Mechas</td>
                        <td>R$ 390,00</td>
                    </tr>
                    <tr>
                        <td>Blindagem</td>
                        <td>R$ 150,00</td>
                    </tr>
                    <tr>
                        <td>Corte</td>
                        <td>R$ 70,00</td>
                    </tr>
                </tbody>
        </table>
        </StylizedTable>
    )
}

export default PricesTable;