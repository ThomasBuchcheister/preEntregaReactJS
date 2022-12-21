import CardItem from "./CardItem"
import fetchSimultion from "../../utils/fetchSimulation"
import productos from "../../utils/productos"



const ContainerCardItems = () => {

    fetchSimultion(productos, 3000)
    .then(resp => console.log(resp))

    return(
        <CardItem/>
    )
}

export default ContainerCardItems;

