import { UserMoneyData } from "../interfaces/interfaces";

const mockUser: UserMoneyData = {
  userName: "test",
  token: "123123",
  isLogged: true,
  currency: "$",
  incomes: 2000,
  moneySaved: 8000,
  spends: 300,
  savingTarget: 1000,
};

export default mockUser;
