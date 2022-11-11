import { Register } from "../../components/Register/Register";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled>
      <div className="secondary-title-container">
        <h2 className="secondary-title">
          Save your time and your
          <span className="secondary-title--blue"> money</span>
        </h2>
      </div>
      <h3 className="third-title">Welcome!</h3>
      <Register />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
