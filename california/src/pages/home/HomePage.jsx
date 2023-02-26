import React from "react";
import { Link } from "react-router-dom";
import CardsComponent from "../../components/card/CardsComponent";
import "./HomeStyle.css";
import Slider from "../../components/slider/Slider";
import BestProducts from "../../components/card/bestProducts/BestProducts";

function Main() {
  return (
    <div className="container">
      <Slider />
      <div className="content-title">
        <h1 className="main-title">Shop our latest offers and categories</h1>
        <p className="main-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="categories-wrapper">
        <div className="wrapp">
          <Link to="/LaptopsPage">
            <div className="laptop">
              <img
                className="laptops-img"
                src="./img/categories/laptops.svg"
                alt="laptop"
              />
              <p className="laptop-subtitle">Laptops</p>
              <h2 className="laptop-title">
                True Laptop <br /> Solution
              </h2>
            </div>
          </Link>
          <Link to="/WatchesPage">
            <div className="watch">
              <img className="watch-img" src="/img/card/IMAGE.svg" alt="watch" />
              <div className="block-subtitle__title">
                <p className="watch-subtitle">Watch</p>
                <h2 className="watch-title">
                  Not just <br /> stylisht
                </h2>
              </div>
            </div>
          </Link>
        </div>
        <Link to="/PhonesPage">
          <div className="phones">
            <img
              className="phone-img"
              src="./img/categories/phones.svg"
              alt="phone"
            />
            <p className="phone-subtitle">Phones</p>
            <h2 className="phone-title">
              Your day to day <br /> life
            </h2>
          </div>
        </Link>
        <Link className="link-tablet" to="/TabletsPage">
          <div className="tablet">
            <p className="tablet-subtitle">Tablet</p>
            <h2 className="tablet-title">
              Empower your <br /> work
            </h2>
            <img
              className="tablet-img"
              src="./img/categories/tables.svg"
              alt="tablets"
            />
          </div>
        </Link>
      </div>
      <div className="content-title">
        <h1 className="main-title">Save on our most selled items.</h1>
        <p className="main-subtitle">
          Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
        </p>
      </div>
      <CardsComponent />
      <div className="content-title">
        <h1 className="main-title">See the best around here</h1>
        <p className="main-subtitle">
          Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
        </p>
      </div>
      <BestProducts />
      <div className="never-wrapp">
        <div className="never">
          <h1 className="never-h1">Never miss a thing</h1>
          <span className="never-span">
            Sign up for texts to be notified about our best offers on the
            perfect gifts.
          </span>
          <img className="never-img" src="../../img/card/IMAGE-3.svg" alt="never-img" />
          <div className="block-input">
            <input
              className="never-input"
              type="email"
              placeholder="Your email"
            />
            <button className="never-btn">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
