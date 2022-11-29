import { ExpenseIncome, UserMoneyData } from "../interfaces/interfaces";
import { expensesCategories, incomesCategories } from "./categories";

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
      category: {
        name: incomesCategories.income.name,
        icon: incomesCategories.income.icon,
      },
    },
    {
      name: "work extra payment",
      quantity: 1000,
      date: "2022-11-15",
      category: {
        name: incomesCategories.income.name,
        icon: incomesCategories.income.icon,
      },
    },
    {
      name: "Sell clothes",
      quantity: 180,
      date: "2022-11-23",
      category: {
        name: incomesCategories.income.name,
        icon: incomesCategories.income.icon,
      },
    },
    {
      name: "Won in casino",
      quantity: 2000,
      date: "2022-11-28",
      category: {
        name: incomesCategories.income.name,
        icon: incomesCategories.income.icon,
      },
    },
  ],
  moneySaved: 8000,
  expenses: [
    {
      name: "Zara",
      quantity: 300,
      date: "2022-11-27",
      category: {
        name: expensesCategories.clothes.name,
        icon: expensesCategories.clothes.icon,
      },
    },
    {
      name: "Mercadona",
      quantity: 200,
      date: "2022-11-24",
      category: {
        name: expensesCategories.food.name,
        icon: expensesCategories.food.icon,
      },
    },
    {
      name: "Rent",
      quantity: 500,
      date: "2022-11-28",
      category: {
        name: expensesCategories.home.name,
        icon: expensesCategories.home.icon,
      },
    },
    {
      name: "Gasoline",
      quantity: 230,
      date: "24-11-2022",
      category: {
        name: expensesCategories.transport.name,
        icon: expensesCategories.transport.icon,
      },
    },
    {
      name: "Dinner",
      quantity: 60,
      date: "25-11-2022",
      category: {
        name: expensesCategories.food.name,
        icon: expensesCategories.food.icon,
      },
    },
  ],
  savingTarget: 1000,
};

export const mockExpense: ExpenseIncome = {
  category: {
    name: "",
    icon: "",
  },
  date: "",
  name: "",
  quantity: 0,
};
