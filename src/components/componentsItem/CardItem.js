import Image from "./Image";
import "../../styles/cardItem.css"
import Description from "./Description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";

const CardItem = (props) => {
    return(
        <div className="cardItem">
            <Image imagen={props.imagen}/>
            <Description 
                title={props.titulo}
                cantidad = {1}
                precio= {props.precio}
            />
            <div className="buttons">
                <ButtonDetalles/>
                <ButtonAddCart/>
            </div>
            
        </div>

        
    )
}

export default CardItem;