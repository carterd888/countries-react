import React from "react";

const BordersList = ({ array }) => {

  return (
      <ul>
        {array.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
  );
};

export default BordersList;
