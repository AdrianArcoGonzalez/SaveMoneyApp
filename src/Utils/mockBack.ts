import { UserMoneyData } from "../interfaces/interfaces";

const mockUser: UserMoneyData = {
  userName: "test",
  token: "123123",
  isLogged: true,
  currency: "$",
  incomes: [
    { name: "work", quantity: 2000, date: "24-11-2022" },
    { name: "work extra payment", quantity: 1000, date: "24-11-2022" },
    { name: "Sell clothes", quantity: 180, date: "24-11-2022" },
    { name: "Won in casino", quantity: 2000, date: "24-11-2022" },
  ],
  moneySaved: 8000,
  expenses: [
    {
      name: "Zara",
      quantity: 300,
      date: "24-11-2022",
      icon: "",
      category: "Clothes",
    },
    {
      name: "Mercadona",
      quantity: 200,
      date: "22-11-2022",
      icon: "",
      category: "Food",
    },
    {
      name: "Rent",
      quantity: 500,
      date: "22-11-2022",
      icon: "",
      category: "Home",
    },
  ],
  savingTarget: 1000,
};

export default mockUser;
