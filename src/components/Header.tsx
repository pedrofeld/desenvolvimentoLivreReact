import { Link } from "react-router-dom";
import { StylizedHeader } from "./styleds/Header";

function Header(){
    return (    
        <StylizedHeader>
            <Link to="/">Home</Link>
            <Link to="/services">Serviços</Link>
            <Link to="/prices">Tabela de preços</Link>
        </StylizedHeader>
    )
}
  
export default Header;