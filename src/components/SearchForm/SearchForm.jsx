import "./SearchForm.css";
import { useState } from "react";
import { Switcher } from "../Switcher/Switcher";
import magnifyingGlass from "../../images/left-pointing_magnifying_glass.svg";

function SearchForm({ onSubmit }) {
  const [searchtText, setSearchText] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function handleChangeSearchText(e) {
    setSearchText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    onSubmit(formJson);
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
          value={searchtText}
          onChange={handleChangeSearchText}
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
          useChecked={{ isChecked, setIsChecked }}
        />
      </form>
    </section>
  );
}

export { SearchForm };
