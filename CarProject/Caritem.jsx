import React from "react";
import CarDetails from "./CarDetails";
const Caritem = ({ name, brand, year, price, premium }) => {
  return (
    <div>
      <CarDetails
        name={name}
        brand={brand}
        year={year}
        price={price}
        premium={premium}
      />
    </div>
  );
};

export default Caritem;
