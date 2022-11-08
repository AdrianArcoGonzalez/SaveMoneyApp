import Login from "../../components/Login/Login";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <div className="secondary-title-container">
        <h2 className="secondary-title">
          Save your time and your
          <span className="secondary-title--blue"> money</span>
        </h2>
      </div>
      <h3 className="third-title">Welcome!</h3>
      <Login username="" password="" />
    </LoginPageStyled>
  );
};

export default LoginPage;
