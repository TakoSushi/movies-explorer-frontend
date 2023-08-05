import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export { App };
