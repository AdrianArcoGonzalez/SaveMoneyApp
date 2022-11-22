import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../../Utils/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHandHoldingDollar,
  faHouse,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { NavigationBarStyled } from "./NavigationBarStyled";

export const NavigationBar = (): JSX.Element => {
  const { home, newExpense, newIncome, settings } = routes;
  const { pathname } = useLocation();

  return (
    <NavigationBarStyled>
      <NavLink
        to={home}
        className={`navigation-bar__link  ${
          pathname === home ? "navigation-bar__link--selected" : ""
        }`}
      >
        <FontAwesomeIcon icon={faHouse} className="link-icon" />
        <span className="link-text">{"Home"}</span>
      </NavLink>

      <NavLink
        to={newIncome}
        className={`navigation-bar__link  ${
          pathname === newIncome ? "navigation-bar__link--selected" : ""
        }`}
      >
        <FontAwesomeIcon icon={faHandHoldingDollar} className="link-icon" />
        <span className="link-text">New Income</span>
      </NavLink>

      <NavLink
        to={newExpense}
        className={`navigation-bar__link  ${
          pathname === newExpense ? "navigation-bar__link--selected" : ""
        }`}
      >
        <FontAwesomeIcon icon={faMoneyCheckDollar} className="link-icon" />
        <span className="link-text">New Expense</span>
      </NavLink>

      <NavLink
        to={settings}
        className={`navigation-bar__link  ${
          pathname === settings ? "navigation-bar__link--selected" : ""
        }`}
      >
        <FontAwesomeIcon icon={faGear} className="link-icon" />
        <span className="link-text">Settings</span>
      </NavLink>
    </NavigationBarStyled>
  );
};
