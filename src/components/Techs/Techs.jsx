import "./Techs.css";

function Techs() {
  return (
    <div className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__content-title">7 технологий</h3>
      <p className="techs__content-text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__list-item" key="item1">
          HTML
        </li>
        <li className="techs__list-item" key="item2">
          CSS
        </li>
        <li className="techs__list-item" key="item3">
          JS
        </li>
        <li className="techs__list-item" key="item4">
          React
        </li>
        <li className="techs__list-item" key="item5">
          Git
        </li>
        <li className="techs__list-item" key="item6">
          Express.js
        </li>
        <li className="techs__list-item" key="item7">
          mongoDB
        </li>
      </ul>
    </div>
  );
}

export { Techs };
