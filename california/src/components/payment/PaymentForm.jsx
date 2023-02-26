import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";
import "./PaymentForm.css";

const PaymentForm = ({setOpen}) => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const onCloseCredit = () => {
    setOpen(false)
  }

  return (
    <div id="PaymentForm" className="paymentForm">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form className="form-credit">
        <input
          className="form-input__credit"
          type="number"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          className="form-input__credit"
          type="text"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <div className="block-input__two">
          <input
          className="expiry-input"
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
          className="cvc-input"
            type="password"
            name="cvc"
            placeholder="CVC"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <button className="btn-payment__credit" onClick={() => onCloseCredit(false)}>Оплатить</button>
      </form>
    </div>
  );
};

export default PaymentForm;
