import React, { useEffect, useState } from 'react'
import Button from '../../Components/Buttuns/Button'
import ProductCard from '../../Components/Cards/ProductCard'
import axios from 'axios'

const Home = () => {


    const [products, setProducts] = useState([])
   

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            setProducts(res.data)
        })
    }, [])


  return (
    <div>
        {products.map(item => <ProductCard item={item}/>)}
    </div>
  )
}

export default Home