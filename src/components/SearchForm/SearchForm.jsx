import "./SearchForm.css";
import { useRef } from "react";
import magnifyingGlass from "../../images/left-pointing_magnifying_glass.svg";
import { Switcher } from "../Switcher/Switcher";

function SearchForm({ onSubmit, onChecked, isChecked, searchText}) {
  
  const searchInput = useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(searchInput.current.value);
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
          ref={searchInput}
          defaultValue={searchText || ""}
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
        <Switcher
          labelName={"Короткометражки"}
          className="searchform_switcher"
          isChecked={isChecked}
          onChecked={onChecked}
        />
      </form>
    </section>
  );
}

export { SearchForm };
