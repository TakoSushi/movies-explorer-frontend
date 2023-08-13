import "./MoviesCard.css";


function MoviesCard ({ movie }) {
  return (
    <li>
      <figure className="movies-card">
        <img src={movie.imgSrc} alt={movie.imgName} className="movies-card__img" />
        <div className="movies-card__title">
          <figcaption className="movies-card__img-name">{movie.imgName}</figcaption>
          <span className="movies-card__like-icon"></span>
        </div>
        <p className="movies-card__duration">{movie.duration}</p>
      </figure>
    </li>
  );
}

export { MoviesCard };
