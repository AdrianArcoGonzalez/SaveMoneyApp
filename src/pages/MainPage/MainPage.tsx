import Card from "../../components/Card/Card";
import getLimitToWaste from "../../Utils/getLimitToWaste";
import { mockUser } from "../../Utils/mockBack";
import MainPageStyled from "./MaingPageStyled";

const MainPage = (): JSX.Element => {
  return (
    <MainPageStyled>
      <h2 className="main-title">Dashboard</h2>
      <div className="card">
        <Card
          income={mockUser.incomes}
          moneySaved={mockUser.moneySaved}
          spend={mockUser.spends}
          currencyType={mockUser.currency}
        />
        <Card
          limit={getLimitToWaste(mockUser.incomes, mockUser.savingTarget)}
          spend={mockUser.spends}
          currencyType={"$"}
        />
      </div>
    </MainPageStyled>
  );
};

export default MainPage;
