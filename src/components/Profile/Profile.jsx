import "./Profile.css";
import { useState, useEffect, useContext } from 'react';
import { useForm } from "react-hook-form";
import { Header } from "../Header/Header";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import { REGEXP_EMAIL } from "../../utils/constants";


function Profile ({ onSignOut, isLoggedIn, onUpdateUser, serverError, isLoading}) {

  const currentUser = useContext(CurrentUserContext);

  const [isEditUser, setIsEditUser] = useState(false);
  const [userName, setUserName] = useState('');

  const {
    getValues,
    setValue,
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { formValues, handleChange, errorsMessages, isFormValid } = useFormWithValidation();

  const watchEmail = watch('email');

  useEffect(() => {
    if (currentUser.name) {
      setValue('email', currentUser.email);
      setUserName(currentUser.name);
    };
  }, [currentUser, setValue]);
  
  function handleIsEditUser () {
    setIsEditUser(true);
  }

  function handleUserNameChange(e) {
    setUserName(e.target.value);
    handleChange(e);
  }

  function handleSignOut () {
    onSignOut();
  }

  function handleSubmit (e) {
    e.preventDefault();
    
    onUpdateUser({
      name: formValues['user-name'],
      email: getValues('email'),
    });
  }

  function validateForm(){
    return  ((userName === currentUser.name) && (watchEmail === currentUser.email)) || (!isFormValid || errors?.email);
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
          <fieldset className="profile__fieldset" disabled={!isEditUser || isLoading}>
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
                  value={userName}
                  onChange={handleUserNameChange}
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
                  onChange={(e) => console.log(e)}
                  required
                  {...register('email', {
                    required: "Email адрес обязательное поле",
                    pattern: {
                      value: REGEXP_EMAIL,
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
                disabled={validateForm() || isLoading}
                className={`profile__submit-button ${(validateForm() || isLoading) ? 'profile__submit-button_disabled' : ''}`}
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