import React from "react";
import "./style.scss";

export default function Navbar({ handleCallback }) {
  function handleChange(e) {
    handleCallback(e.target.value);
  }

  return (
    <nav className="filterBar">
      <label>Filtrar resultados</label>
      <input type="text" onChange={handleChange} />
    </nav>
  );
}
