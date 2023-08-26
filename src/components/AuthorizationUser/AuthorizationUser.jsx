import "./AuthorizationUser.css";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useFormWithValidation } from "../../utils/useFormWithValidation";

function AuthorizationUser ({ titleText, buttonText, path, handleUserData, serverError, onServerError }) {

  const {
    getValues,
    register,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const { formValues, handleChange, errorsMessages, isFormValid, resetForm } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUserData({
      userName: formValues['user-name'],
      email: getValues('email'),
      password: formValues['user-password'],
    });

    reset();
    resetForm();
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
          noValidate
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
                    maxLength="30"
                    required
                    onChange={(e) => handleChange(e)}
                />
                <span className="authorization__error-message">
                  {errorsMessages['user-name']}
                  </span>
              </>
            }
            <legend className="authorization__input-title">E-mail</legend>
            <input
                type="email"
                name="user-email"
                className="authorization__input authorization__input-email"
                placeholder="Почта"
                required
                {...register('email', {
                  required: "Email адрес обязательное поле",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                    message: 'Почта не соответствует требуемому формату <имя>@<домен>.<код страны>'
                  }
                })}
            />
            <span className="authorization__error-message">
              {errors?.email && errors?.email?.message}
            </span>        
            <legend className="authorization__input-title">Пароль</legend>
            <input
                type="password"
                name="user-password"
                className="authorization__input authorization__input-password"
                placeholder="Пароль"
                minLength="8"
                maxLength="100"
                required
                onChange={(e) => handleChange(e)}
            />
            <span className="authorization__error-message">
              {errorsMessages['user-password']}
            </span>
          </fieldset>
          <span className="authorization__error-message authorization__error-message_center">{serverError}</span>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`authorization__button ${!isFormValid ? 'authorization__button_disabled' : ''}`}
            >
            {buttonText}
          </button>
        </form>
        { path === "/signin" &&
          <p className="authorization__text">
            Уже зарегистрированы?
            <NavLink
              to={path}
              className="authorization__link"
              onClick={() => onServerError('')}
            >Войти</NavLink>
          </p>
        }
        { path === "/signup" &&
          <p className="authorization__text">
            Ещё не зарегистрированы?
            <NavLink
              to={path}
              className="authorization__link"
              onClick={() => onServerError('')}
              >Регистрация</NavLink>
          </p>
        }
      </main>
  );
}

export { AuthorizationUser };