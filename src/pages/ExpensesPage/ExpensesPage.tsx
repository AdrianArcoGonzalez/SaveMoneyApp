import MovementsList from "../../components/MovementsList/MovementsList";
import ExpensesPageStyled from "./ExpensesPageStyled";
import { useContext } from "react";
import { UiContext } from "../../store/uiContext/uiContext";
import { openExpenseFormActionCreator } from "../../store/actions/uiActions/uiActions";
import { NewExpense } from "../../components/NewExpense/NewExpense";

const ExpensesPage = (): JSX.Element => {
  const {
    ui: { showExpenseForm },
    dispatchUi,
  } = useContext(UiContext);

  return (
    <ExpensesPageStyled>
      {showExpenseForm && <NewExpense />}

      {!showExpenseForm && (
        <>
          <h2 className="main-title">
            Expenses{" "}
            <button
              className="main-title__button"
              onClick={() => {
                dispatchUi(openExpenseFormActionCreator());
              }}
            >
              +
            </button>
          </h2>

          <MovementsList type="Expenses" />
        </>
      )}
    </ExpensesPageStyled>
  );
};

export default ExpensesPage;
