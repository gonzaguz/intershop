import Button from 'react-bootstrap/Button'
import React from 'react';

function CardWidget() {
  return (
    <>
      <div className='cart'>
      <Button href='/Cart' size='lg' variant="outline-danger">🛒<span className='material-symbol-outlined'>24</span></Button>{' '}
      
      </div>
    </>
    
  );
}

export default CardWidget;