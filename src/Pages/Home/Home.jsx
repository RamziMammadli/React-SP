import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHouse, faStar, faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '../../Components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setProducts(res.data.products);
      });
  }, []);

  const addToCart = (productId) => {
    console.log("Ürün ID'si:", productId, "sepete eklendi.");
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const updatedCart = [...cart, productId];
    
    localStorage.setItem('cart', JSON.stringify(updatedCart));

  };

  return (
    <div>
      {products.map(item => (
        <ProductCard key={item.id} item={item} onclick={() => addToCart(item)} />
      ))}
    </div>
  );
};

export default Home;
