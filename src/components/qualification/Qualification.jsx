import React, { useState } from "react";
import "./Qualification.css";

function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Mercu Buana University</h3>
                <span className="qualification__subtitle">
                  Informatics Engineering
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2019 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">SMKN 26 Jakarta</h3>
                <span className="qualification__subtitle">
                  Mechanical Engineering
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2014 - 2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SMPN 272 Jakarta</h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2012 - 2014
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  SDN Pinang Ranti 06 Jakarta
                </h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2006 - 2012
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Frontend Engineering - Intern
                </h3>
                <span className="qualification__subtitle">
                  PT. Surya Citra Media
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  Aug 2022 - Dec 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Developer - Intern</h3>
                <span className="qualification__subtitle">
                  PT. Sugity Creatives
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  Apr 2022 - Jun 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Quality Assurance - Full time
                </h3>
                <span className="qualification__subtitle">
                  PT. Yamaha Music Manufacturing Indonesia
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  Jun 2018 - May 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Production Operator - Full time
                </h3>
                <span className="qualification__subtitle">
                  PT. Braja Mukti Cakra
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  Apr 2017 - Apr 2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
