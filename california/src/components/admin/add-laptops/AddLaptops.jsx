import React from "react";
import { useState } from "react";

function AddLaptops({laptops, setLaptops}) {

  const [laptop, setLaptop] = useState({
    brend: "",
    img1: "",
    img2: "",
    img3: "",
    name: "",
    operatingSystem: "",
    processor: "",
    processorCores: "",
    operatingMemory: "",
    display: "",
    videoCard: "",
    battery: "",
    ssd: "",
    discreption: "",
    price: "",
    totalPrice: "",
    count: "",
  });

  const addLaptop = (e) => {
    const newLaptop = { ...laptop, id: Math.random() };
    e.preventDefault();
    setLaptops([...laptops, newLaptop]);

    fetch("http://localhost:5555/create/laptop", {
      method: "POST",
      body: JSON.stringify(newLaptop),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return (
    <div className="phone-categories">
      <form onSubmit={(e) => addLaptop(e)} className="form-phone" action="">
        <input
          onChange={(e) => setLaptop({ ...laptop, brend: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Марка"
        />
        <input
          onChange={(e) => setLaptop({ ...laptop, img1: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Фото-1"
        />
        <input
          onChange={(e) => setLaptop({ ...laptop, img2: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Фото-2"
        />
        <input
          onChange={(e) => setLaptop({ ...laptop, img3: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Фото-3"
        />
        <input
          onChange={(e) => setLaptop({ ...laptop, name: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Имя"
        />
        <input
          onChange={(e) =>
            setLaptop({ ...laptop, operatingSystem: e.target.value })
          }
          className="categories-input"
          type="text"
          placeholder="Операционная система"
        />
        <input
          onChange={(e) => setLaptop({ ...laptop, processor: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Процессор"
        />
        <input
          onChange={(e) =>
            setLaptop({ ...laptop, processorCores: e.target.value })
          }
          className="categories-input"
          type="text"
          placeholder="Количество ядер процессора"
        />
        <input
          onChange={(e) =>
            setLaptop({ ...laptop, operatingMemory: e.target.value })
          }
          className="categories-input"
          type="text"
          placeholder="Оперативная память"
        />
        <input
          onChange={(e) => setLaptop({ ...laptop, display: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Экран"
        />
        <input
          onChange={(e) => setLaptop({ ...laptop, videoCard: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Видеокарта"
        />
        <input
          onChange={(e) => setLaptop({ ...laptop, battery: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Батарея"
        />
        <input
          onChange={(e) => setLaptop({ ...laptop, ssd: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Накопитель (SSD)"
        />
        <input
          onChange={(e) =>
            setLaptop({ ...laptop, discreption: e.target.value })
          }
          className="categories-input"
          type="text"
          placeholder="Описание"
        />
        <input
          onChange={(e) => setLaptop({ ...laptop, price: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Цена"
        />
        <input
          onChange={(e) => setLaptop({ ...laptop, totalPrice: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Итоговая цена"
        />
        <input
          onChange={(e) => setLaptop({ ...laptop, count: e.target.value })}
          className="categories-input"
          type="text"
          placeholder="Количество"
        />
        <div className="phone-add">
          <button onSubmit={(e) => addLaptop(e)} className="add-phone">
            Add Laptop
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddLaptops;
