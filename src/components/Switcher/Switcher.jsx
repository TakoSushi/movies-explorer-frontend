import "./Switcher.css";

function Switcher({ className, labelName, useChecked }) {
  function handleChangeCheckbox(e) {
    useChecked.setIsChecked(e.target.checked);
  }

  return (
    <label className={`switcher ${className}`}>
      <input
        type="checkbox"
        name="search-checkbox"
        className="switcher__checkbox"
        checked={useChecked.isChecked}
        onChange={handleChangeCheckbox}
      />
      <div className="switcher__toogle"></div>
      <span className="switcher__label">{labelName}</span>
    </label>
  );
}

export { Switcher };
