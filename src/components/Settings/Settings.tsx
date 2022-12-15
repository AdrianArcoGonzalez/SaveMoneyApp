import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
  faUserGear,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import SettingsStyled from "./SettingsStyled";
import { useContext, useState } from "react";
import { Incomes } from "../Incomes/Incomes";
import { UiContext } from "../../store/uiContext/uiContext";
import { themeToggleActionCreator } from "../../store/actions/uiActions/uiActions";

const Settings = (): JSX.Element => {
  const [accountSettingForm, setAccountSettingsForm] = useState(false);
  const [themeSettings, setThemeSettings] = useState(false);

  const {
    ui: { theme },
    dispatchUi,
  } = useContext(UiContext);

  return (
    <SettingsStyled>
      <div className="account-container">
        <h3 className="account-container__title">
          <FontAwesomeIcon icon={faUserGear} /> Account
        </h3>
        <button className="account-container__icon-button">
          <FontAwesomeIcon
            icon={accountSettingForm ? faChevronDown : faChevronRight}
            fontSize={20}
            onClick={() => setAccountSettingsForm(!accountSettingForm)}
          />
        </button>
      </div>

      {accountSettingForm && (
        <Incomes
          type="update"
          onClick={() => setAccountSettingsForm(!accountSettingForm)}
        />
      )}

      <div className="theme-container">
        <h3 className="theme-container__title">
          <FontAwesomeIcon icon={faPalette} /> Theme
        </h3>
        <button className="theme-container__icon-button">
          <FontAwesomeIcon
            icon={themeSettings ? faChevronDown : faChevronRight}
            fontSize={20}
            onClick={() => setThemeSettings(!themeSettings)}
          />
        </button>
      </div>

      {themeSettings && (
        <div className="theme-buttons">
          <h4 className="theme-buttons__title">Actual theme: {theme}</h4>

          <button
            className="theme-buttons__button"
            onClick={() => dispatchUi(themeToggleActionCreator("light"))}
            disabled={theme === "light"}
          >
            Light
          </button>
          <button
            className="theme-buttons__button"
            onClick={() => dispatchUi(themeToggleActionCreator("dark"))}
            disabled={theme === "dark"}
          >
            Dark
          </button>
        </div>
      )}
    </SettingsStyled>
  );
};

export default Settings;
