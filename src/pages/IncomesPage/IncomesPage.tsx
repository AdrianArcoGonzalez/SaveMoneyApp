import IncomesPageStyled from "./IncomesPageStyled";
import MovementsList from "../../components/MovementsList/MovementsList";
import { useContext } from "react";
import { UiContext } from "../../store/uiContext/uiContext";
import { openIncomeFormActionCreator } from "../../store/actions/uiActions/uiActions";
import { NewIncome } from "../../components/NewIncome/NewIncome";

const IncomesPage = (): JSX.Element => {
  const {
    ui: { showIncomeForm },
    dispatchUi,
  } = useContext(UiContext);

  return (
    <IncomesPageStyled>
      {showIncomeForm && <NewIncome />}
      {!showIncomeForm && (
        <>
          <h2 className="main-title">
            Incomes
            <button
              className="main-title__button"
              onClick={() => {
                dispatchUi(openIncomeFormActionCreator());
              }}
            >
              +
            </button>
          </h2>
          <MovementsList type="Incomes" />
        </>
      )}
    </IncomesPageStyled>
  );
};

export default IncomesPage;
