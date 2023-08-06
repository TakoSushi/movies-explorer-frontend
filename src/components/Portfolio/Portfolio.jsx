import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
      <div className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <Link className="portfolio__link">Статичный сайт<i>&#8599;</i></Link>
          </li>
          <li className="portfolio__item">
            <Link className="portfolio__link">Адаптивный сайт<i>&#8599;</i></Link>
          </li>
          <li className="portfolio__item">
            <Link className="portfolio__link">Одностраничное приложение <i>&#8599;</i></Link>
          </li>
        </ul>
      </div>
  );
}
  
export { Portfolio };
  