import Card from "../../components/Card/Card";
import {
  getLimitToWaste,
  getTotalExpenses,
  getTotalIncomes,
} from "../../Utils/operationsUtils";

import { mockUser } from "../../Utils/mockBack";
import MainPageStyled from "./MainPageStyled";
import Graphic from "../../components/Graphic/Graphic";
import MovementsList from "../../components/MovementsList/MovementsList";
import { GraphicData, UserMoneyData } from "../../interfaces/interfaces";

const MainPage = (): JSX.Element => {
  const graphicData = (user: UserMoneyData): GraphicData[] => {
    const data: GraphicData[] = [];

    user.expenses.forEach((expense) => {
      const currentExpense = { value: expense.quantity, name: expense.name };
      data.push(currentExpense);
    });
    return data;
  };

  return (
    <MainPageStyled>
      <h2 className="main-title">Dashboard</h2>
      <div className="card">
        <Card
          income={getTotalIncomes(mockUser.incomes)}
          moneySaved={mockUser.moneySaved}
          expense={getTotalExpenses(mockUser.expenses)}
          currencyType={mockUser.currency}
        />
        <Card
          limit={getLimitToWaste(mockUser.incomes, mockUser.savingTarget)}
          expense={getTotalExpenses(mockUser.expenses)}
          currencyType={mockUser.currency}
        />
      </div>
      <Graphic data={graphicData(mockUser)} />
      <MovementsList />
    </MainPageStyled>
  );
};

export default MainPage;
