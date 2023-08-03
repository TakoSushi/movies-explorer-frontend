import { Link, NavLink } from "react-router-dom";
import accauntIcon from "../../images/icon__COLOR_icon-main.svg";
import "./Navigation.css";

const isLoggedIn = true;

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__list">
        <NavLink to="" className="navigation__link">
          Главная
        </NavLink>
        <NavLink to="" className="navigation__link">
          Фильмы
        </NavLink>
        <NavLink to="" className="navigation__link">
          Сохранённые фильмы
        </NavLink>
      </div>
      <div>
        {isLoggedIn ? (
          <>
            <NavLink to="" className="navigation__link">
              Аккаунт
            </NavLink>
            <div className="guard"></div>
            <img src={accauntIcon} alt="Мой аккаунт"></img>
          </>
        ) : (
          <>
            <Link to="" className="registration__link">
              Регистрация
            </Link>
            <button to="" type="button" className="button">
              Войти
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export { Navigation };
