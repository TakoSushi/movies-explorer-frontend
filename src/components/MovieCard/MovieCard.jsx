import { Link } from "react-router-dom";
import "./MovieCard.css";
import renderTime from "../../utils/renderTime";

function MovieCard({ movie, poster, onClickCardLike, className }) {

  return (
    <li>
      <figure className="movie-card">
      <Link  to={movie.trailerLink} target="_blank">
        <img
          src={poster}
          alt={movie.nameRU}
          className="movie-card__img"
        />
      </Link>
      <div className="movie-card__title">
        <figcaption className="movie-card__img-name">
          {movie.nameRU}
        </figcaption>
        <span onClick={() => onClickCardLike(movie)} className={`movie-card__handle-icon ${className}`}></span>
      </div>
      <p className="movie-card__duration">{renderTime(movie.duration)}</p>
      </figure>
    </li>
  );
}

export { MovieCard };
