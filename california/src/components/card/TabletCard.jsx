import React from "react";
import "./ProductCard.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function TabletCard({ basket, setBasket, tablet }) {
  const isTabletInBasket = basket.find((item) => item.id === tablet.id);
  const [showMinus, setShowStatus] = useState(isTabletInBasket ? true : false);

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
        <Link to={`/AboutTablet/${tablet.id}`}>
          <img className="phone-card-img" src={tablet.img1} alt="tablet" />
        </Link>
      </motion.div>
      <p className="phone-name">{tablet.name}</p>
      <p className="phone-discreption">{tablet.discreption}</p>
      <div className="footer-phone">
        <span className="phone-price">
          {priceFormatter.format(tablet.price)} ₽
        </span>
        {showMinus ? (
          <button onClick={() => deleteItem(tablet)}>
            <FaMinus size={28} className="basket-svg__card" />
          </button>
        ) : (
          <button
            className="basket-btn__card"
            onClick={() => addBasket(tablet)}
          >
            <AiOutlineShoppingCart size={28} className="basket-svg__card" />
          </button>
        )}
      </div>
    </>
  );
}

export default TabletCard;
