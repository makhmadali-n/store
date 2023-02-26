import FilterPhones from "../../components/filter/FilterPhones";
import { useState } from "react";
import ProductCard from "../../components/card/ProductCard";
import '../SearchStyle.css'

import { BsSearch } from "react-icons/bs";

function PhonesPage({ phones, basket, setBasket }) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredPhones, setfilteredPhones] = useState([]);

  const onChangeSearchLavue = (e) => {
    setSearchValue(e.target.value);
  };

  const filterPhones = (value) => {
    setfilteredPhones(phones.filter((phone) => phone.brend === value));
  };

  const phonesToRender = filteredPhones.length >= 1 ? filteredPhones : phones;

  return (
    <>
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
        <div key={phones.id} className="wrapper-phone">
          <FilterPhones filterPhones={filterPhones} />
          <div className="catalog">
            {phonesToRender
              .filter((phones) => {
                const phoneName = phones.name;
                if (phoneName.includes(searchValue)) {
                  return true;
                }
                return null
              })
              .map((phone) => {
                return (
                  <div key={phone.id} className="phone-card">
                    <ProductCard
                      phone={phone}
                      basket={basket}
                      setBasket={setBasket}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PhonesPage;
