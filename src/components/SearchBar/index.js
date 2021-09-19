import React from "react";
import "./style.scss";

export default function SearchBar({
  handleClick,
  handleChange,
  handleKeypress,
}) {
  return (
    <nav className="searchBar">
      <h1>¿Qué estás buscando?</h1>
      <div className="searchInput">
        <input type="text" onChange={handleChange} onKeyDown={handleKeypress} />
        <button onClick={handleClick}>Buscar</button>
      </div>
    </nav>
  );
}
