import "./Switcher.css";

function Switcher () {
  return (
    <label className="switcher">
      <input type="checkbox" className="switcher__checkbox"></input>
      <div className="switcher__toogle"></div>
    </label>
  );
}

export { Switcher };
