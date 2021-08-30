import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

export default function ItemPage() {
  const [productData, setProductData] = useState({});
  const { product_id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      `https://api.mercadolibre.com/items/${product_id}`
    );
    const dataJson = await data.json();
    await setProductData(dataJson);
  }

  console.log(productData);

  return (
    <div className="ItemContainer">
      <div className="ItemMainImg">
        <img src={productData.thumbnail} />
      </div>
      <div className="ItemInfo">
        <h1>{productData.title}</h1>
        <p>Description</p>
        <p className="ItemPrecio">$1.000</p>
      </div>
    </div>
  );
}
