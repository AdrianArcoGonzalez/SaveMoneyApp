import { Navigate } from "react-router-dom";

interface NoCredentialsRoutesProps {
  children: JSX.Element;
  isLogged: boolean | undefined;
}

const NoCredentialsRoutes = ({
  children,
  isLogged,
}: NoCredentialsRoutesProps): JSX.Element => {
  return !isLogged ? children : <Navigate to={"/main"} />;
};

export default NoCredentialsRoutes;
