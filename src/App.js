import React, { useState } from "react";
import DrawFlag from "./CountryCard.js";
import SearchBox from "./Search";
import CountriesAll from "./CountriesAll.json";
import "./App.css";
import RegionSelect from "./RegionSelect";
import SingleCountry from "./SingleCountry.js";

function searchingFor(searchInput) {
  return (country) => {
    return (
      !searchInput ||
      country.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      country.capital.toLowerCase().includes(searchInput.toLowerCase())
    );
  };
}

function searchingForRegion(region) {
  return (country) => {
    return (
      !region || country.region.toLowerCase().includes(region.toLowerCase())
    );
  };
}

function searchingForBorders(a3c) {
  return (country) => {
    return !a3c || country.alpha3Code.includes(a3c);
  };
}

function App() {
  const [country, setCountry] = useState(CountriesAll);
  const [display, setDisplay] = useState(false);
  const [singleCountry, setSingleCountry] = useState([]);
  const [region, setRegion] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [a3c, setA3c] = useState("");

  function handleRegionFilter(event) {
    setRegion(event.target.value);
  }

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function handleBorderClick(a3c) {
    setA3c(a3c);
    console.log("you border", borderResults);
  }

  function backButton() {
    setDisplay(false);
  }

  function displaySingleCountry(country) {
    console.log(country);
    setDisplay(true);
    setSingleCountry(country);
    // setSingleCountry(country)
  }

  let searchResult = country.filter(searchingFor(searchInput));
  let regionFilterResult = searchResult.filter(searchingForRegion(region));
  let borderResults = country.filter(searchingForBorders(a3c));

  return (
    <div className="App">
      <RegionSelect handleRegionFilter={handleRegionFilter} />
      <SearchBox
        handleSearchInput={handleSearchInput}
        searchInput={searchInput}
      />
      {display ? (
        <SingleCountry
          country={singleCountry}
          backButton={backButton}
          handleBorderClick={handleBorderClick}
        />
      ) : null}
      {!display ? (
        <DrawFlag
          listOfCountries={regionFilterResult}
          displaySingleCountry={displaySingleCountry}
        />
      ) : null}
    </div>
  );
}

export default App;
