import { ExpenseIncome, UserMoneyData } from "../interfaces/interfaces";
import { categories, incomeIcon } from "./categories";

export const mockUser: UserMoneyData = {
  userName: "test",
  token: "123123",
  isLogged: true,
  currency: "$",
  incomes: [
    {
      name: "work",
      quantity: 2000,
      date: "2022-11-01",
      category: "Income",
      icon: incomeIcon,
    },
    {
      name: "work extra payment",
      quantity: 1000,
      date: "2022-11-15",
      category: "Income",
      icon: incomeIcon,
    },
    {
      name: "Sell clothes",
      quantity: 180,
      date: "2022-11-23",
      category: "Income",
      icon: incomeIcon,
    },
    {
      name: "Won in casino",
      quantity: 2000,
      date: "2022-11-28",
      category: "Income",
      icon: incomeIcon,
    },
  ],
  moneySaved: 8000,
  expenses: [
    {
      name: "Zara",
      quantity: 300,
      date: "2022-11-27",
      icon: categories[2].icon,
      category: categories[2].name,
    },
    {
      name: "Mercadona",
      quantity: 200,
      date: "2022-11-24",
      icon: categories[0].icon,
      category: categories[0].name,
    },
    {
      name: "Rent",
      quantity: 500,
      date: "2022-11-28",
      icon: categories[4].icon,
      category: categories[4].name,
    },
  ],
  savingTarget: 1000,
};

export const mockExpense: ExpenseIncome = {
  category: "",
  date: "",
  icon: "",
  name: "",
  quantity: 0,
};
