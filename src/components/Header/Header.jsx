import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import { Navigation } from "../Navigation/Navigation";
import "./Header.css";

function Header( { className }) {
  
  const isLoggedIn = true;

  return (
    <header className={`header ${className || ""}`}>
      <NavLink to="/" className="header__logo_link">
        <img className="header__logo" src={logo} alt="логотип Место" />
      </NavLink>
      {
       isLoggedIn ? 
      <Navigation />
      :
      <div className="header__auth">
        <NavLink to="/signup" className="header__auth-link header__auth-link_signup">Регистрация</NavLink>
        <NavLink to="/signin" className="header__auth-link header__auth-link_signin">Войти</NavLink>
      </div>
      }
    </header>
  );
}

export { Header };
