export default function filterFilms(movies, { searchText, isChecked }) {
  
  let filtredMovies = movies;

  if (isChecked){
    filtredMovies = filtredMovies.filter((movie) => movie.duration <= 40);
  }

  if (!searchText) {
    return filtredMovies;
  }

  return filtredMovies.filter((movie) => {
    return  movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(searchText.toLowerCase())
    }
  );
}