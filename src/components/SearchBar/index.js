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
    <div id="searchBar">
      <Link to="/">
        <Logo />
      </Link>
      <input type="text" onChange={handleChange} onKeyDown={handleKeypress} />
      <button onClick={handleClick}>Buscar</button>
    </div>
  );
}
