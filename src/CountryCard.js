import React from "react";

function DrawFlag({listOfCountries}) {
  // console.log({listOfCountries})
  return (
    <div className="container">
      {listOfCountries.map((country, index) => (
        <div key={index} className="card">
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