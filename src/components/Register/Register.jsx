import { AuthorizationUser } from "../AuthorizationUser/AuthorizationUser";

function Register () {
  return (
      <AuthorizationUser 
        titleText={"Добро пожаловать"}
        buttonText={"Зарегистрироваться"}
        path={"/signin"}
      />
  );
}

export { Register };