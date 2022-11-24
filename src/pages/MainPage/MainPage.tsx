import Card from "../../components/Card/Card";
import {
  getLimitToWaste,
  getTotalExpenses,
  getTotalIncomes,
} from "../../Utils/operationsUtils";
import { mockUser } from "../../Utils/mockBack";
import MainPageStyled from "./MaingPageStyled";

const MainPage = (): JSX.Element => {
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
    </MainPageStyled>
  );
};

export default MainPage;
