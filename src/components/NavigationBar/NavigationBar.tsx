import { NavLink } from "react-router-dom";
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

  return (
    <NavigationBarStyled>
      <NavLink to={home} className={"navigation-bar__link"}>
        <FontAwesomeIcon icon={faHouse} className="link-icon" />
        <span className="link-text">{"Home"}</span>
      </NavLink>

      <NavLink to={newIncome} className={"navigation-bar__link"}>
        <FontAwesomeIcon icon={faHandHoldingDollar} className="link-icon" />
        <span className="link-text">New Income</span>
      </NavLink>

      <NavLink to={newExpense} className={"navigation-bar__link"}>
        <FontAwesomeIcon icon={faMoneyCheckDollar} className="link-icon" />
        <span className="link-text">New Expense</span>
      </NavLink>

      <NavLink to={settings} className={"navigation-bar__link"}>
        <FontAwesomeIcon icon={faGear} className="link-icon" />
        <span className="link-text">Settings</span>
      </NavLink>
    </NavigationBarStyled>
  );
};
