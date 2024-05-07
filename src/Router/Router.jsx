import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Basket from "../Pages/Basket/Basket";
import Register from "../Pages/Register/Register";
import Products from "../Pages/Products/Products";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
