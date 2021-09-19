import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Item({ name, image, price, id }) {
  return (
    <Link to={`/product/${id}`}>
      <div className="item">
        <img src={image} alt="product" />
        <div className="itemInfo">
          <p className="itemPrice">${price}</p>
          <p className="itemName">{name}</p>
        </div>
      </div>
    </Link>
  );
}
