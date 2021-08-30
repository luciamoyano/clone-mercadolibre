import React from "react";
import logo from "../../../src/logo-meli.png";
import "./style.scss";
import { Link } from "react-router-dom";
import countriesArr from "../../site-countries.json";

export default function Home() {
  return (
    <div id="homeWrapper">
      <header>
        <img src={logo} id="logo" />
      </header>
      <ul className="ml-site-list">
        {countriesArr.map((country, key) => {
          return (
            <>
              <li className="ml-site-country" key={key}>
                <Link to={`/search/${country.id}`}>{country.name}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
