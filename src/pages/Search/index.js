import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Results from "../../components/Results";
import SearchBar from "../../components/SearchBar";

export default function Search() {
  const { site_id } = useParams();
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("");

  const [itemList, setItemList] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  function handleSearch(searchParam) {
    setSearchParam(searchParam);
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    setCategory(inputValue);
    fetchData();
  }

  async function fetchData() {
    const data = await fetch(
      `https://api.mercadolibre.com/sites/${site_id}/search?q=${category}`
    );
    const dataJson = await data.json();
    console.log(dataJson);
    await setItemList(dataJson.results);
  }

  return (
    <>
      <SearchBar handleChange={handleChange} handleClick={handleClick} />
      {itemList.length > 0 && (
        <>
          <Navbar handleCallback={handleSearch} />
          <Results searchParam={searchParam} itemList={itemList} />
        </>
      )}
    </>
  );
}
