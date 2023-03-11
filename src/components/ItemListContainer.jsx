import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemListContainer = () => {
  const [data, setData] = useState([])

  const {categoryId} = useParams()
  
   useEffect(() =>{
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'productos')
    if (categoryId){
    const queryFilter = query(queryCollection, where('category', '==', categoryId))
    getDocs(queryFilter)
    .then(res => setData(res.docs.map(productos => ({id: productos.id, ...productos.data()}))))
     } else{
      getDocs(queryCollection)
    .then(res => setData(res.docs.map(productos => ({id: productos.id, ...productos.data()}))))
     }
     

   },[categoryId])


  return (
    <>
    <div className='baner'><h1>Productos</h1></div>
    <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer