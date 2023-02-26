import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    login: "",
    password: "",
  });
  const onLoginChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const onBtnClick = () => {
    if (inputValues.login === "" || inputValues.password === "") {
      alert("Empty Inputs");
    } else {
      localStorage.setItem("user", JSON.stringify(inputValues));
      setUser(inputValues);
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-content">
          <h3>Войти</h3>
          <input
            className="login-input"
            onChange={(e) => onLoginChange(e)}
            type="text"
            name="login"
            placeholder="Логин"
          />
          <input
            className="login-input"
            onChange={(e) => onLoginChange(e)}
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <button className="login-btn" onClick={onBtnClick}>
            Войти
          </button>
          <div>
            <Link to="/Registration">
              <span className="login__title">Зарегистрироваться</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
