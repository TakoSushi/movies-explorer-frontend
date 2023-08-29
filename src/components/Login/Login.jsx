import { AuthorizationUser } from "../AuthorizationUser/AuthorizationUser";

function Login ({ onLoginUser, serverError, onServerError, isLoading }) {
  
  return (
      <AuthorizationUser 
        titleText={"Рады видеть!"}
        buttonText={"Войти"}
        path={"/signup"}
        handleUserData={onLoginUser}
        serverError={serverError}
        onServerError={onServerError}
        isLoading={isLoading}
      />
  );
}

export { Login };