import React, {useState} from 'react';
import DrawFlag from "./CountryCard.js";
import SearchBox from "./Search";
import CountriesAll from "./CountriesAll.json";
import './App.css';
import RegionSelect from "./RegionSelect";

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
        !region ||
        country.region.toLowerCase().includes(region.toLowerCase()) 
      );
    };
}

function App() {
  const [country, setCountry] = useState(CountriesAll);
  const [region, setRegion] = useState("");
  const [searchInput, setSearchInput] = useState("");
  
  function handleRegionFilter(event) {
  setRegion(event.target.value);
  }

  function HandleSearchInput(event) {
  setSearchInput(event.target.value);
  }


let searchResult = country.filter(searchingFor(searchInput));
let regionFilterResult = searchResult.filter(searchingForRegion(region))


  return (
    <div className="App">
      <RegionSelect handleRegionFilter={handleRegionFilter} />
      <SearchBox
        HandleSearchInput={HandleSearchInput}
        searchInput={searchInput}
      />
      <DrawFlag listOfCountries={regionFilterResult} />
    </div>
  );
}

export default App;
