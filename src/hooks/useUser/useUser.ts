import { User, UserLogin } from "../../interfaces/interfaces";
import decodeToken from "../../Utils/auth";
import environments from "../../Utils/environments/environments";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../store/UserContext/UserContext";
import { userLoginActionCreator } from "../../store/actions/userActions/userActions";
import { useNavigate } from "react-router-dom";
import { useFeedback } from "../useFeedback/useFeedback";

const useUser = () => {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const { successFeedback, errorFeedback } = useFeedback();

  const registerUser = async (user: User) => {
    let response;
    try {
      response = await axios.post(environments.register, user);
      successFeedback(`${response.data.message}`);
    } catch (error) {
      errorFeedback("Error with the user register, try again");
      return false;
    }
    setTimeout(() => navigate("/login"), 2000);
    return true;
  };

  const loginUser = async (userLogin: UserLogin) => {
    try {
      const { data } = await axios.post(environments.login, userLogin);
      const user = decodeToken(data.user.token);
      const loginUser = { ...user, isLogged: true };

      successFeedback(`Welcome ${user.userName}`);
      dispatch(userLoginActionCreator(loginUser));
      localStorage.setItem("token", loginUser.token);
      navigate("/main");

      return true;
    } catch (error) {
      errorFeedback("User or password not valid");
      return false;
    }
  };

  return { registerUser, loginUser };
};

export default useUser;
