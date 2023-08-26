import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { ProtectedRoute } from '../../components/ProtectedRoute/ProtectedRoute';
import { Preloader } from "../Preloader/Preloader";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import auth from "../../utils/Auth";
import userApi from "../../utils/UserApi";
import myMovieApi from "../../utils/MainApi";
import movieApi from "../../utils/MoviesApi";


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(null);
  const [serverError, setServerError] = useState('');
  const [myMovies, setMyMovies] = useState([]);
  const [initialMovies, setInitialMovies] = useState([]);

  const navigate = useNavigate();

  useEffect( () => {
    if(isLoggedIn){
      userApi.getUserData()
      .then( (userData) => setCurrentUser(userData))
      .catch( (err) => console.warn(err));
    }
  }, [isLoggedIn]);
  
  useEffect( () => {
    handleAutoSignIn();
  }, []);

  useEffect(() => {
    myMovieApi.getMyMovies()
      .then((movies) => setMyMovies(movies))
      .catch((err) => console.warn(err));
  }, [isLoggedIn]);

  function handleAutoSignIn() {
    userApi.getUserData()
      .then( () => setLoggedIn(true))
      .catch(err => {
        setLoggedIn(false);
        console.warn(err);
      });
  }

  if(isLoggedIn === null) {
    return(<Preloader />)
  }

  function handleUserRegisterSubmit({ userName, email, password }) {
    const newUserData = {
      name: userName,
      email: email,
      password: password
    }

    auth.signUp(newUserData)
    .then( () => {
      handleUserLoginSubmit({
        email: email,
        password: password
      })
    })
    .catch(err => {
      setLoggedIn(false);
      setServerError(err)
      console.warn(err);
    });
  }

  function handleUserLoginSubmit({ email, password }) {
    const userData = {
      email: email,
      password: password
    }

    auth.signIn(userData)
    .then( () => {
      setLoggedIn(true);
      navigate('/movies');
    })
    .catch(err => {
      setServerError(err)
      console.warn(err);
    })

  }

  function handleSignOutSubmit() {
    auth.signOut()
    .then( () => {
      setLoggedIn(false);
      setCurrentUser({});
      setMyMovies([]);
      navigate('/');
      window.localStorage.clear();
    })
    .catch(err => {
      console.warn(err);
    })
  }

  function handleServerError(msg) {
    setServerError(msg);
  }

  function handleUpdateUser(newUserData) {
    userApi.changeUserData(newUserData)
    .then( () => {
      setCurrentUser({newUserData});
    })
    .catch(err => {
      setServerError(err);
      console.warn(err);
    })
  }
  

  function handleSearchMovies() {
    return movieApi.getInitialsMovies()
      .then((initialMovies) => {
        setInitialMovies(initialMovies);
        return initialMovies;
      })
  }

  function handleCardLikeClick(movie) {
    
    const movieToAdd = { 
      "country": movie.country,
      "director": movie.director,
      "duration": movie.duration,
      "year": movie.year,
      "description": movie.description,
      "image": `https://api.nomoreparties.co${movie.image.url}`,
      "trailerLink": movie.trailerLink,
      "thumbnail": `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      "movieId": movie.id,
      "nameRU": movie.nameRU,
      "nameEN": movie.nameEN,
    }
    const myCurrentMovie = myMovies.filter((myMovie) => myMovie.movieId === movie.id)[0];

    if (myCurrentMovie){
      myMovieApi.deleteMovie(myCurrentMovie._id)
      .then(() => setMyMovies(myMovies.filter((myMovie) => myMovie._id !== myCurrentMovie._id)))
      .catch((err) => {
        console.warn(err);
      });
    } else {
      myMovieApi.addNewMovie(movieToAdd)
      .then((movie) => { setMyMovies([...myMovies, movie])})
      .catch((err) => {
        console.warn(err);
      });
    }
  }

  function handleCardTrashClick(movie) {
    myMovieApi.deleteMovie(movie._id)
    .then(() => setMyMovies(myMovies.filter((myMovie) => myMovie._id !== movie._id)))
    .catch((err) => {
      console.warn(err);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path='/' element={<ProtectedRoute element={Main} isLoggedIn={isLoggedIn} />} />
          <Route path='movies' element={<ProtectedRoute
            element={Movies}
            isLoggedIn={isLoggedIn}
            initialMovies={initialMovies}
            myMovies={myMovies}
            onSubmit={handleSearchMovies}
            onClickCardLike={handleCardLikeClick}
          />} />
          <Route path='saved-movies' element={<SavedMovies
            element={SavedMovies}
            isLoggedIn={isLoggedIn}
            myMovies={myMovies}
            onClickCardLike={handleCardTrashClick}
          />} />
          <Route path='profile' element={<ProtectedRoute element={Profile}
            isLoggedIn={isLoggedIn}
            onSignOut={handleSignOutSubmit}
            onUpdateUser={handleUpdateUser}
            onServerError={handleServerError}
            serverError={serverError}
          />} />

          <Route path='signin' element={<Login
            onLoginUser={handleUserLoginSubmit}
            serverError={serverError}
            onServerError={handleServerError}
          />} />
          <Route path='signup' element={<Register
            onRegisterUser={handleUserRegisterSubmit}
            serverError={serverError}
            onServerError={handleServerError}
          />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export { App };
