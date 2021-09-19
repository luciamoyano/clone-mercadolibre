import React from "react";
import Item from "../Item";
import "./style.scss";

import Masonry from "react-masonry-css";

export default function Results({ itemList, searchParam }) {
  const breakpointMasonry = {
    default: 4,
    1200: 3,
    850: 2,
    600: 1,
  };
  return (
    <div className="itemContainer">
      <ul className="itemList">
        <Masonry
          breakpointCols={breakpointMasonry}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
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
        </Masonry>
      </ul>
    </div>
  );
}
