import React from 'react';
import { Button, Table, ListGroup, ListGroupItem} from 'react-bootstrap';
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import SendOrder from './SendOrder';



const Cart = () => {
  const { cart, totalPrice } = useCartContext()
  const {  removeProduct } = useCartContext()

  if (cart.length === 0) {
    return ( 
      <>
      <div className='baner'><h1>Finaliza tu compra</h1></div>
      <h2 className='cartv'>Tu carrito esta vacio!</h2>
      <Button className='tiendacart' variant="outline-danger" as={Link} to='/productos'>Volver a la tienda</Button>
      </>
    )
  }

  return (
    <>
    <div className='baner'><h1>Finaliza tu compra</h1></div>
    <div className='table'>
       <Table hover>
<thead>
<tr className='table-danger'>
  <th>Producto</th>
  <th>Precio</th>
  <th>Cantidad</th>
  <th>Subtotal</th>
  <th></th>
</tr>
</thead>
<tbody className='table-group-divider'>
    {
      cart.map((product) => (
        <tr key={product.id}>
        <td><img className='rounded-circle' src={product.img} alt="" />{product.name}</td>
        <td>${product.price}</td>
        <td>{product.quantity}</td>
        <td>${product.quantity * product.price}</td>
        <td><Button variant="outline-danger" onClick={() => removeProduct(product.id)}>Eliminar</Button></td>
        </tr>
        ))}
        </tbody>
        </Table>
            </div>
    
    <div className='finalizar'>
    <h2>
      Total del carrito
    </h2>
    <ListGroup className='total'>
      <ListGroupItem>Total: ${totalPrice()}</ListGroupItem>
    </ListGroup>
    <SendOrder />
    
    
    </div>
    </>
    
  );
}

export default Cart;