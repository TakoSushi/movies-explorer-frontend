import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {

  const setActiveMenuClass = ({ isActive }) => 
  [
    "menu__item", "navigation__link",
    isActive ? "navigation__link_active" : "null",
  ]
    .filter(Boolean)
    .join(" ");

  const setActiveAccauntClass = ({ isActive }) => 
  [
    "menu__item", "navigation__link", "navigation__link_accaunt",
    isActive ? "navigation__link_active" : "null",
  ]
    .filter(Boolean)
    .join(" ");
  

  const handleClick = (e) => {
    const burgerMenu = document.querySelector(".navigation__hamburger-box");

    burgerMenu.classList.toggle("navigation__hamburger-box_active");
  }


  return (
    <nav className="navigation">
      <div className="navigation__hamburger">
        <input className={"navigation__hamburger-toogle"} name="menu-toggle" type="checkbox" onClick={handleClick}/>
        <div className={"navigation__hamburger-btn"}>
          <span></span>
        </div>
      </div>

      <ul className="navigation__list navigation__hamburger-box">
        <li>
          <NavLink to="/" className={setActiveMenuClass}>
            Главная
          </NavLink>
          </li>
        <li>
          <NavLink to="/movies" className={setActiveMenuClass}>
            Фильмы
          </NavLink>
          </li>
        <li>
          <NavLink to="/saved-movies" className={setActiveMenuClass}>
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="navigation__link_position">
            <NavLink to="/profile" className={setActiveAccauntClass}>
              Аккаунт
            <span className="navigation__accaunt-icon"></span>
            </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Navigation };
