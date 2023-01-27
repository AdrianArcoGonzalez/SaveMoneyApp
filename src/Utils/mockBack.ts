import { ExpenseIncome, UserLoged } from "../interfaces/interfaces";
import { incomesCategories, setCategoryIcon } from "./categories";

import ramdomExpenses from "./randomExpenses.json";
import ramdomIncomes from "./randomIncomes.json";

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

const incomes: ExpenseIncome[] = ramdomIncomes.map((income, index) => {
  income = { ...income, category: incomesCategories.income };
  return income;
});

const expenses: ExpenseIncome[] = setCategoryIcon(ramdomExpenses);

export const mockUser: UserLoged = {
  userName: "test",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODc0MDY4ZWZiZTMxZjViOWY2ZWVhYSIsInVzZXJOYW1lIjoiQWRtaW4iLCJjdXJyZW5jeSI6IiQiLCJleHBlbnNlcyI6W3sibmFtZSI6IlphcmEiLCJxdWFudGl0eSI6MzAwLCJkYXRlIjoiMjAyMi0xMS0yNyIsImNhdGVnb3J5Ijp7Im5hbWUiOiJDbG90aGVzIiwiaWNvbiI6Imh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzc1MjkvNzUyOTUxOS5wbmcifX0seyJuYW1lIjoiTWVyY2Fkb25hIiwicXVhbnRpdHkiOjIwMCwiZGF0ZSI6IjIwMjItMTEtMjQiLCJjYXRlZ29yeSI6eyJuYW1lIjoiRm9vZCIsImljb24iOiJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8xODg2LzE4ODY3MjIucG5nIn19LHsibmFtZSI6IlJlbnQiLCJxdWFudGl0eSI6NTAwLCJkYXRlIjoiMjAyMi0xMS0yOCIsImNhdGVnb3J5Ijp7Im5hbWUiOiJIb21lIiwiaWNvbiI6Imh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzYxOS82MTkxNTMucG5nIn19LHsibmFtZSI6Ikdhc29saW5lIiwicXVhbnRpdHkiOjIzMCwiZGF0ZSI6IjI0LTExLTIwMjIiLCJjYXRlZ29yeSI6eyJuYW1lIjoiVHJhbnNwb3J0IiwiaWNvbiI6Imh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzc3Ni83NzY2MjUucG5nIn19LHsibmFtZSI6IkRpbm5lciIsInF1YW50aXR5Ijo2MCwiZGF0ZSI6IjI1LTExLTIwMjIiLCJjYXRlZ29yeSI6eyJuYW1lIjoiRm9vZCIsImljb24iOiJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8xODg2LzE4ODY3MjIucG5nIn19XSwiaW5jb21lcyI6W3sibmFtZSI6IndvcmsiLCJxdWFudGl0eSI6MjAwMCwiZGF0ZSI6IjIwMjItMTEtMDEiLCJjYXRlZ29yeSI6eyJuYW1lIjoiSW5jb21lcyIsImljb24iOiJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8xMjk1LzEyOTU4MDEucG5nIn19LHsibmFtZSI6IndvcmsgZXh0cmEgcGF5bWVudCIsInF1YW50aXR5IjoxMDAwLCJkYXRlIjoiMjAyMi0xMS0xNSIsImNhdGVnb3J5Ijp7Im5hbWUiOiJJbmNvbWVzIiwiaWNvbiI6Imh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzEyOTUvMTI5NTgwMS5wbmcifX0seyJuYW1lIjoiU2VsbCBjbG90aGVzIiwicXVhbnRpdHkiOjE4MCwiZGF0ZSI6IjIwMjItMTEtMjMiLCJjYXRlZ29yeSI6eyJuYW1lIjoiSW5jb21lcyIsImljb24iOiJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8xMjk1LzEyOTU4MDEucG5nIn19LHsibmFtZSI6IldvbiBpbiBjYXNpbm8iLCJxdWFudGl0eSI6MjAwMCwiZGF0ZSI6IjIwMjItMTEtMjgiLCJjYXRlZ29yeSI6eyJuYW1lIjoiSW5jb21lcyIsImljb24iOiJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8xMjk1LzEyOTU4MDEucG5nIn19XSwibW9uZXlTYXZlZCI6ODAwMCwic2F2aW5nVGFyZ2V0IjoxMDAwLCJpYXQiOjE2NzExODQ4MDJ9.DaLHyKjLYCdRgiVL-uZJeWRYHzXB2tgb15u8dOnUqYY",
  isLogged: true,
  currency: "€",
  monthlyIncomes: 2500,
  incomes,
  moneySaved: 8000,
  expenses,
  savingTarget: 1000,
};

export const mockMovement: ExpenseIncome = {
  category: {
    name: "any",
    icon: "any",
  },
  date: "2022-12-31",
  name: "mock movement",
  quantity: 10,
  id: "a1b2",
};

export const initialMovement: ExpenseIncome = {
  category: { icon: "", name: "" },
  date: "",
  id: "",
  name: "",
  quantity: 0,
};
