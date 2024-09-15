import Header from "../components/Header";
import PricesTable from "../components/PricesTable";

function PricesPage(){
    return (
        <>
            <Header/>
            <br />
            <h1>Tabela de preços</h1>
            <p>Consulte o preço de nossos serviços abaixo.</p>
            <PricesTable/>
        </>
    )
}

export default PricesPage;