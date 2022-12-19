import jwt from "jwt-decode";
import { PayloadToken, UserFromDb } from "../interfaces/interfaces";

const decodeToken = (token: string) => {
  const payloadToken: PayloadToken = jwt(token);

  const user: UserFromDb = {
    token: token,
    id: payloadToken.id,
    userName: payloadToken.userName,
    isLogged: true,
    currency: payloadToken.currency,
    expenses: payloadToken.expenses,
    incomes: payloadToken.incomes,
    moneySaved: payloadToken.moneySaved,
    savingTarget: payloadToken.savingTarget,
    monthlyIncomes: payloadToken.monthlyIncomes,
  };
  return user;
};

export default decodeToken;
