import "./AboutProject.css";

function AboutProject() {
  return (
    <div className="aboutProject">
      <h2 className="aboutProject__title">О проекте</h2>
      <div className="aboutProject__context">
        <section className="aboutProject__article">
          <h3 className="aboutProject__article-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="aboutProject__article-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </section>
        <section className="aboutProject__article">
          <h3 className="aboutProject__article-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="aboutProject__article-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </section>
      </div>
      <div className="aboutProject__grid">
        <div className="aboutProject__cell-header aboutProject__cell-header_left">
          1 неделя
        </div>
        <div className="aboutProject__cell-header aboutProject__cell-header_right">
          4 недели
        </div>
        <div className="aboutProject__cell-content">Back-end</div>
        <div className="aboutProject__cell-content">Front-end</div>
      </div>
    </div>
  );
}

export { AboutProject };
