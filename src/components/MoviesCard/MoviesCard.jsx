import "./MoviesCard.css";
import renderTime from "../../utils/renderTime";

function MoviesCard({ movie }) {
  return (
    <li>
      <figure className="movies-card">
        <img
          src={`https://api.nomoreparties.co${movie.image.url}`}
          alt={movie.nameRU}
          className="movies-card__img"
        />
        <div className="movies-card__title">
          <figcaption className="movies-card__img-name">
            {movie.nameRU}
          </figcaption>
          <span className="movies-card__like-icon"></span>
        </div>
        <p className="movies-card__duration">{renderTime(movie.duration)}</p>
      </figure>
    </li>
  );
}

export { MoviesCard };
