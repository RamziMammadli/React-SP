import React, { useContext } from "react";
import { MainContext } from "../../Context/context";

const Basket = () => {

  const { products, student, color, setColor, setStudent } = useContext(MainContext)

  const changeColor = () => {
    if (student == 'Filankess') {
      setColor('orange')
    } else {
      setColor('blue')
    }
  }

  const changeText = () => {
    setStudent('Filankes' ? 'Telebe' : 'Ni kto') //ternary operator
  }
  return (
    <div>
      <p style={{color:color}}>{student}</p>
      <button onClick={changeText}>yazini deyis</button>
      <button onClick={changeColor}>rengini deyis</button>
      {/* {products.map((item) => (
        <ProductCard item={item} />
      ))} */}
    </div>
  );
};

export default Basket;
