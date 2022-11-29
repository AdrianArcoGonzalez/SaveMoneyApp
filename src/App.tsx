import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./pages/MainPage/MainPage";
import Layout from "./components/Layout/Layout";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import IncomesPage from "./pages/IncomesPage/IncomesPage";
import ExpensesPage from "./pages/ExpensesPage/ExpensesPage";
import ProtectorRoutes from "./components/ProtectorRoutes/ProtectorRoutes";
import UserContext from "./store/UserContext/UserContext";
import { useContext } from "react";

const App = (): JSX.Element => {
  const { user } = useContext(UserContext);
  return (
    <Layout
      children={[
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Zoom}
        />,
        <Header />,
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/main"
            element={
              <ProtectorRoutes isLogged={user.isLogged}>
                <MainPage />
              </ProtectorRoutes>
            }
          />
          <Route
            path="/incomes"
            element={
              <ProtectorRoutes isLogged={user.isLogged}>
                <IncomesPage />
              </ProtectorRoutes>
            }
          />
          <Route
            path="/expenses"
            element={
              <ProtectorRoutes isLogged={user.isLogged}>
                <ExpensesPage />
              </ProtectorRoutes>
            }
          />
        </Routes>,
        <NavigationBar />,
      ]}
    />
  );
};

export default App;
