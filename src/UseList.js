import React from "react";

const UseList = ({ array }) => {
  return (
      <ul>
        {array.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
  );
};

export default UseList;
