import "./AboutMe.css";
import autorPhoto from "../../images/pic__COLOR_pic.jpg";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__data">
        <article className="aboutme__description">
          <h3 className="aboutme__name">Виталий</h3>
          <p className="aboutme__profession">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__biography">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link className="aboutme__link">Github</Link>
        </article>
      </div>
      <img src={autorPhoto} alt="фото автора" className="aboutme__photo" />
    </div>
  );
}

export { AboutMe };
