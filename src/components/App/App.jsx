import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

function App() {

  return (
    <div className="page">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export { App };
