import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <Link
              to="https://takosushi.github.io/russian-travel/"
              className="portfolio__link"
              target="_blank"
              rel="external nofollow"
            >
              Статичный сайт<i>&#8599;</i>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link
             to="https://takosushi.github.io/russian-travel/"
              className="portfolio__link"
              target="_blank"
              rel="external nofollow"
            >
              Адаптивный сайт<i>&#8599;</i>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link
              to="https://takosushi.github.io/mesto-react/"
              className="portfolio__link"
              target="_blank"
              rel="external nofollow"
            >
                Одностраничное приложение <i>&#8599;</i>
            </Link>
          </li>
        </ul>
      </section>
  );
}
  
export { Portfolio };
  