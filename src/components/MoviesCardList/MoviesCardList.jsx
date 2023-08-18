import "./MoviesCardList.css";
import { Preloader } from "../Preloader/Preloader"
import { MoviesCard } from "../MoviesCard/MoviesCard";

function MoviesCardList ({ movies, isLoading, isError }) {

  return (
    <>
      {
        isLoading
          ?  <Preloader />
          :  isError
                ? <p className="movies__error-message">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
                : movies.length
                  ? <section className="movies-card-list">
                      <ul className="movies-card-list__list">
                        {movies.map( (movie) => {
                          return <MoviesCard  
                            key={movie.id}
                            movie={movie}
                          />;
                          })
                        }
                      </ul>
                    </section>
                  : <p className="movies__error-message">Ничего не найдено</p>
      }
    </>
  );
}

export { MoviesCardList };
