import React from "react";
import { useParams } from "react-router-dom";
import AboutSlider from "../../../components/aboutSlider/AboutSlider";
import "../About-Style.css";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function AboutLaptop({ laptops }) {
  const { id } = useParams();

  const navigate = useNavigate();

  const Catalog = () => {
    navigate("/LaptopsPage");
  };

  const foundLaptop = laptops.find((laptop) => {
    return laptop.id === +id;
  });

  return (
    <>
      {foundLaptop && (
        <>
          <div className="hero-button">
            <h1 className="hero-about__title">Купить: {foundLaptop.name}</h1>
            <button className="back-catalog" onClick={Catalog}>
              <BiArrowBack className="back-catalog__icon" /> в каталог
            </button>
          </div>
          <div className="wrapper-about__phone">
            <AboutSlider foundProduct={foundLaptop} />
            <div className="description-wrapper">
              <ul className="wrapper-ul__li">
                <li>
                  <span className="price-title">Цена</span>
                  <span className="price-block">
                    {foundLaptop.price} <span>руб.</span>
                  </span>
                </li>
                <li>
                  <span className="operating-system">
                    Операционная система:
                  </span>
                  <span className="system">{foundLaptop.operatingSystem}</span>
                </li>
                <li>
                  <span className="operating-system">Процессор:</span>
                  <span className="system">{foundLaptop.processor}</span>
                </li>
                <li>
                  <span className="operating-system">
                    Количество ядер процессора:
                  </span>
                  <span className="system">{foundLaptop.processorCores}</span>
                </li>
                <li>
                  <span className="operating-system">Память:</span>
                  <span className="system">{foundLaptop.operatingMemory}</span>
                </li>
                <li>
                  <span className="operating-system">Экран:</span>
                  <span className="system">{foundLaptop.display}</span>
                </li>
                <li>
                  <span className="operating-system">Видеокарта:</span>
                  <span className="system">{foundLaptop.videoCard}</span>
                </li>
                <li>
                  <span className="operating-system">Батарея:</span>
                  <span className="system">{foundLaptop.battery}</span>
                </li>
                <li>
                  <span className="operating-system">Накопитель (SSD):</span>
                  <span className="system">{foundLaptop.ssd}</span>
                </li>
                <li>
                  <span className="operating-system">Описание:</span>
                  <span className="system">{foundLaptop.discreption}</span>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AboutLaptop;
