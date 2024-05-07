import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSliceThunk } from "../../store/reducer/getSlice";

const Products = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.getSlice.products);

  useEffect(() => {
    dispatch(getSliceThunk());
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => (
          <div>
            <p>{item.title}</p>
            <img src={item.thumbnail} alt="" />
          </div>
        ))}
    </div>
  );
};

export default Products;
