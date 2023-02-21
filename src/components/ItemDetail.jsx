import React from 'react'
import ItemCount from './ItemCount'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';




const ItemDetail = ({data}) => {
    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`)
      }
    return (
        <div className='container'>
          <div className='row'>
        <div className='cold'>
      <Card className="card" style={{ width: '20rem'}}>
        <Card.Img src={data.img}/>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Card.Subtitle>Categoria: {data.category}</Card.Subtitle>
          <br />
          <Card.Title>Stock: {data.stock}</Card.Title>
          <Card.Title>Price: ${data.price}</Card.Title>
          
          <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
        </Card.Body>
      </Card>
      </div>
      </div>

      </div>
    );
  }
// const ItemDetail = ({ data }) => {
/*const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`)
      }
  return (
     <div className='container'>
        <div className='detail'>
            <img className='detail__image' src={data.image} alt=""/>
            <div className='content'>
                <h1>{data.title}</h1>
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            </div>

        </div>

     </div>
  )
} */

export default ItemDetail