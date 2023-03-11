import React from 'react'
import Item from './Item'
import { Container } from 'react-bootstrap'

const ItemList = ({data = []}) => {
  return (
    <>
    <Container className='mis-productos'>
    {data.map((productos) => (<Item
     key={productos.id}
     id={productos.id}
     name={productos.name}
     description={productos.description}
     price={productos.price}
     stock={productos.stock}
     category={productos.category}
     image={productos.img}
     info={productos}
     />))}
    </Container>
     </>
  )
}

export default React.memo (ItemList)