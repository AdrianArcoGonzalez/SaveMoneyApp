import { Category } from "../interfaces/interfaces";

export const incomeIcon =
  "https://cdn-icons-png.flaticon.com/512/1295/1295801.png";

const foodIcon = "https://cdn-icons-png.flaticon.com/512/1886/1886722.png";
const techIcon = "https://cdn-icons-png.flaticon.com/512/689/689355.png";
const clothesIcon = "https://cdn-icons-png.flaticon.com/512/7529/7529519.png";
const travelIcon = "https://cdn-icons-png.flaticon.com/512/2060/2060284.png";
const homeIcon = "https://cdn-icons-png.flaticon.com/512/619/619153.png";
const transportIcon = "https://cdn-icons-png.flaticon.com/512/776/776625.png";

export const expensesCategories = {
  food: {
    name: "Food",
    icon: foodIcon,
  },
  technology: {
    name: "Technology",
    icon: techIcon,
  },
  clothes: {
    name: "Clothes",
    icon: clothesIcon,
  },
  travel: {
    name: "Travel",
    icon: travelIcon,
  },
  home: {
    name: "Home",
    icon: homeIcon,
  },
  transport: {
    name: "Transport",
    icon: transportIcon,
  },
};

export const incomesCategories = {
  income: {
    name: "Income",
    icon: incomeIcon,
  },
};

export const expensesCategoriesList = () => {
  const categoriesList: Category[] = [];
  Object.entries(expensesCategories).forEach(([key, value]) => {
    categoriesList.push(value);
  });

  return categoriesList;
};
