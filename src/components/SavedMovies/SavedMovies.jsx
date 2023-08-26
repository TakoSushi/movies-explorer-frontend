import "./SavedMovies.css";
import { useEffect, useState } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { MovieCard } from "../MovieCard/MovieCard";
import { Footer } from "../Footer/Footer";
import { getLocalData } from "../../utils/useLocalStorage";
import filterFilms from "../../utils/filterFilms"

function SavedMovies({ isLoggedIn, onClickCardLike, myMovies }) {
  
  const [filterMovies, setisFilterMovies] = useState (myMovies)

  useEffect(() => {
      setisFilterMovies(filterFilms(
        myMovies,
        getLocalData('myMovies') || {searchText: "", isChecked: false}
      ));
  }, [myMovies]);

  function handleChecked() {
    setisFilterMovies(filterFilms(
      myMovies,
      getLocalData('myMovies')
    ));
  }

  function handleSearchSubmit() {
    setisFilterMovies(filterFilms(
      myMovies,
      getLocalData('myMovies')
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
          localStorageKey={'myMovies'}
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
