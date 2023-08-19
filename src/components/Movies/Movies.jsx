import "./Movies.css";
import { useEffect, useState } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import movieApi from "../../utils/MoviesApi";
import filterFilms from "../../utils/filterFilms";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState(null);
  const [moviesCounter, setMoviesCounter] = useState(0);

  useEffect(() => {
    // если разрешение экрана 1280px setMoviesCounter({16, 4})
    // если разрешение экрана 1278px setMoviesCounter({12, 3})
    // если разрешение экрана 1006px setMoviesCounter({8, 2})
    // если разрешение экрана 760px setMoviesCounter({5, 2})
    
  }, width);

  function handleMovieView(filterFilms, filmCounter) {
    if(filterFilms.length > )
  }

  function handleSubmit(searchData) {
    setIsError(false);
    setIsLoading(true);

    setSearchData(searchData);

    movieApi
      .getInitialsMovies()
      .then((initialMovies) => {
        setMovies(initialMovies);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(true);
        console.warn(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleClick() {
    console.log(movies);
  }

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main className="movies">
        <SearchForm onSubmit={handleSubmit} />
        <MoviesCardList
          movies={filterFilms(movies, searchData)}
          isLoading={isLoading}
          isError={isError}
        />
        <button
          type="button"
          className="movies__add-films-button"
          onClick={handleClick}
        >
          Ещё
        </button>
      </main>
      <Footer />
    </>
  );
}

export { Movies };
