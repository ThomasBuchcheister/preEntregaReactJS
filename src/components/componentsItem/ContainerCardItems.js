import CardItem from "./CardItem"
import fetchSimultion from "../../utils/fetchSimulation"
import productos from "../../utils/productos"
import { useState, useEffect } from "react";
import "../../styles/containerCardsItems.css"
import { useParams } from "react-router-dom";


const ContainerCardItems = () => {
    
    const [ datos, setDatos ] = useState( [] );
    let {idCategory} = useParams()

    useEffect(() => {
            if(idCategory === undefined){
                fetchSimultion(productos, 2000)
                .then(resp => setDatos(resp))
                .catch(error => console.log(error))
            } else {
                fetchSimultion(productos.filter(filter => filter.type === idCategory ), 2000)
                .then(resp => setDatos(resp))
                .catch(error => console.log(error))
            }
    }, [idCategory])

    return(
        <>
        <div className="containerCardsItems">
            {
                datos.map( producto => (
                    <CardItem
                        key={producto.id}
                        id={producto.id}
                        imagen={producto.imagen}
                        titulo={producto.titulo}
                        cantidad={producto.stock}
                        precio={producto.precio}
                        

                    />
                ))
            }

        </div>

        
        </>
    )
    
}

export default ContainerCardItems;

