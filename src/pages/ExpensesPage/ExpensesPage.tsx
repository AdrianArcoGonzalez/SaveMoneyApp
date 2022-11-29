import MovementsList from "../../components/MovementsList/MovementsList";
import ExpensesPageStyled from "./ExpensesPageStyled";

const ExpensesPage = (): JSX.Element => {
  return (
    <ExpensesPageStyled>
      <h2 className="main-title">Expenses</h2>
      <MovementsList type="Expenses" />
    </ExpensesPageStyled>
  );
};

export default ExpensesPage;
