import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../navbar/NavbarStyle.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";


function Navbar({ basket, user, setUser }) {
  //
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuCLass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuCLass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuCLass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const onLogOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="../../img/logo/logo.svg" alt="" className="nav-logo" />
            </Link>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/PhonesPage">
                Phones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/TabletsPage">
                Tablets
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/WatchesPage">
                Watches
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/LaptopsPage">
                Laptops
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/ContactsPage">
                Contacts
              </Link>
            </li>
          </ul>
          <div className={menu_class}>
            <ul className="menu-burger__open">
              <li className="nav-item">
                <Link className="nav-links" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/PhonesPage">
                  Phones
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/TabletsPage">
                  Tablets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/WatchesPage">
                  Watches
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/LaptopsPage">
                  Laptops
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/ContactsPage">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div className="icons">
            <div className="basket">
              <span className="basket-span">{basket.length}</span>
              <Link className="basket-navbar-__icon" to="/basket">
                <AiOutlineShoppingCart size={28} />
              </Link>
            </div>
            <div className="user">
              {user ? (
                <button onClick={onLogOut}>
                  <BiLogIn size={28} />
                </button>
              ) : (
                <Link to="/Login" className="basket-navbar-__icon">
                  <FiUser size={28} />
                </Link>
              )}
            </div>
            <div className="burger-menu" onClick={updateMenu}>
              <span className={burger_class}></span>
              <span className={burger_class}></span>
              <span className={burger_class}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
