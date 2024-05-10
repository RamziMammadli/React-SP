import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPost,
  deletePostt,
  deleteSliceThunk,
  getSliceThunk,
  postSliceThunk,
} from "../../Store/Reducers/getSlice";

const Products = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((state) => state.getSlice.products);
  // console.log("some", data);

  useEffect(() => {
    dispatch(getSliceThunk());
  }, []);

  const sendInfo = () => {
    dispatch(postSliceThunk({ name, des }));
    dispatch(addPost({ name, des }));
    setName("");
    setDes("");
  };

  const deletePost = (id) => {
    dispatch(deleteSliceThunk(id))
    dispatch(deletePostt(id))
  }

  

  return (
    <div>
      <input
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
      <button onClick={sendInfo}>Gonder</button>
      {data &&
        data.map((item) => {
          return (
            <div>
              <p>{item.name}</p>
              <button onClick={() => deletePost(item.id)}>Sil</button>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
