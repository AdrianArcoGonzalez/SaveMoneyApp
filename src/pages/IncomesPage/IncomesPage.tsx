import IncomesPageStyled from "./IncomesPageStyled";
import MovementsList from "../../components/MovementsList/MovementsList";

const IncomesPage = (): JSX.Element => {
  return (
    <IncomesPageStyled>
      <h2 className="main-title">Incomes</h2>
      <MovementsList type="Incomes" />
    </IncomesPageStyled>
  );
};

export default IncomesPage;
