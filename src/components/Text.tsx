import { StylizedText } from "./styleds/Text";

type TextProps = {
    name: string;
}

export const Text = (props: TextProps) => {
    return (
        <div>
            <p>
                Olá, {props.name}!
            </p>
            
            <StylizedText>
                <div className="midia">
                    <p>
                        Desde 2019, estamos no ramo da estética para tornar 
                        as nossas mulheres ainda mais belas. <br/> Temos o desejo de aumentar 
                        a autoestima e a autoconfiança de nossas clientes de forma que
                        se sintam bem consigo e para enfrentar o mundo a sua volta.
                    </p>
                </div> 
            </StylizedText>
        </div>
    )
}