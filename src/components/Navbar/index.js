import React from "react";
import "./style.scss";

export default function Navbar({ handleCallback }) {
  function handleChange(e) {
    handleCallback(e.target.value);
  }

  return (
    <nav>
      <p>Filtrar resultados</p>
      <input type="text" onChange={handleChange} />
    </nav>
  );
}
