import React from "react";
import Item from "../Item";
import "./style.scss";

export default function Results({ itemList, searchParam }) {
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
            return (
              <li key={value.id ? value.id : key}>
                <Item
                  name={value.title}
                  image={value.thumbnail}
                  price={value.price}
                  id={value.id}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
