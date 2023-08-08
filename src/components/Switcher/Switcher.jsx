import "./Switcher.css";

function Switcher({ labelName }) {
  return (
    <label className="switcher">
      <input type="checkbox" className="switcher__checkbox"></input>
      <div className="switcher__toogle"></div>
      <span className="switcher__label">{labelName}</span>
    </label>
  );
}

export { Switcher };
