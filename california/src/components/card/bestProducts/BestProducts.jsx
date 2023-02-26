import React from "react";
import { bestProducts } from "../../../mockData/data";
import "../bestProducts/BestProducts.css";
import { Link } from "react-router-dom";

export default function BestProducts() {
  return (
    <div className="best-around">
      {bestProducts.map((best) => {
        return <div key={best.id} className="wrapp-around">
          <span className="around-span">{best.title}</span>
          <h3 className="around-h3">{best.subtitle}</h3>
          <button className="around-btn">Explore</button>
          <Link to={'./WatchesPage'}><img className="around-img" src={best.img} alt="watches" /></Link>
        </div>;
      })}
    </div>
  );
}
