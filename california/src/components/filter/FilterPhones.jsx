import React from "react";
import "../filter/FilterStyle.css";


function FilterComponent({ filterPhones }) {
  const onChooseCategory = (value) => {
    filterPhones(value);
  };

  return (
    <div className="filter-wrapper">
      <div className="phones-filter__wrapper">
        <div className="apple">
          <div className="wrapp-filter__btn">
            <button
              onClick={(e) => onChooseCategory(e.target.name)}
              className="apple-btn"
              name="Apple"
            >
              Apple
            </button>
          </div>
          <button
            onClick={(e) => onChooseCategory(e.target.name)}
            className="apple-btn"
            name="Samsung"
          >
            Samsung
          </button>
          <button
            onClick={(e) => onChooseCategory(e.target.name)}
            className="apple-btn"
            name="Xiaomi"
          >
            Xiaomi
          </button>
          <button
            onClick={(e) => onChooseCategory(e.target.name)}
            className="apple-btn"
            name="Infinix"
          >
            Infinix
          </button>
          <button
            onClick={(e) => onChooseCategory(e.target.name)}
            className="apple-btn"
            name="OUKITEL"
          >
            OUKITEL
          </button>
          <button
            onClick={(e) => onChooseCategory(e.target.name)}
            className="apple-btn"
            name="OnePlus"
          >
            OnePlus
          </button>
          <button
            onClick={(e) => onChooseCategory(e.target.name)}
            className="apple-btn"
            name="OPPO"
          >
            OPPO
          </button>
          <button
            onClick={(e) => onChooseCategory(e.target.name)}
            className="apple-btn"
            name="Realme"
          >
            Realme
          </button>
          <button
            onClick={(e) => onChooseCategory(e.target.name)}
            className="apple-btn"
            type="reset"
            name="brend"
          >
            Сброс
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;
