import "./MoviesCard.css";

function MoviesCard ({ movie }) {

  function handleDuration(minuteTime){
    return minuteTime < 60
      ? `${minuteTime}м`
      : `${(minuteTime-minuteTime%60)/60}ч ${minuteTime%60}м`
  }
  
  return (
    <li>
      <figure className="movies-card">
        <img
          src={`https://api.nomoreparties.co${movie.image.url}`}
          alt={movie.nameRU}
          className="movies-card__img"
        />
        <div className="movies-card__title">
          <figcaption className="movies-card__img-name">{movie.nameRU}</figcaption>
          <span className="movies-card__like-icon"></span>
        </div>
        <p className="movies-card__duration">{handleDuration(movie.duration)}</p>
      </figure>
    </li>
  );
}

export { MoviesCard };
