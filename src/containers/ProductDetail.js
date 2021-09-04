import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

function ProductDetail() {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fecthProductDetail = async () => {
    const { data } = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Err", err));

    dispatch(selectedProduct(data));
  };

  useEffect(() => {
    fecthProductDetail();
  }, []);

  return (
    <div>
      <h1>{product.id}</h1>
    </div>
  );
}

export default ProductDetail;
