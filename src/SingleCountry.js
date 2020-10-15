import React from "react";

function SingleCountry({ country, backButton, handleBorderClick }) {
  return (
    <div className="singleCard">
      <div>
        <img src={country.flag} className="flags" alt="flag"></img>
        <h3>{country.name}</h3>
        <p>Native Name: {country.nativeName}</p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Sub Region: {country.subregion}</p>
        <p>Capital: {country.capital}</p>
        <p>Top Level Domain: {country.topLevelDomain}</p>
        <p>Currencies: {country.currencies[0].name}</p>
        <p>Languages: {country.languages[0].name}</p>
      </div>
      <ul>
        Border Countries
        <li onClick={() => handleBorderClick(country.borders[0])}>
          {country.borders[0]}
        </li>
        <li>{country.borders[1]}</li>
        <li>{country.borders[2]}</li>
        <li>{country.borders[3]}</li>
        <li>{country.borders[4]}</li>
        <li>{country.borders[5]}</li>
      </ul>
      <button onClick={backButton}>Back</button>
    </div>
  );
}

export default SingleCountry;