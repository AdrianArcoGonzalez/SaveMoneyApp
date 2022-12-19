import { useLocation } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";

import {
  faHandHoldingDollar,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import NavigationBarStyled from "./NavigationBarStyled";
import { useContext, useCallback } from "react";
import { UiContext } from "../../store/uiContext/uiContext";
import {
  closeExpenseFormActionCreator,
  closeIncomeFormActionCreator,
} from "../../store/actions/uiActions/uiActions";
import { routes } from "../../Utils/routes";

const NavigationBar = (): JSX.Element => {
  const [value, setValue] = React.useState(0);
  const navigator = useNavigate();
  const { main, newExpense, newIncome, settings } = routes;
  const { pathname } = useLocation();
  const { dispatchUi } = useContext(UiContext);

  const closeAllForms = useCallback(() => {
    dispatchUi(closeExpenseFormActionCreator());
    dispatchUi(closeIncomeFormActionCreator());
  }, [dispatchUi]);

  return (
    <>
      {pathname !== "/home" &&
      pathname !== "/login" &&
      pathname !== "/register" ? (
        <NavigationBarStyled>
          <Box sx={{ width: "100%" }}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                event.preventDefault();
                setValue(newValue);
                navigator(newValue);
                closeAllForms();
              }}
            >
              <BottomNavigationAction
                className={pathname === main ? "active" : " "}
                value={main}
                label="Home"
                icon={<HomeIcon className="link-icon" />}
              />
              <BottomNavigationAction
                className={pathname === newIncome ? "active" : " "}
                value={newIncome}
                label="Incomes"
                icon={
                  <FontAwesomeIcon
                    icon={faHandHoldingDollar}
                    className="link-icon"
                  />
                }
              />
              <BottomNavigationAction
                className={pathname === newExpense ? "active" : " "}
                value={newExpense}
                label="Expenses"
                icon={
                  <FontAwesomeIcon
                    icon={faMoneyCheckDollar}
                    className="link-icon"
                  />
                }
              />
              <BottomNavigationAction
                className={pathname === settings ? "active" : " "}
                value={settings}
                label="Settings"
                icon={<SettingsIcon className="link-icon" />}
              />
            </BottomNavigation>
          </Box>
        </NavigationBarStyled>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavigationBar;
