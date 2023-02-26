import React from "react";
import FilterLaptops from "../../components/filter/FilterLaptops";
import { useState } from "react";
import LaptopCard from "../../components/card/LaptopCard";
import { BsSearch } from "react-icons/bs";

function LaptopsPage({ laptops, basket, setBasket }) {

  const [searchValue, setSearchValue] = useState("");
  const [filteredLaptops, setfilteredLaptops] = useState([]);

  const onChangeSearchLavue = (e) => {
    setSearchValue(e.target.value);
  };


  const filterLaptops = (value) => {
    setfilteredLaptops(laptops.filter((laptop) => laptop.brend === value));
  };

  const laptopsToRender =
    filteredLaptops.length >= 1 ? filteredLaptops : laptops;

  return (
    <div className="container">
      <div className="rearch-phons__block">
        <input
          className="search-input"
          value={searchValue}
          onChange={onChangeSearchLavue}
          type="text"
          placeholder="Search"
        />
        <BsSearch size={24} className="bs-Search" />
      </div>
      <div className="wrapper-phone">
        <FilterLaptops filterLaptops={filterLaptops} />
        <div className="catalog">
          {laptopsToRender
            .filter((laptops) => {
              const laptopName = laptops.name;
              if (laptopName.includes(searchValue)) {
                return true;
              }
              return null
            })
            .map((laptop) => {
              return (
                <div key={laptop.id} className="phone-card">
                  <LaptopCard
                    laptop={laptop}
                    basket={basket}
                    setBasket={setBasket}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default LaptopsPage;
