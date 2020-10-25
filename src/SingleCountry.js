import React from "react";
import BordersList from "./BordersList";
import UseList from "./UseList";

function SingleCountry({ country, backButton, displayBorderCountry }) {
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
        <div>
          Currencies: <UseList array={country.currencies} />
        </div>
        <div>
          Languages: <UseList array={country.languages} />
        </div>
        <div>
          Borders:{" "}
          <BordersList
            array={country.borders}
            displayBorderCountry={displayBorderCountry}
          />
        </div>
      </div>
      <button onClick={backButton}>Back</button>
    </div>
  );
}

export default SingleCountry;