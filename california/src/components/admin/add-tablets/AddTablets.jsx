import React from "react";
import { useState } from "react";

function AddTablets({ tablets, setTablets }) {
  const [tablet, setTablet] = useState({
    brend: "",
    img1: "",
    img2: "",
    img3: "",
    name: "",
    operatingSystem: "",
    display: "",
    operatingMemory: "",
    camera: "",
    processor: "",
    selfi: "",
    memory: "",
    battery: "",
    discreption: "",
    price: "",
    count: "",
    totalPrice: ""
  });

  const addTablet = (e) => {
    const newTablet = { ...tablet, id: Math.random() };
    e.preventDefault();
    setTablets([...tablets, newTablet]);
    
    
    fetch("http://localhost:5555/create/tablet", {
      method: "POST",
      body: JSON.stringify(newTablet),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  return (
    <div className="phone-categories">
      <form onSubmit={(e) => addTablet(e)} className="form-phone" action="">
        <input
          onChange={(e) => setTablet({ ...tablet, brend: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Марка"
        />
        <input
          onChange={(e) => setTablet({ ...tablet, img1: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Фото-1"
        />
        <input
          onChange={(e) => setTablet({ ...tablet, img2: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Фото-2"
        />
        <input
          onChange={(e) => setTablet({ ...tablet, img3: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Фото-3"
        />
        <input
          onChange={(e) => setTablet({ ...tablet, name: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Имя"
        />
        <input
          onChange={(e) =>
            setTablet({ ...tablet, operatingSystem: e.target.value })
          }
          className="categories-input"
          type="text"
          placeholder="Операционная система"
        />
        <input
          onChange={(e) => setTablet({ ...tablet, display: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Экран"
        />
        <input
          onChange={(e) =>
            setTablet({ ...tablet, operatingMemory: e.target.value })
          }
          className="categories-input"
          type="text"
          placeholder="Оперативная память"
        />
        <input
          onChange={(e) => setTablet({ ...tablet, camera: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Камера"
        />
        <input
          onChange={(e) => setTablet({ ...tablet, processor: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Процессор"
        />
        <input
          onChange={(e) => setTablet({ ...tablet, selfi: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Селфи камера"
        />
        <input
          onChange={(e) => setTablet({ ...tablet, memory: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Память"
        />
        <input
          onChange={(e) => setTablet({ ...tablet, battery: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Батарея"
        />
        <input
          onChange={(e) =>
            setTablet({ ...tablet, discreption: e.target.value })
          }
          className="categories-input"
          type="text"
          placeholder="Описание"
        />
        <input
          onChange={(e) => setTablet({ ...tablet, price: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Цена"
        />
        <input
          onChange={(e) => setTablet({ ...tablet, totalPrice: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Итоговая цена"
        />
        <input
          onChange={(e) => setTablet({ ...tablet, count: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Количество"
        />
        <div className="phone-add">
          <button onSubmit={(e) => addTablet(e)} className="add-phone">
            Add Tablet
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTablets;
