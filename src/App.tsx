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
import CredentialsRoutes from "./components/CredentialsRoutes/Credentials";
import UserContext from "./store/UserContext/UserContext";
import { useContext } from "react";
import NoCredentialsRoutes from "./components/NoCredentialsRoutes/NoCredentialsRoutes";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import { Incomes } from "./components/Incomes/Incomes";

const App = (): JSX.Element => {
  const { user } = useContext(UserContext);
  return (
    <Layout
      children={[
        <ToastContainer
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Zoom}
        />,
        <Header />,
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <NoCredentialsRoutes isLogged={user.isLogged}>
                <LandingPage />
              </NoCredentialsRoutes>
            }
          />
          <Route
            path="/login"
            element={
              <NoCredentialsRoutes isLogged={user.isLogged}>
                <LoginPage />
              </NoCredentialsRoutes>
            }
          />
          <Route
            path="/register"
            element={
              <NoCredentialsRoutes isLogged={user.isLogged}>
                <RegisterPage />
              </NoCredentialsRoutes>
            }
          />
          <Route
            path="/main"
            element={
              <CredentialsRoutes isLogged={user.isLogged}>
                {user.monthlyIncomes === undefined ? (
                  <Incomes type="initial" />
                ) : (
                  <MainPage />
                )}
              </CredentialsRoutes>
            }
          />
          <Route
            path="/incomes"
            element={
              <CredentialsRoutes isLogged={user.isLogged}>
                <IncomesPage />
              </CredentialsRoutes>
            }
          />
          <Route
            path="/expenses"
            element={
              <CredentialsRoutes isLogged={user.isLogged}>
                <ExpensesPage />
              </CredentialsRoutes>
            }
          />
          <Route
            path="/settings"
            element={
              <CredentialsRoutes isLogged={user.isLogged}>
                <SettingsPage />
              </CredentialsRoutes>
            }
          />
        </Routes>,
        <NavigationBar />,
      ]}
    />
  );
};

export default App;
