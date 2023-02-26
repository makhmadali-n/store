import React from "react";
import FilterTablets from "../../components/filter/FilterTablets";
import { useState } from "react";
import TabletCard from "../../components/card/TabletCard";
import { BsSearch } from "react-icons/bs";

function TabletsPage({ tablets, basket, setBasket }) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredTablets, setfilteredTablets] = useState([]);

  const onChangeSearchLavue = (e) => {
    setSearchValue(e.target.value);
  };

  const filterTablets = (value) => {
    setfilteredTablets(tablets.filter((tablet) => tablet.brend === value));
  };

  const tabletsToRender =
    filteredTablets.length >= 1 ? filteredTablets : tablets;

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
        <FilterTablets filterTablets={filterTablets} />
        <div className="catalog">
          {tabletsToRender
            .filter((tablets) => {
              const tabletName = tablets.name;
              if (tabletName.includes(searchValue)) {
                return true;
              }
              return null
            })
            .map((tablet) => {
              return (
                <div key={tablet.id} className="phone-card">
                  <TabletCard
                    tablet={tablet}
                    setBasket={setBasket}
                    basket={basket}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TabletsPage;
