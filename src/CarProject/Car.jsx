import React from "react";
import Header from "./Header";
import Filtaring from "./Filtaring";
import CarList from "./Carlist";
import { useState } from "react";

const Car = () => {
  const CARDATA = [
    {
      id: 1,
      name: "Nexon",
      brand: "Tata",
      year: 2023,
      price: "8L",
      premium: "No",
    },
    {
      id: 2,
      name: "Harrier",
      brand: "Tata",
      year: 2023,
      price: "15L",
      premium: "Yes",
    },
    {
      id: 3,
      name: "Thar",
      brand: "Mahindra",
      year: 2023,
      price: "14L",
      premium: "Yes",
    },
    {
      id: 4,
      name: "XUV700",
      brand: "Mahindra",
      year: 2022,
      price: "20L",
      premium: "Yes",
    },
    {
      id: 5,
      name: "Altroz",
      brand: "Tata",
      year: 2023,
      price: "7L",
      premium: "No",
    },
    {
      id: 6,
      name: "Kiger",
      brand: "Renault",
      year: 2023,
      price: "6L",
      premium: "No",
    },
    {
      id: 7,
      name: "Kwid",
      brand: "Renault",
      year: 2023,
      price: "5L",
      premium: "No",
    },
    {
      id: 8,
      name: "Scorpio-N",
      brand: "Mahindra",
      year: 2023,
      price: "18L",
      premium: "Yes",
    },
    {
      id: 9,
      name: "Punch",
      brand: "Tata",
      year: 2023,
      price: "6.5L",
      premium: "No",
    },
    {
      id: 10,
      name: "Bolero",
      brand: "Mahindra",
      year: 2022,
      price: "9.5L",
      premium: "No",
    },
  ];
  const [filter, setFilter] = useState("");
  const [searchItem, setSearchitem] = useState("");
  return (
    <div className="p-8">
      <Header />
      <Filtaring
        searchitem={searchItem}
        onSearchItem={setSearchitem}
        onFilter={setFilter}
        filter={filter}
      />
      <CarList carlist={CARDATA} searchitem={searchItem} filter={filter} />
    </div>
  );
};

export default Car;
