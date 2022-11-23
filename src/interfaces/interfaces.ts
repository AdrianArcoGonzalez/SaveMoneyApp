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
  incomes: number;
  spends: number;
  moneySaved: number;
  currency: "€" | "$";
  savingTarget: number;
}
export interface MoneyData {
  incomes: number;
  currency: "€" | "$";
  savingTarget: number;
}

export interface Expense {
  name: string;
  quantity: number;
  date: string;
  icon: string;
  category: string;
}

export interface Income {
  name: string;
  quantity: number;
  date: string;
}

export interface IncomesValues {
  incomes: number;
  saving: number;
  currency: "€" | "$";
}

export interface Category {
  name: string;
  icon: string;
}
