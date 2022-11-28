import { Category } from "../interfaces/interfaces";

export const incomeIcon =
  "https://cdn-icons-png.flaticon.com/512/1295/1295801.png";

const foodIcon = "https://cdn-icons-png.flaticon.com/512/1886/1886722.png";
const techIcon = "https://cdn-icons-png.flaticon.com/512/689/689355.png";
const clothesIcon = "https://cdn-icons-png.flaticon.com/512/7529/7529519.png";
const travelIcon = "https://cdn-icons-png.flaticon.com/512/2060/2060284.png";
const homeIcon = "https://cdn-icons-png.flaticon.com/512/619/619153.png";

export const categories: Category[] = [
  {
    name: "Food",
    icon: foodIcon,
  },
  {
    name: "Technology",
    icon: techIcon,
  },
  {
    name: "Clothes",
    icon: clothesIcon,
  },
  {
    name: "Travel",
    icon: travelIcon,
  },
  {
    name: "Home",
    icon: homeIcon,
  },
];
