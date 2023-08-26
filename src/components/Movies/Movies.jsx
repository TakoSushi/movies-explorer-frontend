import "./Movies.css";
import { useState, useEffect } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { MovieCard } from "../MovieCard/MovieCard";
import { Footer } from "../Footer/Footer";
import { useMoviesViewCounter } from "../../utils/useMoviesViewCounter";
import { getLocalData } from "../../utils/useLocalStorage";
import filterFilms from "../../utils/filterFilms";


function Movies({ isLoggedIn, initialMovies, myMovies, onSubmit, onClickCardLike}) {

  const [filterMovies, setFilterMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [moviesCounter, setMoviesCounter] = useMoviesViewCounter();

  useEffect(() => {
    if(initialMovies.length){
    setFilterMovies(filterFilms(
      initialMovies,
      getLocalData('movies') || {searchText: "", isChecked: false}
    ));
    setIsLoading(false);
    }
  }, [initialMovies]);

  function handleSearchSubmit() {

    if(!initialMovies.length){
      setIsLoading(true);

      onSubmit().then((initialMovies) => {
          setFilterMovies(filterFilms(
            initialMovies,
            getLocalData('movies')
          ));
        })
        .catch((err) => {
          console.warn(err);
          setIsError(false);
        })
        .finally(() => setIsLoading(false));
    } else {
      setFilterMovies(filterFilms(
        initialMovies,
        getLocalData('movies')
      ));
    }
  }

  function handleChecked() {
    setFilterMovies(filterFilms(
      initialMovies,
      getLocalData('movies')
    ));
  }

  function handleAddBtnClick () {
    const addMovies = moviesCounter.addMovies;
    const displayMovies = moviesCounter.displayMovies + addMovies;
    setMoviesCounter({ displayMovies, addMovies })
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} >
        <Navigation />
      </Header>
      <main className="movies">
        <SearchForm
          onSubmit={handleSearchSubmit}
          onChecked={handleChecked}
          localStorageKey={'movies'}
        />
        <MoviesCardList
          movies={(filterMovies)}
          isLoading={isLoading}
          isError={isError}
        >
          {(filterMovies).slice(0, moviesCounter.displayMovies).map((movie) => {
            return <MovieCard
              key={movie.id}
              movie={movie}
              poster={`https://api.nomoreparties.co${movie.image.url}`}
              onClickCardLike={onClickCardLike}
              className={myMovies.find((myMovie) => myMovie.movieId === movie.id) ? "movie-card__handle-icon_like-active" : "movie-card__handle-icon_like-unactive"}
            />;
            })
          }
        </MoviesCardList>
        { filterMovies.length > moviesCounter.displayMovies
          ? <button
              type="button"
              className="movies__add-films-button"
              onClick={handleAddBtnClick}
            >
              Ещё
            </button>
          : <></>
        }
      </main>
      <Footer />
    </>
  );
}

export { Movies };
