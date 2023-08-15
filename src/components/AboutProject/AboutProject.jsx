import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      
      <div className="about-project__context">
        <article className="about-project__article">
          <h3 className="about-project__article-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__article-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className="about-project__article">
          <h3 className="about-project__article-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__article-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>

      <table className="about-project__table">
        <thead>
          <tr className="about-project__table-header">
              <th className="about-project__table-header_left-cell">1 неделя</th>
              <th>4 недели</th>
          </tr>
        </thead>
        <tbody>
          <tr className="about-project__table-row">
            <td>Back-end</td>
            <td>Front-end</td>
          </tr>
        </tbody>
      </table>

    </section>
  );
}

export { AboutProject };
