import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/aguspranyoto/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://dribbble.com/aguud"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-dribbble"></i>
      </a>

      <a
        href="https://github.com/aguspranyoto"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social;
