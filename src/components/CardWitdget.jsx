import Button from 'react-bootstrap/Button'
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext} from '../context/CartContext'


export const CardWidget = () => {
  const {totalProduct} = useCartContext()

  return (
    <>
      <div className='cart'>
      
      <Button as={Link} to={"/Cart"} size='lg' variant="outline-danger">🛒<span className='material-symbol-outlined'>{totalProduct() || '0'}</span></Button>
      
      </div>
    </>
    
  );
}

export default CardWidget;