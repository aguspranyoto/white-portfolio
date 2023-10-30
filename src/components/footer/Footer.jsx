import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* <h1 className="footer__title">Aguud</h1> */}

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/aguspranyoto/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://dribbble.com/aguud"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-dribbble"></i>
          </a>

          <a
            href="https://github.com/aguspranyoto"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Agus Pranyoto. All rigths reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
