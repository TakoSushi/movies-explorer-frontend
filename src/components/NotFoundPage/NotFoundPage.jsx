import { NavLink } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="notfoundpage">
      <h2 className="notfoundpage__error">404</h2>
      <p className="notfoundpage__errortext">Страница не найдена</p>
      <NavLink to="/" className="notfoundpage__backlink">Назад</NavLink>
    </div>
  );
}
  
export { NotFoundPage };
  