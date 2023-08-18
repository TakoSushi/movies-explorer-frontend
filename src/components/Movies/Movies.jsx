import "./Movies.css";
import { useState } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import movieApi from "../../utils/MoviesApi";

function Movies () {

  const [ movies, setMovies] = useState([]);
  const [ isError, setIsError] = useState(false);
  const [ isLoading, setIsLoading] = useState(true);
  const [ searchData, setSearchData ] = useState(null);
  const [ isChecked, setIsChecked ] = useState(false);

  function filmFilter(movies, searchData, isChecked) {
    const filtredMovies = movies;
    return filtredMovies;
  }

  function handleSubmit() {
    setIsError(false);
    setIsLoading (true);

    movieApi.getInitialsMovies()
      .then( (initialMovies) => {
        setMovies(initialMovies);
        setIsError(false);
      })
      .catch( (err) => {
        setIsError(true);
        console.warn(err)
      })
      .finally(() => {
        setIsLoading (false);
      })
  }

  function handleFilmInput(searchData) {
    setSearchData(searchData)
  }



  function handleClick() {
    console.log (movies);
  }

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main className="movies">
        <SearchForm
          onSubmit = { handleSubmit }
          onInput={handleFilmInput}
          searchData={searchData}
        />
        <MoviesCardList
          movies={ filmFilter(movies) }
          isLoading={isLoading}
          isError={isError}
        />
        <button
          type="button"
          className="movies__add-films-button"
          onClick={handleClick}
        >Ещё</button>
      </main>
      <Footer />
    </>
  );
}

export { Movies };
