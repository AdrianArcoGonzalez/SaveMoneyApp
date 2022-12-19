import styled from "styled-components";

const SettingsStyled = styled.div`
  background-color: #f6f6f6;
  min-width: 100%;
  min-height: 600px;

  .account-container {
    padding: 10px 20px;
    border-bottom: 2px solid #d5d5d5;
    width: 100%;
    display: flex;
    justify-content: space-between;

    &__title {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #3070ad;
    }
    &__icon-button {
      border: none;
      color: #3070ad;
      background-color: transparent;
      font-weight: bold;
    }
  }

  .theme-container {
    padding: 10px 20px;
    border-bottom: 2px solid #d5d5d5;
    width: 100%;
    display: flex;
    justify-content: space-between;

    &__title {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #3070ad;
    }

    &__icon-button {
      border: none;
      color: #3070ad;
      background-color: transparent;
      font-weight: bold;
    }
  }

  .theme-buttons {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &__button {
      padding: 10px;
      border-radius: 10%;
    }

    &__button:disabled {
      display: none;
    }
  }
`;

export default SettingsStyled;
