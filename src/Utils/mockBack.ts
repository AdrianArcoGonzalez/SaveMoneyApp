import { ExpenseIncome, UserLoged } from "../interfaces/interfaces";
import { expensesCategories, incomesCategories } from "./categories";

export const initialUser: UserLoged = {
  userName: "",
  token: "",
  isLogged: false,
  currency: "$",
  incomes: [],
  moneySaved: 0,
  expenses: [],
  savingTarget: 0,
  monthlyIncomes: 0,
};

export const mockUser: UserLoged = {
  userName: "test",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODc0MDY4ZWZiZTMxZjViOWY2ZWVhYSIsInVzZXJOYW1lIjoiQWRtaW4iLCJjdXJyZW5jeSI6IiQiLCJleHBlbnNlcyI6W3sibmFtZSI6IlphcmEiLCJxdWFudGl0eSI6MzAwLCJkYXRlIjoiMjAyMi0xMS0yNyIsImNhdGVnb3J5Ijp7Im5hbWUiOiJDbG90aGVzIiwiaWNvbiI6Imh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzc1MjkvNzUyOTUxOS5wbmcifX0seyJuYW1lIjoiTWVyY2Fkb25hIiwicXVhbnRpdHkiOjIwMCwiZGF0ZSI6IjIwMjItMTEtMjQiLCJjYXRlZ29yeSI6eyJuYW1lIjoiRm9vZCIsImljb24iOiJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8xODg2LzE4ODY3MjIucG5nIn19LHsibmFtZSI6IlJlbnQiLCJxdWFudGl0eSI6NTAwLCJkYXRlIjoiMjAyMi0xMS0yOCIsImNhdGVnb3J5Ijp7Im5hbWUiOiJIb21lIiwiaWNvbiI6Imh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzYxOS82MTkxNTMucG5nIn19LHsibmFtZSI6Ikdhc29saW5lIiwicXVhbnRpdHkiOjIzMCwiZGF0ZSI6IjI0LTExLTIwMjIiLCJjYXRlZ29yeSI6eyJuYW1lIjoiVHJhbnNwb3J0IiwiaWNvbiI6Imh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzc3Ni83NzY2MjUucG5nIn19LHsibmFtZSI6IkRpbm5lciIsInF1YW50aXR5Ijo2MCwiZGF0ZSI6IjI1LTExLTIwMjIiLCJjYXRlZ29yeSI6eyJuYW1lIjoiRm9vZCIsImljb24iOiJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8xODg2LzE4ODY3MjIucG5nIn19XSwiaW5jb21lcyI6W3sibmFtZSI6IndvcmsiLCJxdWFudGl0eSI6MjAwMCwiZGF0ZSI6IjIwMjItMTEtMDEiLCJjYXRlZ29yeSI6eyJuYW1lIjoiSW5jb21lcyIsImljb24iOiJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8xMjk1LzEyOTU4MDEucG5nIn19LHsibmFtZSI6IndvcmsgZXh0cmEgcGF5bWVudCIsInF1YW50aXR5IjoxMDAwLCJkYXRlIjoiMjAyMi0xMS0xNSIsImNhdGVnb3J5Ijp7Im5hbWUiOiJJbmNvbWVzIiwiaWNvbiI6Imh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzEyOTUvMTI5NTgwMS5wbmcifX0seyJuYW1lIjoiU2VsbCBjbG90aGVzIiwicXVhbnRpdHkiOjE4MCwiZGF0ZSI6IjIwMjItMTEtMjMiLCJjYXRlZ29yeSI6eyJuYW1lIjoiSW5jb21lcyIsImljb24iOiJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8xMjk1LzEyOTU4MDEucG5nIn19LHsibmFtZSI6IldvbiBpbiBjYXNpbm8iLCJxdWFudGl0eSI6MjAwMCwiZGF0ZSI6IjIwMjItMTEtMjgiLCJjYXRlZ29yeSI6eyJuYW1lIjoiSW5jb21lcyIsImljb24iOiJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8xMjk1LzEyOTU4MDEucG5nIn19XSwibW9uZXlTYXZlZCI6ODAwMCwic2F2aW5nVGFyZ2V0IjoxMDAwLCJpYXQiOjE2NzExODQ4MDJ9.DaLHyKjLYCdRgiVL-uZJeWRYHzXB2tgb15u8dOnUqYY",
  isLogged: true,
  currency: "€",
  monthlyIncomes: 2500,
  incomes: [
    {
      name: "Work",
      quantity: 2000,
      date: "2022-11-01",
      id: "01",
      category: {
        name: incomesCategories.income.name,
        icon: incomesCategories.income.icon,
      },
    },
    {
      name: "Work extra payment",
      quantity: 1000,
      date: "2022-11-15",
      id: "02",
      category: {
        name: incomesCategories.income.name,
        icon: incomesCategories.income.icon,
      },
    },
    {
      name: "Sell clothes",
      quantity: 180,
      date: "2022-11-23",
      id: "03",
      category: {
        name: incomesCategories.income.name,
        icon: incomesCategories.income.icon,
      },
    },
    {
      name: "Won in casino",
      quantity: 2000,
      date: "2022-11-28",
      id: "04",
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
      id: "05",
      category: {
        name: expensesCategories.clothes.name,
        icon: expensesCategories.clothes.icon,
      },
    },
    {
      name: "Mercadona",
      quantity: 200,
      date: "2022-11-24",
      id: "06",
      category: {
        name: expensesCategories.food.name,
        icon: expensesCategories.food.icon,
      },
    },
    {
      name: "Rent",
      quantity: 500,
      date: "2022-11-28",
      id: "07",
      category: {
        name: expensesCategories.home.name,
        icon: expensesCategories.home.icon,
      },
    },
    {
      name: "Gasoline",
      quantity: 230,
      date: "2022-11-24",
      id: "08",
      category: {
        name: expensesCategories.transport.name,
        icon: expensesCategories.transport.icon,
      },
    },
    {
      name: "Dinner",
      quantity: 60,
      date: "2022-10-25",
      id: "09",
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
  id: "",
};
