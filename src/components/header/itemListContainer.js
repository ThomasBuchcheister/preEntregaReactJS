import {Link} from "react-router-dom"


const ItemListContainer = (props => {
    return(
        <ul>
            <li>
                <Link to="category/Titular">
                    {props.itemUno}
                </Link>
            </li>
            <li>
                <Link to="category/Suplente">
                    {props.itemDos} 
                </Link>
            </li>
            
        </ul>
    )
})

export default ItemListContainer;