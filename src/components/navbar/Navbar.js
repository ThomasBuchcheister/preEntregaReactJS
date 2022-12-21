import React from 'react'
import Carrito from '../Carrito/Carrito'
import ItemListContainer from '../header/itemListContainer'
import "../../styles/navbar.css"
import Logo from '../header/logo'

const Navbar = () => {
  return (
    
      <header>
        <div className='logoNav'>
          <div className='logoContainer'>
            <Logo/>
          </div>
        </div>
        <div className='listaNav'>
          <ItemListContainer 
            itemUno = "Titulares"
            itemDos = "Suplentes"
          />
        </div>
        <div className='containerCarrito'>
          <Carrito/>
        </div>
       
      </header>


    
  )
}

export default Navbar