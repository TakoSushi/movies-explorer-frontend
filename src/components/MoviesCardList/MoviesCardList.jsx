import "./MoviesCardList.css";
import { Preloader } from "../Preloader/Preloader";

function MoviesCardList({ movies, children , isLoading, isError }) {
 
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : isError ? (
        <p className="movies__error-message">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      ) : movies.length ? (
        <section className="movies-card-list">
          <ul className="movies-card-list__list">
            {children}
          </ul>
        </section>
      ) : (
        <p className="movies__error-message">Ничего не найдено</p>
      )}
    </>
  );
}

export { MoviesCardList };
