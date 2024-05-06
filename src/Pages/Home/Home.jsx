import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../Components/ProductCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10); // Sehife basina dusen mehsul sayi qeyd edirik

  const navigation = useNavigate();

  const goToBasket = () => {
    navigation("/basket")
  }

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products)
    })
  }, [])

  // Hazirki mehsullar
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Deyisdirme funk
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const addToCart = (productId) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, productId];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  // Sehife sayi
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <button onClick={goToBasket}>Baskete Page</button>
      <button onClick={() => navigation('/register')}>Register Page</button>

      {currentProducts.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          onClick={() => addToCart(item)}
        />
      ))}
      <div>
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
