import React from "react";
import "../filter/FilterStyle.css";
function FilterWatches({ filterWatches }) {
  const onChooseCategory = (value) => {
    filterWatches(value);
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
              name="Samsung"
            >
              Samsung
            </button>
          </div>
          <div className="wrapp-filter__btn">
            <button
              onClick={(e) => onChooseCategory(e.target.name)}
              className="apple-btn"
              name="Xiaomi"
            >
              Xiaomi
            </button>
          </div>
          <div className="wrapp-filter__btn">
            <button
              onClick={(e) => onChooseCategory(e.target.name)}
              className="apple-btn"
              name="Google"
            >
              Google
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
              type="reset"
              name="brend"
            >
              Сброс
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterWatches;
