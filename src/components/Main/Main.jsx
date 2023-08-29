import "./Main.css";
import { Promo } from "../Promo/Promo";
import { AboutProject } from "../AboutProject/AboutProject";
import { Techs } from "../Techs/Techs";
import { AboutMe } from "../AboutMe/AboutMe";
import { Portfolio } from "../Portfolio/Portfolio";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";


function Main({ isLoggedIn }) {

  return (
    <>
      <Header className={"header_colorize"} isLoggedIn={isLoggedIn} />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export { Main };
