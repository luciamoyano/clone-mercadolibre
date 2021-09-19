import React from "react";
import Logo from "../../components/Logo";
import "./style.scss";
import { Link } from "react-router-dom";
import countriesArr from "../../site-countries.json";

export default function Home() {
  const sortedCountries = countriesArr.sort((a, b) => {
    let countryA = a.name.toUpperCase();
    let countryB = b.name.toUpperCase();
    if (countryA < countryB) {
      return -1;
    }
    if (countryA > countryB) {
      return 1;
    }
    return 0;
  });

  return (
    <div id="homeWrapper">
      <header>
        <h1>El Mercadito</h1>
        <ul className="ml-site-list">
          {sortedCountries.map((country, key) => {
            return (
              <>
                <li className="ml-site-country" key={key}>
                  <Link to={`/search/${country.id}`}>{country.name}</Link>
                </li>
              </>
            );
          })}
        </ul>
      </header>
    </div>
  );
}
