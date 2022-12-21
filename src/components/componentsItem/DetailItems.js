import Image from "./Image";
import Description from "./Description";
import "../../styles/detailsItem.css";
import AddCantCart from "./AddCantCart";
import ButtonDetalles from "./ButtonDetalles";
import fetchSimultion from "../../utils/fetchSimulation";
import productos from "../../utils/productos";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {
        fetchSimultion(productos.filter( flt => flt.id == idItem), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])
    
    return(
        <div className="detailsItem">
            {
                datos.map( datos => (
                   <>
                
                    <div className="containerLeft">
                        <Image 
                            imagen={datos.imagen}
                        />
                    </div>  

                    <div className="containerRigth">
                            <Description 
                                title= {datos.titulo}
                                parrafo= {datos.description}
                                cantidad = {datos.stock}
                                precio={datos.precio}
                            />
                        <div className="buttons">
                                <AddCantCart 
                                    cant={5}
                                />

                                <ButtonDetalles 
                                    txt="Agregar al carrito"
                                />
                        </div>
                    </div>
                   </>
                ))
            }
        </div>
    )
}

export default DetailsItem;