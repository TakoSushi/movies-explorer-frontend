import "./SearchForm.css";
import { Switcher } from "../Switcher/Switcher";

function SearchForm () {
  return (
    <div className="searchform">
      <div className="searchform__form">
        <input 
            className="searchform__input"
            type="text"
            placeholder="Search"
        />
        <button type="button" className="searchform__button">Найти</button>
        <div className="searchform__slice"></div>
        <Switcher />
        <span className="searchform__switcher-label">Короткометражки</span>
      </div>
    </div>
  );
}

export { SearchForm };
