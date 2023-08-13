import "./SearchForm.css";
import { Switcher } from "../Switcher/Switcher";
import magnifyingGlass from "../../images/left-pointing_magnifying_glass.svg";

function SearchForm() {
  return (
    <div className="searchform">
      <form className="searchform__form">
        <img
          src={magnifyingGlass}
          className="searchform__glassicon"
          alt="Лупа"
        />
        <input
          className="searchform__input"
          name="search__input"
          type="text"
          placeholder="Фильм"
          autoComplete="off"
        />
        <button className="searchform__button" type="submit">
          Найти
        </button>
        <div className="searchform__slice"></div>
        <Switcher labelName={"Короткометражки"} className="searchform_switcher" />
      </form>
    </div>
  );
}

export { SearchForm };
