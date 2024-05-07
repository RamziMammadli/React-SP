import React, { useEffect, useState } from "react";
import Router from "./Router/Router";
import { MainContext } from "./Context/context";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  const [products, setProducts] = useState([]);
  const [student, setStudent] = useState("Filankes");
  const [color, setColor] = useState("red");

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const data = { products, setProducts, student, color, setColor };

  return (
    <div>
      <Provider store={store}>
        <MainContext.Provider value={data}>
          <Router />
        </MainContext.Provider>
      </Provider>
    </div>
  );
};

export default App;
