import React from "react";
import Item from "../Item";
import "./style.scss";

export default function Results({ itemList, searchParam }) {
  console.log(itemList);
  return (
    <div className="itemContainer">
      <ul className="itemList">
        {itemList
          .filter((value) => {
            return value.title
              .toLowerCase()
              .includes(searchParam.toLowerCase());
          })
          .map((value, key) => {
            const { id, title, thumbnail, price } = value;
            return (
              <li key={id ? id : key}>
                <Item
                  name={title}
                  image={thumbnail}
                  price={price.toLocaleString()}
                  id={id}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
