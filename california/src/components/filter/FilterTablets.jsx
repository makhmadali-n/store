import React from "react";
import "./FilterStyle.css";

function FilterTablets({ filterTablets }) {
  const onChooseCategory = (value) => {
    filterTablets(value);
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
            name="Oukitel"
          >
            OUKITEL
          </button>
          <button
            onClick={(e) => onChooseCategory(e.target.name)}
            className="apple-btn"
            name="Blackview"
          >
            Blackview
          </button>
          <button
            onClick={(e) => onChooseCategory(e.target.name)}
            className="apple-btn"
            name="HUAWEI"
          >
            HUAWEI
          </button>
          <button
            onClick={(e) => onChooseCategory(e.target.name)}
            className="apple-btn"
            name="HONOR"
          >
            HONOR
          </button>
          <button
            onClick={(e) => onChooseCategory(e.target.name)}
            className="apple-btn"
            name="Microsoft"
          >
            Microsoft
          </button>
          <button
            onClick={(e) => onChooseCategory(e.target.name)}
            className="apple-btn"
            name="Lenovo"
          >
            Lenovo
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

export default FilterTablets;
