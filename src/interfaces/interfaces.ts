export interface ErrorsHandler {
  userName?: string;
  password?: string;
  email?: string;
  confirmPassword?: string;
  confirmEmail?: string;
}

export interface UserLogin {
  userName: string;
  password: string;
}
export interface User {
  userName: string;
  incomes: ExpenseIncome[];
  expenses: ExpenseIncome[];
  moneySaved: number;
  currency: "€" | "$";
  savingTarget: number;
}

export interface UserRegister extends User {
  email: string;
  password: string;
  confirmPassword: string;
  confirmEmail: string;
}

export interface UserLoged extends User {
  token: string;
  isLogged?: boolean;
}
export interface UserFromDb extends UserLoged {
  id: string;
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
  incomes: ExpenseIncome[];
  expenses: ExpenseIncome[];
  moneySaved: number;
  currency: "€" | "$";
  savingTarget: number;
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
