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

const NavigationBar = (): JSX.Element => {
  const { main, newExpense, newIncome, settings } = routes;
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/home" &&
      pathname !== "/login" &&
      pathname !== "/register" ? (
        <NavigationBarStyled>
          <NavLink to={main} className={"navigation-bar__link"}>
            <FontAwesomeIcon icon={faHouse} className="link-icon" />
            <span className="link-text">Home</span>
          </NavLink>

          <NavLink to={newIncome} className={"navigation-bar__link"}>
            <FontAwesomeIcon icon={faHandHoldingDollar} className="link-icon" />
            <span className="link-text">Incomes</span>
          </NavLink>

          <NavLink to={newExpense} className={"navigation-bar__link"}>
            <FontAwesomeIcon icon={faMoneyCheckDollar} className="link-icon" />
            <span className="link-text">Expenses</span>
          </NavLink>

          <NavLink to={settings} className={"navigation-bar__link"}>
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
