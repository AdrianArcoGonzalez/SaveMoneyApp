import styled from "styled-components";

export const IncomesFormikFormStyled = styled.div`
  display: flex;
  justify-content: center;

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;

    &__title {
      width: 100%;
    }

    &__intro-text {
      width: 100%;
      font-size: 0.875rem;
    }

    &__input {
      font-size: 0.875rem;
    }

    &__radio-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }
  }

  .radio-group {
    &__label {
      width: 100%;
      font-size: 0.875rem;
      padding: 0;
    }

    &__radio-buttons {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`;
