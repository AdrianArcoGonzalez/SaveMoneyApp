import { ExpenseIncome, Income } from "../interfaces/interfaces";

export const getLimitToWaste = (
  incomes: Income[],
  savingTarget: number
): number => {
  let initialIncomes = 0;
  const totalIncomes = incomes.reduce(
    (accumulator, incomes) => accumulator + incomes.quantity,
    initialIncomes
  );

  return totalIncomes - savingTarget;
};

export const getTotalIncomes = (incomes: Income[]): number => {
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
