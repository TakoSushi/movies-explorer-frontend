import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";

function MoviesCardList ({ movies }) {

  return (
    <section className="movies-card-list">
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
  );
}

export { MoviesCardList };
