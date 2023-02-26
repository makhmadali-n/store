import React from "react";
import FilterWatches from "../../components/filter/FilterWatches";
import { useState } from "react";
import WatchCard from "../../components/card/WatchCard";
import { BsSearch } from "react-icons/bs";

function WatchesPage({ watches, basket, setBasket }) {

  const [searchValue, setSearchValue] = useState("");
  const [filteredWatches, setfilteredWatches] = useState([]);

  const onChangeSearchLavue = (e) => {
    setSearchValue(e.target.value);
  };


  const filterWatches = (value) => {
    setfilteredWatches(watches.filter((watch) => watch.brend === value));
  };

  const watchesToRender = filteredWatches.length >= 1 ? filteredWatches : watches;

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
        <FilterWatches filterWatches={filterWatches} />
        <div className="catalog">
          {watchesToRender
            .filter((watches) => {
              const watcheName = watches.name;
              if (watcheName.includes(searchValue)) {
                return true;
              }
              return null
            })
            .map((watch) => {
              return (
                <div key={watch.id} className="phone-card">
                  <WatchCard
                    basket={basket}
                    setBasket={setBasket}
                    watch={watch}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default WatchesPage;
