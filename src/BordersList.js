import React from "react";
import CountriesAll from "./CountriesAll.json";

const BordersList = ({ array, displayBorderCountry }) => {
  return (
    <div className="borderList">
      {array.map((item) => {
        let border = CountriesAll.filter((country) =>
          country.alpha3Code.includes(item)
        );
      
        return (
          <ul>
            <li key={item}>{border[0].name}</li>
            <li>
              <img
                onClick={() => displayBorderCountry(border[0])}
                className="flagSmall"
                src={border[0].flag}
                alt=""
                value={border[0]}
              />
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default BordersList;
