import React from "react"


function RegionSelect({ handleRegionFilter }) {

  return (
    <select onChange={(event) => handleRegionFilter(event)}>
      <option value="">Filter By Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
      <option value="Polar">Polar</option>
    </select>
  );
}

export default RegionSelect;