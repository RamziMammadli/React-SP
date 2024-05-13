import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPost,
  deletePostt,
  deleteSliceThunk,
  getSliceThunk,
  postSliceThunk,
  updateSliceThunk,
} from "../../Store/Reducers/getSlice";

const Products = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [id, setId] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [updatedDes, setUpdatedDes] = useState("");

  const dispatch = useDispatch();

  const data = useSelector((state) => state.getSlice.products);
  const loading = useSelector((state) => state.getSlice.loading);
  const error = useSelector((state) => state.getSlice.error);

  const getData = () => {
    dispatch(getSliceThunk())
  }

  useEffect(() => {
    getData()
  }, []);

  const sendInfo = () => {
    dispatch(postSliceThunk({ name, des }));
    dispatch(addPost({ name, des }));
    setName("");
    setDes("");
  };

  const deletePost = (id) => {
    dispatch(deleteSliceThunk(id));
    dispatch(deletePostt(id));
  };

  const updateData = () => {
    dispatch(updateSliceThunk({id:id, data:{name:updatedName, description: updatedDes}}))
    setTimeout(() => {
      getData()
    }, 300);
  }

  return (
    <div>
      <div><input
        type="text"
        name=""
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        value={des}
        onChange={(e) => setDes(e.target.value)}
      />
      <button onClick={sendInfo}>Gönder</button></div>
      <div>
        <input type="text" name="" id="" value={id} onChange={(e) => setId(e.target.value)}/>
        <input type="text" name="" id="" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)}/>
        <input type="text" name="" id="" value={updatedDes} onChange={(e) => setUpdatedDes(e.target.value)}/>
        <button onClick={updateData}>Guncelle</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data &&
        data.map((item) => {
          return (
            <div>
              <p>{item.name}</p>
              <button onClick={deletePost}>Sil</button>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
