import "./AboutMe.css";
import autorPhoto from "../../images/pic__COLOR_pic.jpg";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__data">
        <article className="about-me__description">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__biography">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link className="about-me__link">Github</Link>
        </article>
        <img src={autorPhoto} alt="фото автора" className="about-me__photo" />
      </div>
    </section>
  );
}

export { AboutMe };
