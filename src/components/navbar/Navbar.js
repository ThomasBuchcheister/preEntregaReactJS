import React from 'react'
import Carrito from '../Carrito/Carrito'


const Navbar = () => {
  return (
    <nav className="navbar bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      D10S Indumentaria
    </a>
    <div className="navbar-nav d-flex flex-row ">
        <a className="nav-link active me-3" aria-current="page" href="#">Home</a>
        <a className="nav-link me-3" href="#">Features</a>
        <a className="nav-link me-3" href="#">Pricing</a>
    </div>

    <Carrito/>

  </div>
</nav>
  )
}

export default Navbar