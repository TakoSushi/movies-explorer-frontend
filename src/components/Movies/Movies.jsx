import "./Movies.css";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import { filmsDB } from "../../vendor/filmDb.js";

function Movies () {

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main className="movies">
        <SearchForm />
        <MoviesCardList movies={ filmsDB } />
        <button type="button" className="movies__add-films-button">Ещё</button>
      </main>
      <Footer />
    </>
  );
}

export { Movies };
