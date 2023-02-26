import React from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-content">
          <h3>Регистрация</h3>
          <input className="login-input" type="text" placeholder="Имя" />
          <input className="login-input" type="text" placeholder="Фамилия" />
          <input className="login-input" type="email" placeholder="Эл. почта" />
          <input className="login-input" type="password" placeholder="Пароль" />
          <input
            className="login-input"
            type="password"
            placeholder="Повторите пароль"
          />
          <button onClick={onButtonClick} className="login-btn">
            Создать аккаунт
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
