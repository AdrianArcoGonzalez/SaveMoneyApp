export interface ErrorsHandler {
  username?: string;
  password?: string;
  email?: string;
  confirmPassword?: string;
  confirmEmail?: string;
}

export interface User {
  userName: string;
  email: string;
  password: string;
}

export type UserLogin = Omit<User, "email">;

export interface UserRegister extends User {
  confirmPassword: string;
  confirmEmail: string;
}

export interface UserLoged {
  userName: string;
  token: string;
  isLogged?: boolean;
}

export interface UserMoneyData extends UserLoged {
  incomes: Income[];
  expenses: Expense[];
  moneySaved: number;
  currency: "€" | "$";
  savingTarget: number;
}
export interface MoneyData {
  incomes: number;
  currency: "€" | "$";
  savingTarget: number;
}

export type Category = "Food" | "Home" | "Clothes" | "Movility" | "Technology";

export interface Expense {
  name: string;
  category: Category;
  quantity: number;
  date: string;
  icon: string;
}

export interface Income {
  name: string;
  quantity: number;
  date: string;
}
