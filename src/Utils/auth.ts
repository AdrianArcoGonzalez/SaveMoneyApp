import jwt from "jwt-decode";
import { PayloadToken } from "../interfaces/interfaces";

const decodeToken = (token: string) => {
  const payloadToken: PayloadToken = jwt(token);

  const user = {
    token: token,
    id: payloadToken.id,
    userName: payloadToken.userName,
    isLogged: true,
  };
  return user;
};

export default decodeToken;
