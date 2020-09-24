import React from "react";
import CountriesAll from "./CountriesAll.json";

function DrawFlag() {
  console.log({CountriesAll})
  return (
    <div className="container">
      {CountriesAll.map((country) => (
        <div className ="card">
          <img src={country.flag} className="flags" alt="flag"></img>
          <h3>{country.name}</h3>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </div>
      ))}
    </div>
  );
    }

export default DrawFlag;