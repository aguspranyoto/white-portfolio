import React from "react";

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Work Experience</h3>
        <span className="about__subtitle">2 Years</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Front End Engineer Experience</h3>
        <span className="about__subtitle">1 Year</span>
      </div>

      <div className="about__box">
        <i className="bx bx-file about__icon"></i>
        <h3 className="about__title">Web Development Bootcamp</h3>
        <span className="about__subtitle">2 Certificates</span>
      </div>
    </div>
  );
}

export default Info;
