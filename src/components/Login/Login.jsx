import { AuthorizationUser } from "../AuthorizationUser/AuthorizationUser";

function Login () {
  
  return (
      <AuthorizationUser 
        titleText={"Рады видеть!"}
        buttonText={"Войти"}
        path={"/signup"}
      />
  );
}

export { Login };