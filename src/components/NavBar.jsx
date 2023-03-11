import React from 'react'
import CardWidget from './CardWitdget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return ( 
        <Navbar className='navb' bg="ligth" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>InterShop</Navbar.Brand>
        <img
        src='https://intershop.com.ar/wp-content/uploads/2022/03/image-2.webp'
        width={120}
        alt='logo'/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"}>Inicio</Nav.Link>
            <Nav.Link as={Link} to={"/productos"}>Productos</Nav.Link>
            <NavDropdown title="Categoria" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to={"/category/gamers"}>Gamers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/category/accesorios"}>Accesorios</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/category/hogar"}>Hogar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CardWidget/>
    </Navbar>
    )
}

export default NavBar