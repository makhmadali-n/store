import React from "react";
import "./ProductCard.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function WatchCard({ basket, setBasket, watch }) {
  const isWatcheInBasket = basket.find((item) => item.id === watch.id);
  const [showMinus, setShowStatus] = useState(isWatcheInBasket ? true : false);

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
        <Link to={`/AboutWatches/${watch.id}`}>
          <img className="phone-card-img" src={watch.img1} alt="watch" />
        </Link>
      </motion.div>
      <p className="phone-name">{watch.name}</p>
      <p className="phone-discreption">{watch.discreption}</p>
      <div className="footer-phone">
        <span className="phone-price">
          {priceFormatter.format(watch.price)} ₽
        </span>
        {showMinus ? (
          <button onClick={() => deleteItem(watch)}>
            <FaMinus size={28} className="basket-svg__card" />
          </button>
        ) : (
          <button className="basket-btn__card" onClick={() => addBasket(watch)}>
            <AiOutlineShoppingCart size={28} className="basket-svg__card" />
          </button>
        )}
      </div>
    </>
  );
}

export default WatchCard;
