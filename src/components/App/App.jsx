import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main.jsx";
import { Footer } from "../Footer/Footer.jsx";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={Main} />
      </Routes>
      <Footer />
    </div>
  );
}

export { App };
