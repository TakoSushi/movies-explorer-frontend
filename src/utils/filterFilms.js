export default function filterFilms(movies, searchData) {
  if (!searchData) {
    return movies;
  }

  const text = searchData["search-input"].toLowerCase();
  const checkbox = searchData["search-checkbox"];

  const filtredMovies = movies.filter((movie) => {
    return (
      movie.nameRU.toLowerCase().includes(text) ||
      movie.nameEN.toLowerCase().includes(text)
    );
  });

  return checkbox
    ? filtredMovies.filter((movie) => movie.duration <= 40)
    : filtredMovies;
}