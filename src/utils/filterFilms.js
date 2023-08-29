import { SHORT_FiLM_DURATION } from "./constants";

export default function filterFilms(movies, { searchText, isChecked }) {

  
  let filtredMovies = movies;

  if (isChecked){
    filtredMovies = filtredMovies.filter((movie) => movie.duration <= SHORT_FiLM_DURATION);
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