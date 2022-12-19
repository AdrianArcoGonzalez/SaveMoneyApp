import styled from "styled-components";

const SettingsPageStyled = styled.div`
  width: 100%;
  min-height: 725px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  .settings {
    &__title {
      font-size: 1.5rem;
      display: flex;
      gap: 15px;
      align-self: flex-start;
    }
  }
`;

export default SettingsPageStyled;
