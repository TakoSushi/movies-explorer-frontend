import "./Profile.css";
import { useState, useEffect, useContext } from 'react';
import { useForm } from "react-hook-form";
import { Header } from "../Header/Header";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useFormWithValidation } from "../../utils/useFormWithValidation";


function Profile ({ onSignOut, isLoggedIn, onUpdateUser, serverError, onServerError}) {

  const currentUser = useContext(CurrentUserContext);

  const [isEditUser, setIsEditUser] = useState(false);

  const {
    getValues,
    setValue,
    register,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const { formValues, handleChange, errorsMessages, isFormValid, resetForm } = useFormWithValidation();

  useEffect(() => { 
    if (currentUser.name) {
      setValue('email', currentUser.email);
    };
  }, [currentUser, setValue, resetForm]);
  
  function handleIsEditUser () {
    setIsEditUser(true);
  }

  function handleSignOut () {
    onSignOut();
  }

  function handleSubmit (e) {
    e.preventDefault();
    
    onUpdateUser({
      userName: formValues['user-name'],
      email: getValues('email'),
    });

    reset();
    resetForm();
  }

  function validateForm(){
    const newUserName = formValues['user-name'];
    const currentUserName = currentUser.name;
    const newUserEmail = getValues('email');
    const currentUserEmail = currentUser.email;
    
    return  ((newUserEmail === currentUserEmail) && (newUserName === currentUserName)) ||
              (!isFormValid || errors?.email) ? 
              true : false;
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <h2 className="profile__header">Привет, {currentUser.name}!</h2>
        <form
          name="profile-form"
          method="POST"
          className="profile__form"
          onSubmit={handleSubmit}
          noValidate
        >
          <fieldset className="profile__fieldset">
            <div className="profile__data-box">
              <legend className="profile__input-title">Имя</legend>
              <input 
                  type="text"
                  name="user-name"
                  className="profile__input profile__input-name"
                  placeholder="Имя"
                  minLength="2"
                  maxLength="30"
                  required
                  defaultValue={currentUser.name}
                  onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <span className="profile__error-message">{errorsMessages['user-name']}</span>

            <span className="profile__border-element"></span>
            <div className="profile__data-box">
              <legend className="profile__input-title">E-mail</legend>
              <input
                  type="email"
                  name="user-email"
                  className="profile__input profile__input-email"
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
            </div>
            <span className="profile__error-message">{errors?.email && errors?.email?.message}</span>
          </fieldset>
          { isEditUser ?
            <div>  
              <span className="profile__error-message profile__error-message_position">{serverError}</span>    
              <button
                type="submit"
                disabled={validateForm()}
                className={`profile__submit-button ${validateForm() ? 'profile__submit-button_disabled' : ''}`}
              >
                Сохранить
              </button>
            </div>   
            :
            <div className="profile__text-button-box">
              <button
                type="button"
                className="profile__text-button profile__text-button_edit"
                onClick={handleIsEditUser}
              >
                Редактировать
              </button>
              <button
                type="button"
                className="profile__text-button profile__text-button_signout"
                onClick={handleSignOut}
              >
                Выйти из аккаунта
              </button>
            </div>
          }
        </form>
      </main>
    </>
  );
}

export { Profile };