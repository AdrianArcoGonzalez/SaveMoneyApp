import { Navigate } from "react-router-dom";

interface ProtectorRoutesProps {
  children: JSX.Element;
  isLogged: boolean | undefined;
}

const ProtectorRoutes = ({ children, isLogged }: ProtectorRoutesProps) => {
  return isLogged ? children : <Navigate to={"/login"} />;
};

export default ProtectorRoutes;
