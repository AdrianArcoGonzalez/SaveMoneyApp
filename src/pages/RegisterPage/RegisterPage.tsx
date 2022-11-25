import Register from "../../components/Register/Register";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled>
      <div className="secondary-title">
        <h2 className="secondary-title__text">
          Save your time and your
          <span className="secondary-title_text--blue"> money</span>
        </h2>
      </div>
      <Register />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
