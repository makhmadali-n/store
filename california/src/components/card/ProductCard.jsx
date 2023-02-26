import React from "react";
import "./ProductCard.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProductCard({ basket, setBasket, phone }) {
  //
  const isPhoneInBasket = basket.find((item) => item.id === phone.id);
  const [showMinus, setShowStatus] = useState(isPhoneInBasket ? true : false);

  const addBasket = (product) => {
    setShowStatus(true);
    setBasket([...basket, {...product, count: 1,}]);
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
        <Link to={`/AboutPhone/${phone.id}`}>
          <img className="phone-card-img" src={phone.img1} alt="phone" />
        </Link>
      </motion.div>
      <p className="phone-name">{phone.name}</p>
      <p className="phone-discreption">{phone.discreption}</p>
      <div className="footer-phone">
        <span className="phone-price">
          {priceFormatter.format(phone.price)} ₽
        </span>

        {showMinus ? (
          <button onClick={() => deleteItem(phone)}>
            <FaMinus size={28} className="basket-svg__card" />
          </button>
        ) : (
          <button className="basket-btn__card" onClick={() => addBasket(phone)}>
            <AiOutlineShoppingCart size={28} className="basket-svg__card" />
          </button>
        )}
      </div>
    </>
  );
}

export default ProductCard;
