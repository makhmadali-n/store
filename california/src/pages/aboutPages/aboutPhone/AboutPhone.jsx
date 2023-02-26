import React from "react";
import { useParams } from "react-router-dom";
import AboutSlider from "../../../components/aboutSlider/AboutSlider";
import "../About-Style.css";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

// import required modules

function AboutPhone({ phones }) {
  //
  const { id } = useParams();
  const navigate = useNavigate();

  const Catalog = () => {
    navigate("/PhonesPage");
  };

  const foundPhone = phones.find((phone) => {
    return phone.id === +id;
  });

  return (
    <>
      {foundPhone && (
        <>
          <div className="hero-button">
            <h1 className="hero-about__title">Купить: {foundPhone.name}</h1>
            <button className="back-catalog" onClick={Catalog}>
              <BiArrowBack className="back-catalog__icon" /> в каталог
            </button>
          </div>
          <div className="wrapper-about__phone">
            <AboutSlider foundProduct={foundPhone} />
            <div className="description-wrapper">
              <ul className="wrapper-ul__li">
                <li>
                  <span className="price-block">
                    Цена {foundPhone.price} <span>руб.</span>
                  </span>
                </li>
                <li>
                  <span className="operating-system">
                    Операционная система:
                  </span>
                  <span className="system">{foundPhone.operatingSystem}</span>
                </li>
                <li>
                  <span className="operating-system">Дисплей:</span>
                  <span className="system">{foundPhone.display}</span>
                </li>
                <li>
                  <span className="operating-system">
                    Основные (тыловые) камеры:
                  </span>
                  <span className="system">{foundPhone.camera}</span>
                </li>
                <li>
                  <span className="operating-system">
                    Разрешение фронтальной камеры:
                  </span>
                  <span className="system">{foundPhone.selfieCamer}</span>
                </li>
                <li>
                  <span className="operating-system">
                    Объем встроенной памяти:
                  </span>
                  <span className="system">{foundPhone.memory}</span>
                </li>
                <li>
                  <span className="operating-system">Записи видео:</span>
                  <span className="system">{foundPhone.video}</span>
                </li>
                <li>
                  <span className="operating-system">Аккумулятор:</span>
                  <span className="system">{foundPhone.battery}</span>
                </li>
                <li>
                  <span className="operating-system">Описание:</span>
                  <span className="system">{foundPhone.discreption}</span>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AboutPhone;
