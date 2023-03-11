import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';



const Item = ({info}) => {
 
  return (
    
    <div className='container'>
      <div className='row'>
        <div className='cold'>
      <Card className='card' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={info.img} alt="" />
    <Card.Body>
      <Card.Title>{info.name}</Card.Title>
      <Card.Subtitle>Categoria: {info.category}</Card.Subtitle>
      <br />
      <Card.Title>Stock: {info.stock}</Card.Title>
      <br />
      <Button as={Link} to={`/detalle/${info.id}`} variant="outline-danger">Detalle</Button>
    </Card.Body>
  </Card>
      </div>

      </div>
      
      </div>

  );
}

export default Item

