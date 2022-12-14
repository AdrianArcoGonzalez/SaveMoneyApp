import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../../Utils/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHandHoldingDollar,
  faHouse,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import NavigationBarStyled from "./NavigationBarStyled";
import { useContext } from "react";
import { UiContext } from "../../store/uiContext/uiContext";
import {
  closeExpenseFormActionCreator,
  closeIncomeFormActionCreator,
} from "../../store/actions/uiActions/uiActions";

const NavigationBar = (): JSX.Element => {
  const { main, newExpense, newIncome, settings } = routes;
  const { pathname } = useLocation();
  const { dispatchUi } = useContext(UiContext);

  const closeAllForms = () => {
    dispatchUi(closeExpenseFormActionCreator());
    dispatchUi(closeIncomeFormActionCreator());
  };

  return (
    <>
      {pathname !== "/home" &&
      pathname !== "/login" &&
      pathname !== "/register" ? (
        <NavigationBarStyled>
          <NavLink
            to={main}
            className={"navigation-bar__link"}
            onClick={() => closeAllForms()}
          >
            <FontAwesomeIcon icon={faHouse} className="link-icon" />
            <span className="link-text">Home</span>
          </NavLink>

          <NavLink
            to={newIncome}
            className={"navigation-bar__link"}
            onClick={() => closeAllForms()}
          >
            <FontAwesomeIcon icon={faHandHoldingDollar} className="link-icon" />
            <span className="link-text">Incomes</span>
          </NavLink>

          <NavLink
            to={newExpense}
            className={"navigation-bar__link"}
            onClick={() => closeAllForms()}
          >
            <FontAwesomeIcon icon={faMoneyCheckDollar} className="link-icon" />
            <span className="link-text">Expenses</span>
          </NavLink>

          <NavLink
            to={settings}
            className={"navigation-bar__link"}
            onClick={() => closeAllForms()}
          >
            <FontAwesomeIcon icon={faGear} className="link-icon" />
            <span className="link-text">Settings</span>
          </NavLink>
        </NavigationBarStyled>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavigationBar;
