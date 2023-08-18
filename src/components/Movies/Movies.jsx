import "./Movies.css";
import { useState } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import { Preloader } from "../Preloader/Preloader"
import movieApi from "../../utils/MoviesApi";

function Movies () {

  const [ movies, setMovies] = useState([]);
  const [ isError, setIsError] = useState(false);
  const [ isLoading, setIsLoading] = useState(true);

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

  function handleClick() {
    console.log (movies);
  }

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main className="movies">
        <SearchForm onSubmit = { handleSubmit } />
        {
          isLoading
            ?  <Preloader />
            :  isError
                  ? <p className="movies__error-message">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
                  : movies.length
                    ? <MoviesCardList movies={ movies } />
                    : <p className="movies__error-message">Ничего не найдено</p>
        }
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
