import React from 'react'
import CardWidget from './CardWitdget'
const NavBar = () => {
    return ( 
        <nav>
            <h1>InterShop</h1>
            <div>
                <ul>
                    <li><a href="#">Telefonos</a></li>
                    <li><a href="#">Electrodomesticos</a></li>
                    <li><a href="#">Aire libre</a></li>
                    <li><a href="#">Accesorios</a></li>
                </ul>
            </div>
            <CardWidget/>
        </nav>
    )
}

export default NavBar