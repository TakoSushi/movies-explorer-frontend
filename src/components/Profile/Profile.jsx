import "./Profile.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";

function Profile () {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [isEditUser, setIsEditUser] = useState(false);

  const navigate = useNavigate();

  function handleChangeName (e) {
    setName(e.target.value);
  }

  function handleChangeEmail (e) {
    setEmail(e.target.value);
  }

  function handleIsEditUser () {
    setIsEditUser(true);
  }

  function handleSignOut () {
    navigate("/signin");
  }

  function handleSubmit (e) {
    e.preventDefault();

    setIsEditUser(false);
  }

  return (
    <>
      <Header />
      <main className="profile">
        <h2 className="profile__header">Привет, Виталий!</h2>
        <form
          name="profile-form"
          method="POST"
          className="profile__form"
          onSubmit={handleSubmit}
          >
          <fieldset className="profile__fieldset">
            <div className="profile__data-box">
              <legend className="profile__input-title">Имя</legend>
              <input 
                  type="text"
                  name="user-name"
                  value={name}
                  onChange={handleChangeName}
                  className="profile__input profile__input-name"
                  placeholder="Имя"
              />
            </div>
            <span className="profile__border-element"></span>
            <div className="profile__data-box">
              <legend className="profile__input-title">E-mail</legend>
              <input
                  type="email"
                  name="user-email"
                  value={email}
                  onChange={handleChangeEmail}
                  className="profile__input profile__input-email"
                  placeholder="Почта"
              />
            </div>
          </fieldset>
          { isEditUser ?
            <div>  
              <span className="profile__error-message">При обновлении профиля произошла ошибка.</span>    
              <button
                type="submit"
                className="profile__submit-button"
                disabled={false}
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