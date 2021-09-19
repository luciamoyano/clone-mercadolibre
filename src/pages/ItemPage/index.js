import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

export default function ItemPage() {
  const [productData, setProductData] = useState({});
  const { product_id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.mercadolibre.com/items/${product_id}`
      );
      const dataJson = await data.json();
      await setProductData(dataJson);
    }
    fetchData();
  }, [product_id]);

  const { pictures, title, price, sold_quantity, permalink } = productData;
  return (
    <div className="itemPageContainer">
      {productData && pictures ? (
        <div className="itemContainer">
          <div className="itemMainImg">
            {pictures && <img src={pictures[0].url} alt="product-thumbnail" />}
          </div>
          <div className="itemInfo">
            <p>{sold_quantity} vendidos</p>
            <h1>{title}</h1>
            {price && <p className="itemPrecio">${price.toLocaleString()}</p>}
            <a href={permalink}>
              <button>Comprar</button>
            </a>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
