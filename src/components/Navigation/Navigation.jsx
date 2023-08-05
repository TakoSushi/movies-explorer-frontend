import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

const isLoggedIn = true;

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__list">
        <NavLink to="" 
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "navigation__link navigation_active" : ""
          }
          // className="navigation__link"
        >
          Главная
        </NavLink>
        <NavLink
          to=""
          className={({ isActive, isPending }) =>
            isPending ? "navigation__link" : isActive ? "navigation__link navigation_active" : ""
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to=""
          className={({ isActive, isPending }) =>
            isPending ? "navigation__link" : isActive ? "navigation__link navigation_active" : ""
          }
        >
          Сохранённые фильмы
        </NavLink>
      </div>
      <div className="navigation__accaunt">
        {isLoggedIn ? (
          <>
            <NavLink
              to=""
              className={({ isActive, isPending }) =>
                isPending ? "navigation__link" : isActive ? "navigation__link navigation_active" : ""
              }
            >
              Аккаунт
            </NavLink>
            <div className="navigation__accaunt-icon"></div>
            {/* <img src={accauntIcon} alt="Мой аккаунт"></img> */}
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
