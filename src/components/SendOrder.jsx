import React from 'react'
import { Button, Form, Container } from 'react-bootstrap';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useState } from 'react';
import { useCartContext } from '../context/CartContext'


const SendOrder = () => {
    const [orderId, setOrderId] = useState(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const { cart, totalPrice } = useCartContext()
   
    const db = getFirestore()


    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
    }
    const order = {
        buyer: {
          name,
          email,
        },
        items: cart.map(product => ({ id: product.id, title: product.name, price: product.price, quantity: product.quantity})),
        total: totalPrice()
    }
    const ordersCollection = collection(db, "orden")
  return (
    <div>
         <Container className='form'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre y apellido</Form.Label>
        <Form.Control type='text' placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
    
    <Button type='submit' className='checkout' variant="outline-danger">Emitir orden
      </Button>
      </Form>
      <h2>Order id: {orderId}</h2>
    </Container>
    </div>
  )
}

export default SendOrder