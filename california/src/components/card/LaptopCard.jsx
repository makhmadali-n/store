import React from "react";
import "./CardStyle.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function LaptopCard({ laptop, basket, setBasket }) {
  const isLaptopInBasket = basket.find((item) => item.id === laptop.id);
  const [showMinus, setShowStatus] = useState(isLaptopInBasket ? true : false);

  const addBasket = (product) => {
    setShowStatus(true);
    setBasket([...basket, product]);
  };

  const deleteItem = (product) => {
    setBasket(basket.filter((item) => item.id !== product.id));
    setShowStatus(false);
  };

  const priceFormatter = new Intl.NumberFormat();

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="block-img__phone"
      >
        <Link to={`/AboutLaptop/${laptop.id}`}>
          <img className="phone-card-img" src={laptop.img1} alt="laptop" />
        </Link>
      </motion.div>
      <p className="phone-name">{laptop.name}</p>
      <p className="phone-discreption">{laptop.discreption}</p>
      <div className="footer-phone">
        <span className="phone-price">
          {priceFormatter.format(laptop.price)} ₽
        </span>
        {showMinus ? (
          <button onClick={() => deleteItem(laptop)}>
            <FaMinus size={28} className="basket-svg__card" />
          </button>
        ) : (
          <button
            className="basket-btn__card"
            onClick={() => addBasket(laptop)}
          >
            <AiOutlineShoppingCart size={28} className="basket-svg__card" />
          </button>
        )}
      </div>
    </>
  );
}

export default LaptopCard;
