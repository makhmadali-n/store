import React from "react";
import { useState } from "react";

function AddPhones({ phones, setPhones }) {
  const [phone, setPhone] = useState({
    brend: "",
    img1: "",
    img2: "",
    img3: "",
    name: "",
    operatingSystem: "",
    display: "",
    camera: "",
    selfieCamer: "",
    video: "",
    memory: "",
    battery: "",
    discreption: "",
    price: "",
    count: "",
    totalPrice: "",
  });

  const addPhone = (e) => {
    const newPhone = { ...phone, id: Math.random() };
    e.preventDefault();
    setPhones([...phones, newPhone]);

    fetch("http://localhost:5555/create/phone", {
      method: "POST",
      body: JSON.stringify(newPhone),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return (
    <div className="phone-categories">
      <form onSubmit={(e) => addPhone(e)} className="form-phone" action="">
        <input
          onChange={(e) => setPhone({ ...phone, brend: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Марка"
        />
        <input
          onChange={(e) => setPhone({ ...phone, img1: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Фото-1"
        />
        <input
          onChange={(e) => setPhone({ ...phone, img2: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Фото-2"
        />
        <input
          onChange={(e) => setPhone({ ...phone, img3: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Фото-3"
        />
        <input
          onChange={(e) => setPhone({ ...phone, name: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Имя"
        />
        <input
          onChange={(e) =>
            setPhone({ ...phone, operatingSystem: e.target.value })
          }
          className="categories-input"
          type="text"
          placeholder="Операционная система"
        />
        <input
          onChange={(e) => setPhone({ ...phone, display: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Экран"
        />
        <input
          onChange={(e) => setPhone({ ...phone, camera: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Камера"
        />
        <input
          onChange={(e) => setPhone({ ...phone, selfieCamer: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Селфи камера"
        />
        <input
          onChange={(e) => setPhone({ ...phone, video: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Видео"
        />
        <input
          onChange={(e) => setPhone({ ...phone, memory: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Память"
        />
        <input
          onChange={(e) => setPhone({ ...phone, battery: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Батарея"
        />
        <input
          onChange={(e) => setPhone({ ...phone, discreption: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Опесание"
        />
        <input
          onChange={(e) => setPhone({ ...phone, price: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Цена"
        />
        <input
          onChange={(e) => setPhone({ ...phone, totalPrice: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Итоговая цена"
        />
        <input
          onChange={(e) => setPhone({ ...phone, count: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Количество"
        />
        <div className="phone-add">
          <button onSubmit={(e) => addPhone(e)} className="add-phone">
            Add Phone
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPhones;
