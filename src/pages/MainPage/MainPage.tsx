import Card from "../../components/Card/Card";
import getLimitToWaste from "../../Utils/getLimitToWaste";
import mockUser from "../../Utils/mockBack";

const MainPage = (): JSX.Element => {
  return (
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
  );
};

export default MainPage;
