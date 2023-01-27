import { User, UserLoged, UserLogin } from "../../interfaces/interfaces";
import decodeToken from "../../Utils/auth";
import environments from "../../Utils/environments/environments";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../store/UserContext/UserContext";
import { userLoginActionCreator } from "../../store/actions/userActions/userActions";
import { useNavigate } from "react-router-dom";
import { useFeedback } from "../useFeedback/useFeedback";
import { mockUser } from "../../Utils/mockBack";

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
      //const { data } = await axios.post(environments.login, userLogin);
      //change lines 34 to 37 when the back is used
      const data = { user: mockUser };
      if (userLogin.userName === "wrongName") {
        throw new Error();
      }
      const user = decodeToken(data.user.token);

      //const expenses = await axios.get(environments.update+user.id)

      const loginUser: UserLoged = {
        ...user,
        expenses: mockUser.expenses,
        incomes: mockUser.incomes,
        isLogged: true,
      };

      successFeedback(`Welcome ${user.userName}`);
      dispatch(userLoginActionCreator(mockUser));

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
