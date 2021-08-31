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
  const { thumbnail, title, price, sold_quantity, permalink } = productData;
  return (
    productData && (
      <a href={permalink}>
        <div className="ItemContainer">
          <div className="ItemMainImg">
            <img src={thumbnail} />
          </div>
          <div className="ItemInfo">
            <p>{sold_quantity} vendidos</p>
            <h1>{title}</h1>
            {price && <p className="ItemPrecio">${price.toLocaleString()}</p>}
            <button>Comprar</button>
          </div>
        </div>
      </a>
    )
  );
}
