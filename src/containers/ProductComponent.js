import React from "react";
import { useSelector } from "react-redux";

function ProductComponent() {
  const prodcts = useSelector((state) => state.allProducts.products);
  const { id, title } = prodcts[0];
  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
