import React from "react";
import { useParams } from "react-router-dom";
import AboutSlider from "../../../components/aboutSlider/AboutSlider";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function AboutTablet({ tablets }) {
  //
  const { id } = useParams();

  const navigate = useNavigate();

  const Catalog = () => {
    navigate("/TabletsPage");
  };

  const foundTablet = tablets.find((tablet) => {
    return tablet.id === +id;
  });

  return (
    <>
      {foundTablet && (
        <>
          <div className="hero-button">
            <h1 className="hero-about__title">Купить: {foundTablet.name}</h1>
            <button className="back-catalog" onClick={Catalog}>
              <BiArrowBack className="back-catalog__icon" /> в каталог
            </button>
          </div>
          <div className="wrapper-about__phone">
            <AboutSlider foundProduct={foundTablet} />
            <div className="description-wrapper">
              <ul className="wrapper-ul__li">
                <li>
                  <span className="price-title">Цена</span>
                  <span className="price-block">
                    {foundTablet.price} <span>руб.</span>
                  </span>
                </li>
                <li>
                  <span className="operating-system">
                    Операционная система:
                  </span>
                  <span className="system">{foundTablet.operatingSystem}</span>
                </li>
                <li>
                  <span className="operating-system">Процессор:</span>
                  <span className="system">{foundTablet.processor}</span>
                </li>
                <li>
                  <span className="operating-system">
                    Объем встроенной памяти:
                  </span>
                  <span className="system">{foundTablet.memory}</span>
                </li>
                <li>
                  <span className="operating-system">Встроенная память:</span>
                  <span className="system">{foundTablet.operatingMemory}</span>
                </li>
                <li>
                  <span className="operating-system">Экран:</span>
                  <span className="system">{foundTablet.display}</span>
                </li>
                <li>
                  <span className="operating-system">
                    Разрешение основной (тыловой) камеры
                  </span>
                  <span className="system">{foundTablet.camera}</span>
                </li>
                <li>
                  <span className="operating-system">
                    Разрешение фронтальной камеры:
                  </span>
                  <span className="system">{foundTablet.selfi}</span>
                </li>
                <li>
                  <span className="operating-system">Аккумулятор:</span>
                  <span className="system">{foundTablet.battery}</span>
                </li>
                <li>
                  <span className="operating-system">Описание:</span>
                  <span className="system">{foundTablet.discreption}</span>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AboutTablet;
