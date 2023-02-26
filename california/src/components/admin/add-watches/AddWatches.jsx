import React from "react";
import { useState } from "react";

function AddWatches({ watches, setWatches }) {
  const [watch, setWatch] = useState({
    brend: "",
    img1: "",
    img2: "",
    img3: "",
    name: "",
    operatingSystem: "",
    processor: "",
    display: "",
    operatingMemory: "",
    memory: "",
    battery: "",
    activeHours: "",
    dimensions: "",
    discreption: "",
    price: "",
    count: "",
    totalPrice: "",
  });

  const addWatch = (e) => {
    const newWatch = { ...watch, id: Math.random() };
    e.preventDefault();
    setWatches([...watches, newWatch]);

    fetch("http://localhost:5555/create/watch", {
      method: "POST",
      body: JSON.stringify(newWatch),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  return (
    <div className="phone-categories">
      <form onSubmit={(e) => addWatch(e)} className="form-phone" action="">
        <input
          onChange={(e) => setWatch({ ...watch, brend: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Марка"
        />
        <input
          onChange={(e) => setWatch({ ...watch, img1: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Фото-1"
        />
        <input
          onChange={(e) => setWatch({ ...watch, img2: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Фото-2"
        />
        <input
          onChange={(e) => setWatch({ ...watch, img3: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Фото-3"
        />
        <input
          onChange={(e) => setWatch({ ...watch, name: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Имя"
        />
        <input
          onChange={(e) =>
            setWatch({ ...watch, operatingSystem: e.target.value })
          }
          className="categories-input"
          type="text"
          placeholder="Операционная система"
        />
        <input
          onChange={(e) => setWatch({ ...watch, processor: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Процессор"
        />
        <input
          onChange={(e) => setWatch({ ...watch, display: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Экран"
        />
        <input
          onChange={(e) =>
            setWatch({ ...watch, operatingMemory: e.target.value })
          }
          className="categories-input"
          type="text"
          placeholder="Оперативнная память"
        />
        <input
          onChange={(e) => setWatch({ ...watch, memory: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Память"
        />
        <input
          onChange={(e) => setWatch({ ...watch, battery: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Батарея"
        />
        <input
          onChange={(e) => setWatch({ ...watch, activeHours: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Активый часы"
        />
        <input
          onChange={(e) => setWatch({ ...watch, dimensions: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Размеры"
        />
        <input
          onChange={(e) => setWatch({ ...watch, discreption: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Описание"
        />
        <input
          onChange={(e) => setWatch({ ...watch, price: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Цена"
        />
        <input
          onChange={(e) => setWatch({ ...watch, totalPrice: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Итоговая цена"
        />
        <input
          onChange={(e) => setWatch({ ...watch, count: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Количество"
        />
        <div className="phone-add">
          <button onSubmit={(e) => addWatch(e)} className="add-phone">
            Add Watch
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddWatches;
