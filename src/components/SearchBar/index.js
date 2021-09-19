import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import "./style.scss";

export default function SearchBar({
  handleClick,
  handleChange,
  handleKeypress,
}) {
  return (
    <nav className="searchBar">
      <div className="searchInput">
        <input type="text" onChange={handleChange} onKeyDown={handleKeypress} />
        <button onClick={handleClick}>Buscar</button>
      </div>
    </nav>
  );
}
