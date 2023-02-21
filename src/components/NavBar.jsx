import React from 'react'
import CardWidget from './CardWitdget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavBar = () => {
    return ( 
        <Navbar className='navb' bg="ligth" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">InterShop</Navbar.Brand>
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
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/productos">Productos</Nav.Link>
            <NavDropdown title="Categoria" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/category/gamers">Gamers</NavDropdown.Item>
              <NavDropdown.Item href="/category/accesorios">Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="/category/hogar">Hogar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CardWidget/>
    </Navbar>
    )
}

export default NavBar