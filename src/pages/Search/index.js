import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Results from "../../components/Results";
import SearchBar from "../../components/SearchBar";
import "./style.scss";

export default function Search() {
  const { site_id } = useParams();
  const [inputValue, setInputValue] = useState("");
  const [doneFetching, setDoneFetching] = useState(false);

  const [itemList, setItemList] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  function handleSearch(searchParam) {
    setSearchParam(searchParam);
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleKeypress(e) {
    if (e.keyCode === 13) {
      fetchData(inputValue);
    }
  }

  function handleClick() {
    fetchData(inputValue);
  }

  async function fetchData(category) {
    const data = await fetch(
      `https://api.mercadolibre.com/sites/${site_id}/search?q=${category}`
    );
    const dataJson = await data.json();
    await setItemList(dataJson.results);
    await setDoneFetching(true);
  }
  const searchState = doneFetching === true ? "searched" : "notSearched";
  return (
    <div className={`searchContainer ${searchState}`}>
      <SearchBar
        handleChange={handleChange}
        handleClick={handleClick}
        handleKeypress={handleKeypress}
      />
      <div className="resultsContainer">
        {itemList.length > 0 ? (
          <>
            <Navbar handleCallback={handleSearch} />
            <Results searchParam={searchParam} itemList={itemList} />
          </>
        ) : doneFetching ? (
          <p className="noResults">Sin resultados, intenta con otra búsqueda</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
