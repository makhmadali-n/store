import React from "react";
import { bestCard } from "../../mockData/data";
import "../card/CardStyle.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function CardComponent() {
  return (
    <div className="wrapper-card">
      {bestCard.map((card) => {
        return (
          <div key={card.id} className="main-card">
            <div className="card">
              <img className="card-img" src={card.img} alt="card" />
              <p className="card-name">{card.name}</p>
              <p className="card-discreption">{card.discreption}</p>
              <div className="footer-card">
                {card.price}
                <button>
                  <AiOutlineShoppingCart size={28} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardComponent;
