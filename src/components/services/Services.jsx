import React from "react";
import { useState } from "react";
import "./Services.css";
import certificate1 from "../../assets/frontend.jpg";
import certificate2 from "../../assets/bnsp.jpg";

function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Certificate</h2>
      <span className="section__subtitle">My recent certificate</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Engineering <br /> Bootcamp
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">
                Frontend Engineering Bootcamp
              </h3>
              <p className="services__modal-description">
                Create responsive student portal website with React and Chakra
                UI
              </p>

              <div>
                <img src={certificate1} />
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Junior <br /> Web <br /> Programmer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">Junior Web Programmer</h3>
              <p className="services__modal-description">
                Create an online shop website with CodeIgniter 3 and Bootstrap.
              </p>

              <div>
                <img src={certificate2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
