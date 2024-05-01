import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHouse, faStar, faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '../../Components/ProductCard';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  const navigation = useNavigate()

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setProducts(res.data.products);
      })
  }, [])

  const addToCart = (productId) => {
    console.log("Ürün ID'si:", productId, "sepete eklendi.");
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const updatedCart = [...cart, productId];
    
    localStorage.setItem('cart', JSON.stringify(updatedCart));

  };

  const goBasket = () => {
    navigation('/basket')
  }

  return (
    <div>
      <button onClick={goBasket}>Kec Bassketee</button>
      {products.map(item => (
        <ProductCard key={item.id} item={item} onclick={() => addToCart(item)} />
      ))}
    </div>
  );
};

export default Home;
