export interface ErrorsHandler {
  userName?: string;
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
  incomes: ExpenseIncome[];
  expenses: ExpenseIncome[];
  moneySaved: number;
  currency: "€" | "$";
  savingTarget: number;
}
export interface MoneyData {
  incomes: number;
  currency: "€" | "$";
  savingTarget: number;
}

export interface ExpenseIncome {
  name: string;
  quantity: number;
  date: string;
  category: Category;
}

export interface PayloadToken {
  id: string;
  userName: string;
  iat: number;
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

export interface GraphicData {
  name: string;
  value: number;
}
