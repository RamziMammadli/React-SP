import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getSliceThunk, postSliceThunk } from "../../Store/Reducers/getSlice";

const Products = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");

  const dispatch = useDispatch();

  const data = useSelector((state) => state.getSlice.products);

  useEffect(() => {
    dispatch(getSliceThunk());
  }, []);

  const dataa = {name,des}

  const sendInfo = () => {
    dispatch(postSliceThunk(dataa))
    dispatch(addPost(dataa))
    setDes('')
    setName('')
  }

  return (
    <div>
      <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="text" name="" id="" value={des} onChange={(e) => setDes(e.target.value)}/>
      <button onClick={sendInfo}>Gonder</button>
      {data && data.map((item) => <p>{item.name}</p>)}
    </div>
  );
};

export default Products;
