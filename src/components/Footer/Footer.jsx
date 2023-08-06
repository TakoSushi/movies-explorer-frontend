import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return <footer className="footer">
    <div className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</div>
    <div className="footer__info">
      <div className="footer__copyright">&copy; 2023</div>
      <ul className="footer__list">
        <li>
          <Link
            to="https://practicum.yandex.ru/"
            className="footer__link"
            target="_blank"
          >
            Яндекс.Практикум
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/"
            className="footer__link"
            target="_blank"
          >
            Github
          </Link>
        </li>  
      </ul>
    </div>
  </footer>;
}

export { Footer };
