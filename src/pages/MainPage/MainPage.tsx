import Card from "../../components/Card/Card";

const MainPage = (): JSX.Element => {
  return (
    <div className="card">
      <Card
        income={2000.14}
        moneySaved={8000.49}
        spend={1000.34}
        currencyType={"$"}
      />
      <Card limit={1000} spend={700} currencyType={"$"} />
    </div>
  );
};

export default MainPage;
