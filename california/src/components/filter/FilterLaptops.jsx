import React from "react";
import "../filter/FilterStyle.css";

function FilterLaptops({ filterLaptops }) {
  const onChooseCategory = (value) => {
    filterLaptops(value);
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
          <div className="wrapp-filter__btn">
            <button
              onClick={(e) => onChooseCategory(e.target.name)}
              className="apple-btn"
              name="Asus"
            >
              Asus
            </button>
          </div>
          <div className="wrapp-filter__btn">
            <button
              onClick={(e) => onChooseCategory(e.target.name)}
              className="apple-btn"
              name="Acer"
            >
              Acer
            </button>
          </div>
          <div className="wrapp-filter__btn">
            <button
              onClick={(e) => onChooseCategory(e.target.name)}
              className="apple-btn"
              name="HP"
            >
              HP
            </button>
          </div>
          <div className="wrapp-filter__btn">
            <button
              onClick={(e) => onChooseCategory(e.target.name)}
              className="apple-btn"
              name="Lenovo"
            >
              Lenovo
            </button>
          </div>
          <div className="wrapp-filter__btn">
            <button
              onClick={(e) => onChooseCategory(e.target.name)}
              className="apple-btn"
              name="MSI"
            >
              MSI
            </button>
          </div>
          <div className="wrapp-filter__btn">
            <button
              onClick={(e) => onChooseCategory(e.target.name)}
              className="apple-btn"
              name="HUAWEI"
            >
              HUAWEI
            </button>
          </div>

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

export default FilterLaptops;
