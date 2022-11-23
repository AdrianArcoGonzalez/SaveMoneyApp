import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import LandingPageStyled from "./LandingPageStyled";

const LandingPage = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <LandingPageStyled>
      <img
        src="/images/saveMoney.jpg"
        alt="stop wasting money over a background of a street"
        className="image-central"
        width={300}
        height={320}
      />
      <div className="secondary-title-container">
        <h2 className="secondary-title">
          Save your time and your
          <span className="secondary-title--blue"> money</span>
        </h2>
      </div>
      <Button
        type="button"
        onClick={() => navigate("/login")}
        text="Get started"
      />

      <span className="text-login">
        Haven't an account yet?{" "}
        <NavLink to={"/register"} className="link-login">
          Register
        </NavLink>
      </span>
    </LandingPageStyled>
  );
};

export default LandingPage;
