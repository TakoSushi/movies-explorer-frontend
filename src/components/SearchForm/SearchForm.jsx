import "./SearchForm.css";
import { useState } from "react";
import magnifyingGlass from "../../images/left-pointing_magnifying_glass.svg";
import { Switcher } from "../Switcher/Switcher";
import { setLocalData, getLocalData } from "../../utils/useLocalStorage";


function SearchForm({ onSubmit, onChecked, localStorageKey}) {
  const [searchText, setSearchText] = useState(getLocalData(localStorageKey)
  ? getLocalData(localStorageKey).searchText || ''
  : '');
  const [isChecked, setIsChecked] = useState(getLocalData(localStorageKey)
  ? getLocalData(localStorageKey).isChecked || false
  : false);

  function handleChangeSearchText(e) {
    setSearchText(e.target.value);
  }

  function handleChecked(isChecked) {
    setLocalData(localStorageKey, {
      ...getLocalData(localStorageKey),
      'isChecked': isChecked
    });

    setIsChecked(isChecked);
    onChecked();
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLocalData(localStorageKey, {
      ...getLocalData(localStorageKey),
      'searchText': searchText
    });

    onSubmit();
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
          value={searchText}
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
          isChecked={isChecked}
          onChecked={handleChecked}
        />
      </form>
    </section>
  );
}

export { SearchForm };
