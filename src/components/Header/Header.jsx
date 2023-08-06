import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import { Navigation } from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header header_colorize">
      <NavLink to="/" className="header__logo_link">
        <img className="header__logo" src={logo} alt="логотип Место" />
      </NavLink>
      <Navigation />
    </header>
  );
}

export { Header };
