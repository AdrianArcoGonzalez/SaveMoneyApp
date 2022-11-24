import { Expense, UserMoneyData } from "../interfaces/interfaces";

export const mockUser: UserMoneyData = {
  userName: "test",
  token: "123123",
  isLogged: true,
  currency: "$",
  incomes: 2000,
  moneySaved: 8000,
  spends: 300,
  savingTarget: 1000,
};

export const mockExpense: Expense = {
  category: "",
  date: "",
  icon: "",
  name: "",
  quantity: 0,
};
