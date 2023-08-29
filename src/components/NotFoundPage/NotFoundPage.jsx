import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1, { replace: true });
  }

  return (
    <div className="notfoundpage">
      <h2 className="notfoundpage__error">404</h2>
      <p className="notfoundpage__errortext">Страница не найдена</p>
      <button
        type="button"
        onClick={handleClick}
        className="notfoundpage__backbtn"
      >Назад</button>
    </div>
  );
}
  
export { NotFoundPage };
  