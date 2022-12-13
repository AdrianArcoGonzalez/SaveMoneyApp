import Card from "../../components/Card/Card";
import {
  getGraphicData,
  getLimitToWaste,
  getTotalExpenses,
  getTotalIncomes,
} from "../../Utils/operationsUtils";
import { useContext } from "react";
import MainPageStyled from "./MainPageStyled";
import Graphic from "../../components/Graphic/Graphic";
import MovementsList from "../../components/MovementsList/MovementsList";
import UserContext from "../../store/UserContext/UserContext";

const MainPage = (): JSX.Element => {
  const { user } = useContext(UserContext);

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
      <Graphic data={getGraphicData(user)} />
      <MovementsList type="Recent movements" />
    </MainPageStyled>
  );
};

export default MainPage;
