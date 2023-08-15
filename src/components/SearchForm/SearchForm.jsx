import "./SearchForm.css";
import { Switcher } from "../Switcher/Switcher";
import magnifyingGlass from "../../images/left-pointing_magnifying_glass.svg";

function SearchForm() {
  function handleSubmit (e) {
    e.preventDefault();

  }

  return (
    <section className="searchform">
      <form
        name="search-form"
        className="searchform__form"
        method="POST"
        onSubmit={handleSubmit}
      >
        <img
          src={magnifyingGlass}
          className="searchform__glassicon"
          alt="Лупа"
        />
        <input
          className="searchform__input"
          name="search-input"
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
    </section>
  );
}

export { SearchForm };
