import Card from "../../components/Card/Card";
import {
  getLimitToWaste,
  getTotalExpenses,
  getTotalIncomes,
} from "../../Utils/operationsUtils";

import { useContext } from "react";
import MainPageStyled from "./MainPageStyled";
import Graphic from "../../components/Graphic/Graphic";
import MovementsList from "../../components/MovementsList/MovementsList";
import { GraphicData, UserLoged } from "../../interfaces/interfaces";
import UserContext from "../../store/UserContext/UserContext";

const MainPage = (): JSX.Element => {
  const { user } = useContext(UserContext);

  const graphicData = (user: UserLoged): GraphicData[] => {
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

      <Card
        income={getTotalIncomes(user.incomes)}
        moneySaved={user.moneySaved}
        expense={getTotalExpenses(user.expenses)}
        currencyType={user.currency}
      />
      <Card
        limit={getLimitToWaste(user.incomes, user.savingTarget)}
        expense={getTotalExpenses(user.expenses)}
        currencyType={user.currency}
      />
      <Graphic data={graphicData(user)} />
      <MovementsList type="Recent movements" />
    </MainPageStyled>
  );
};

export default MainPage;
