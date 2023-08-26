import { AuthorizationUser } from "../AuthorizationUser/AuthorizationUser";

function Login ({ onLoginUser, serverError, onServerError }) {
  
  return (
      <AuthorizationUser 
        titleText={"Рады видеть!"}
        buttonText={"Войти"}
        path={"/signup"}
        handleUserData={onLoginUser}
        serverError={serverError}
        onServerError={onServerError}
      />
  );
}

export { Login };