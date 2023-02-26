import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import "./BasketStyle.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { useState, useEffect } from "react";
import PaymentForm from "../payment/PaymentForm";

function Basket({ basket, setBasket }) {
  //

  const [open, setOpen] = useState(false);

  const [total, setTotal] = useState({
    price: basket.reduce((prev, curr) => {
      return prev + Number(curr.totalPrice);
    }, 0),
    count: basket.reduce((prev, curr) => {
      return prev + Number(curr.count);
    }, 0),
  });

  useEffect(() => {
    setTotal({
      price: basket.reduce((prev, curr) => {
        return prev + Number(curr.totalPrice);
      }, 0),
      count: basket.reduce((prev, curr) => {
        return prev + Number(curr.count);
      }, 0),
    });
  }, [basket]);

  const onDeleteProduct = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
  };

  const handleDecrement = (id) => {
    setBasket((basket) => {
      return basket.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: Number(product.count) - 1,
            totalPrice: Number(product.totalPrice) - Number(product.price),
          };
        }
        return product;
      });
    });
  };

  const handleIncrement = (id) => {
    setBasket((basket) => {
      return basket.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: Number(product.count) + 1,
            totalPrice: Number(product.totalPrice) + Number(product.price),
          };
        }
        return product;
      });
    });
  };

  const changeValueBasket = (id, value) => {
    setBasket((basket) => {
      return basket.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: Number(value),
            totalPrice: value * Number(product.price),
          };
        }
        return product;
      });
    });
  };

  const priceFormatter = new Intl.NumberFormat();

  return (
    <div className="container">
      <div className="basket-wrapper">
        <div className="hero-title">
          <h3 className="hero-subtitle">НАИМЕНОВАНИЕ</h3>
          <div></div>
          <h3 className="hero-subtitle__two">СТОИМОСТЬ</h3>
        </div>
      </div>
      {basket.length > 0 ? (
        basket.map((item) => {
          return (
            <div key={item.id} className="render-wrapper">
              <img className="render-img" src={item.img1} alt="" />
              <div className="render-name">
                <p className="item-name">{item.name}</p>
              </div>
              <div className="count">
                <button onClick={() => handleDecrement(item.id)}>
                  <FaMinus />
                </button>
                <input
                  className="input-count__basket"
                  type="number"
                  value={item.count}
                  onChange={(e) => changeValueBasket(item.id, +e.target.value)}
                />
                <button onClick={() => handleIncrement(item.id)}>
                  <FaPlus />
                </button>
              </div>
              <span className="item-price">
                {priceFormatter.format(item.totalPrice)} руб.
              </span>
              <button
                className="delete-item"
                onClick={() => onDeleteProduct(item.id)}
              >
                <RiDeleteBin7Line size={26} />
              </button>
            </div>
          );
        })
      ) : (
        <div className="wrapper-basket__empty">
          <img
            className="basket-empty"
            src="img/icons/basket-empty.png"
            alt="basket-empty"
          />
          <h3 className="basket-empty__title">Пока нет товаров</h3>
        </div>
      )}
      <div className="basket-wrapper">
        <div className="hero-title__footer">
          <h3 className="hero-subtitle">{total.count} Еденицы</h3>
          <div></div>
          <div className="payment-block">
            <h3 className="hero-subtitle__two">{total.price} Руб.</h3>
            <button className="payment-btn" onClick={() => setOpen(true)}>
              <MdPayment size={26} />
              Купить
            </button>
          </div>
        </div>
        {open && <PaymentForm setOpen={setOpen} />}
      </div>
    </div>
  );
}

export default Basket;
