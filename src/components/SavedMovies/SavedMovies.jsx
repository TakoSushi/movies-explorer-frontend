import "./SavedMovies.css";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import { filmsLiked } from "../../vendor/filmDb_liked";

function SavedMovies () {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList movies={ filmsLiked } />
      </main>
      <Footer />
    </>
  );
}

export { SavedMovies };