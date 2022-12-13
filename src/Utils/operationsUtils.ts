import {
  Category,
  ExpenseIncome,
  GraphicData,
  UserLoged,
} from "../interfaces/interfaces";
import { expensesCategoriesList } from "./categories";

export const getLimitToWaste = (
  incomes: ExpenseIncome[],
  savingTarget: number
): number => {
  let initialIncomes = 0;
  const totalIncomes = incomes.reduce(
    (accumulator, incomes) => accumulator + incomes.quantity,
    initialIncomes
  );

  return totalIncomes - savingTarget;
};

export const getTotalIncomes = (incomes: ExpenseIncome[]): number => {
  let initialIncome = 0;
  const totalIncomes = incomes.reduce(
    (accumulator, incomes) => accumulator + incomes.quantity,
    initialIncome
  );

  return totalIncomes;
};

export const getTotalExpenses = (expenses: ExpenseIncome[]): number => {
  let initialExpense = 0;

  const totalExpenses = expenses.reduce(
    (accumulator, expenses) => accumulator + expenses.quantity,
    initialExpense
  );
  return totalExpenses;
};

export const getTotalExpensesByCategory = (
  expensesList: ExpenseIncome[],
  category: Category
) => {
  const expensesByCategory = expensesList.filter(
    (expense) => expense.category.name === category.name
  );

  const totalExpenses: ExpenseIncome = {
    category: category,
    quantity: getTotalExpenses(expensesByCategory),
    date: "",
    name: category.name,
  };

  return totalExpenses;
};

export const getGraphicData = (user: UserLoged): GraphicData[] => {
  const data = expensesCategoriesList().map((category) => {
    const totalByCategory = getTotalExpensesByCategory(user.expenses, category);
    const currentExpense = {
      value: totalByCategory.quantity,
      name: totalByCategory.name,
    };
    return currentExpense;
  });

  return data;
};
