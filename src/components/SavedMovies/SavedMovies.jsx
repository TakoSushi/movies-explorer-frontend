import "./SavedMovies.css";
import { useEffect, useState } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { MovieCard } from "../MovieCard/MovieCard";
import { Footer } from "../Footer/Footer";
import filterFilms from "../../utils/filterFilms"

function SavedMovies({ isLoggedIn, onClickCardLike, myMovies }) {

  const [filterMovies, setFilterMovies] = useState (myMovies);
  const [searchText, setSearchText] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => setFilterMovies(filterFilms(
      myMovies,
      {
        isChecked: false,
        searchText: ""
      }
  )), [myMovies]);

  function handleChecked(isChecked) {
    setIsChecked(isChecked)

    setFilterMovies(filterFilms(
      myMovies,
      {
        isChecked: isChecked,
        searchText: searchText
      }
    ));
  }

  function handleSearchSubmit(searchText) {
    setSearchText(searchText)
    setFilterMovies(filterFilms(
      myMovies,
      {
        isChecked: isChecked,
        searchText: searchText
      }
    ));
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} >
        <Navigation />
      </Header>
      <main className="saved-movies">

        <SearchForm 
          onSubmit={handleSearchSubmit}
          onChecked={handleChecked}
          isChecked={isChecked}
        />
        <MoviesCardList movies={myMovies}>
          {(filterMovies).map((movie) => {
            return <MovieCard
              key={movie._id}
              movie={movie}
              poster={movie.image}
              onClickCardLike={onClickCardLike}
              className={"movie-card__like-icon_trash"}
            />;
            })
          }
        </MoviesCardList>
      </main>
      <Footer />
    </>
  );
}

export { SavedMovies };
