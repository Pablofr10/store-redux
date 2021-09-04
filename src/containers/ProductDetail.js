import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function ProductDetail() {
  const { productId } = useParams();

  const fecthProductDetail = async () => {
    const { data } = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Err", err));

    console.log(data);
  };

  useEffect(() => {
    fecthProductDetail();
  }, []);

  return (
    <div>
      <h1>Product details</h1>
    </div>
  );
}

export default ProductDetail;
