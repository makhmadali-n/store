import React from "react";
import "./Contacts.css";

function ContactsPage() {
  return (
    <div className="container">
      <div className="contact-wrapper">
        <div className="block-address">
          <h2 className="contact-title">Контактная информация</h2>
          <p className="address-title">"California" - Сеть Салонов Связи</p>
          <span className="address-subtitle">
            "California" - Сеть Салонов Связи пр.Рудаки 83, "ЦУМ", 1 этаж, время
            работы: с 9:00 до 18:00
          </span>
          <p className="number-tel">
            Телефоны: (+992) 000000000, (+992) 000000000
          </p>
          <p className="email">Email: info@california.tj</p>
        </div>
        <div className="times">
          <h4>Часы работы</h4>
          <table className="table">
            <tbody>
              <tr>
                <td>Понедельник</td>
                <td>9:00 - 20:00</td>
              </tr>
              <tr>
                <td>Вторник</td>
                <td>9:00 - 20:00</td>
              </tr>
              <tr>
                <td>Среда</td>
                <td>9:00 - 20:00</td>
              </tr>
              <tr>
                <td>Четверг</td>
                <td>9:00 - 20:00</td>
              </tr>
              <tr>
                <td>Пятница</td>
                <td>9:00 - 20:00</td>
              </tr>
              <tr>
                <td>Суббота</td>
                <td>9:00 - 20:00</td>
              </tr>
              <tr>
                <td>Воскресенье</td>
                <td>9:00 - 20:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
