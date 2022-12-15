import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import SettingsPageStyled from "./SettingsPageStyled";
import Settings from "../../components/Settings/Settings";

const SettingsPage = (): JSX.Element => {
  return (
    <SettingsPageStyled>
      <h2 className="settings__title">
        <FontAwesomeIcon icon={faGears} width={30} /> Settings
      </h2>
      <Settings />
    </SettingsPageStyled>
  );
};

export default SettingsPage;
