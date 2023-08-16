import "./Switcher.css";

function Switcher({ className, labelName }) {
  return (
    <label className={`switcher ${className}`}>
      <input type="checkbox" className="switcher__checkbox"></input>
      <div className="switcher__toogle"></div>
      <span className="switcher__label">{labelName}</span>
    </label>
  );
}

export { Switcher };
