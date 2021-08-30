import React from "react";

export default function SearchBar({ handleClick, handleChange }) {
  return (
    <div id="searchBar">
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Buscar</button>
    </div>
  );
}
