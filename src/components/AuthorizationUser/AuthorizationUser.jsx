import "./AuthorizationUser.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";


function AuthorizationUser ({ titleText, buttonText, path }) {
  function handleSubmit (e) {
    e.preventDefault();

  }

  return (
      <main className="authorization">
      <NavLink to="/" className="authorization__logo-link">
        <img className="authorization__logo" src={logo} alt="логотип Место" />
      </NavLink>
        <h2 className="authorization__header">{titleText}</h2>
        <form
          name="authorization-form"
          method="POST"
          className="authorization__form"
          onSubmit={handleSubmit}
        >
          <fieldset className="authorization__fieldset">
            { path === "/signin" &&
              <>
                <legend className="authorization__input-title">Имя</legend>
                <input 
                    type="text"
                    name="user-name"
                    className="authorization__input authorization__input-name"
                    placeholder="Имя"
                    minLength="2"
                    maxLength="40"
                    required
                />
                <span className="authorization__error-message">Что-то пошло не так...</span>
              </>
            }
            <legend className="authorization__input-title">E-mail</legend>
            <input
                type="email"
                name="user-email"
                className="authorization__input authorization__input-email"
                placeholder="Почта"
                minLength="2"
                maxLength="40"
                required
            />
            <span className="authorization__error-message">Что-то пошло не так...</span>        
            <legend className="authorization__input-title">Пароль</legend>
            <input
                type="password"
                name="user-password"
                className="authorization__input authorization__input-password"
                placeholder="Пароль"
                minLength="6"
                maxLength="200"
                required
            />
            <span className="authorization__error-message">Что-то пошло не так...</span>
          </fieldset>
          <button
            type="submit"
            className="authorization__button authorization__button_disabled"
          >
            {buttonText}
          </button>
        </form>
        { path === "/signin" &&
          <p className="authorization__text">
            Уже зарегистрированы?
            <NavLink to={path} className="authorization__link">Войти</NavLink>
          </p>
        }
        { path === "/signup" &&
          <p className="authorization__text">
            Ещё не зарегистрированы?
            <NavLink to={path} className="authorization__link">Регистрация</NavLink>
          </p>
        }
      </main>
  );
}

export { AuthorizationUser };