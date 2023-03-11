import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial))

    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    }
    useEffect(() =>{
        setCount(parseInt(initial))
    }, [initial])


  return (
    <div className='counter'>
        <Button variant="outline-danger" disabled={count <= 1} onClick={decrease}>-</Button>
        <span>   {count}   </span>
        <Button variant="outline-danger" disabled={count >= stock} onClick={increase}>+</Button>
        <div>
            <Button variant="outline-danger" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</Button>
        </div>
    </div>
  )
}

export default ItemCount