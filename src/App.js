import React, { useState } from "react";
import DrawFlag from "./CountryCard.js";
import SearchBox from "./Search";
import CountriesAll from "./CountriesAll.json";
import "./App.css";
import RegionSelect from "./RegionSelect";
import SingleCountry from "./SingleCountry.js";
import ThemeButton from "./ThemeButton.js";

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



function App() {
  const [theme, setTheme] = useState("App light");
  // const [country, setCountry] = useState(CountriesAll);
  const [display, setDisplay] = useState(false);
  const [singleCountry, setSingleCountry] = useState([]);
  const [region, setRegion] = useState("");
  const [searchInput, setSearchInput] = useState("");


  function handleRegionFilter(event) {
    setRegion(event.target.value);
  }

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function changeTheme() {
    if (theme === "App light") {
      setTheme("App dark");
    } else {
      setTheme("App light");
    }
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

  let searchResult = CountriesAll.filter(searchingFor(searchInput));
  let regionFilterResult = searchResult.filter(searchingForRegion(region));
  

  return (
    <div className={theme}>
    <ThemeButton changeTheme={changeTheme} />
      <RegionSelect handleRegionFilter={handleRegionFilter} />
      <SearchBox
        handleSearchInput={handleSearchInput}
        searchInput={searchInput}
      />
      {display ? (
        <SingleCountry
          country={singleCountry}
          listOfCountries={regionFilterResult}
          backButton={backButton}
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
