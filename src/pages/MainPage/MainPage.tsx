import Card from "../../components/Card/Card";

const MainPage = (): JSX.Element => {
  return (
    <div className="card">
      <Card income={2000} moneySaved={4000} spend={1000} currencyType={"$"} />
    </div>
  );
};

export default MainPage;
