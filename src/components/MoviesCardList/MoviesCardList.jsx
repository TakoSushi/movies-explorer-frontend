import "./MoviesCardList.css";
import { useState, useEffect } from "react";
import { Preloader } from "../Preloader/Preloader";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { set } from "mongoose";

function MoviesCardList({ movies, isLoading, isError }) {
  const [filteredMovies, updatefilteredMovies] = useState([]);
  const [moviesCounter, setMoviesCounter] = useState(0);

  useEffect(() => {
    updatefilteredMovies(movies);
    setMoviesCounter(movies.length);
  }, [movies]);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : isError ? (
        <p className="movies__error-message">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      ) : filteredMovies.length ? (
        <section className="movies-card-list">
          <ul className="movies-card-list__list">
            {filteredMovies.map((movie) => {
              return <MoviesCard key={movie.id} movie={movie} />;
            })}
          </ul>
        </section>
      ) : (
        <p className="movies__error-message">Ничего не найдено</p>
      )}
    </>
  );
}

export { MoviesCardList };
