import React from "react";
import { useParams } from "react-router-dom";
import AboutSlider from "../../../components/aboutSlider/AboutSlider";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function AboutWatches({ watches }) {
  //
  const { id } = useParams();

  const navigate = useNavigate();

  const Catalog = () => {
    navigate("/WatchesPage");
  };

  const foundWatch = watches.find((watch) => {
    return watch.id === +id;
  });
  return (
    <>
      {foundWatch && (
        <>
          <div className="hero-button">
            <h1 className="hero-about__title">Купить: {foundWatch.name}</h1>
            <button className="back-catalog" onClick={Catalog}>
              <BiArrowBack className="back-catalog__icon" /> в каталог
            </button>
          </div>
          <div className="wrapper-about__phone">
            <AboutSlider foundProduct={foundWatch} />
            <div className="description-wrapper">
              <ul className="wrapper-ul__li">
                <li>
                  <span className="price-title">Цена</span>
                  <span className="price-block">
                    {foundWatch.price} <span>руб.</span>
                  </span>
                </li>
                <li>
                  <span className="operating-system">
                    Операционная система:
                  </span>
                  <span className="system">{foundWatch.operatingSystem}</span>
                </li>
                <li>
                  <span className="operating-system">Процессор:</span>
                  <span className="system">{foundWatch.processor}</span>
                </li>
                <li>
                  <span className="operating-system">Диагональ:</span>
                  <span className="system">{foundWatch.display}</span>
                </li>
                <li>
                  <span className="operating-system">
                    Объем оперативной памяти:
                  </span>
                  <span className="system">{foundWatch.operatingMemory}</span>
                </li>
                <li>
                  <span className="operating-system">
                    Объем встроенной памяти:
                  </span>
                  <span className="system">{foundWatch.memory}</span>
                </li>
                <li>
                  <span className="operating-system">
                    Емкость аккумулятора:
                  </span>
                  <span className="system">{foundWatch.battery}</span>
                </li>
                <li>
                  <span className="operating-system">
                    Время работы в активном режиме:
                  </span>
                  <span className="system">{foundWatch.activeHours}</span>
                </li>
                <li>
                  <span className="operating-system">Габариты (ШхВхТ):</span>
                  <span className="system">{foundWatch.dimensions}</span>
                </li>

                <li>
                  <span className="operating-system">Описание:</span>
                  <span className="system">{foundWatch.discreption}</span>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AboutWatches;
