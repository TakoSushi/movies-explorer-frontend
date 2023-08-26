import { AuthorizationUser } from "../AuthorizationUser/AuthorizationUser";

function Register ({ onRegisterUser, serverError, onServerError }) {
  
  return (
      <AuthorizationUser 
        titleText={"Добро пожаловать"}
        buttonText={"Зарегистрироваться"}
        path={"/signin"}
        handleUserData={onRegisterUser}
        serverError={serverError}
        onServerError={onServerError}
      />
  );
}

export { Register };