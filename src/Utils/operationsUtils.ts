import { Expense, Income } from "../interfaces/interfaces";

export const getLimitToWaste = (
  incomes: Income[],
  savingTarget: number
): number => {
  let incomesQuantity = 0;

  incomes.map((income) => (incomesQuantity += income.quantity));

  return incomesQuantity - savingTarget;
};

export const getTotalIncomes = (incomes: Income[]): number => {
  let totalIncomes = 0;
  incomes.map((income) => (totalIncomes += income.quantity));

  return totalIncomes;
};

export const getTotalExpenses = (expenses: Expense[]): number => {
  let totalExpenses = 0;

  expenses.map((expense) => (totalExpenses += expense.quantity));

  return totalExpenses;
};
