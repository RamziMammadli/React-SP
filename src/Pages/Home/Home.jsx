import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../Components/ProductCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const navigation = useNavigate();

  const goToBasket = () => {
    navigation("/basket")
  }

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products)
    })
  }, [])

  const addToCart = (productId) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, productId];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <div>
      <button onClick={goToBasket}>Baskete kec</button>
      <button onClick={() => navigation('/register')}>Registere kec</button>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          onclick={() => addToCart(item)}
        />
      ))}
    </div>
  );
};

export default Home;
