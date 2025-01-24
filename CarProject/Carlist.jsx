import React from "react";
import Caritem from "./Caritem";

const Carlist = ({ carlist, searchitem, filter }) => {
  const newArr = [];
  carlist.forEach((cars) => {
    if (
      cars.name.toLowerCase().indexOf(searchitem.toLowerCase()) ||
      cars.premium.toLowerCase().indexOf(filter.toLowerCase()) === -1
    ) {
      return;
    }
    newArr.push(
      <Caritem
        name={cars.name}
        brand={cars.brand}
        year={cars.year}
        price={cars.price}
        premium={cars.premium}
      />
    );
  });

  return (
    <div className="grid grid-cols-5 justify-items-center gap-4 ">{newArr}</div>
  );
};

export default Carlist;


