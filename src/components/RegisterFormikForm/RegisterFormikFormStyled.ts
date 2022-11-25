import styled from "styled-components";

const RegisterFormikFormStyled = styled.div`
  display: flex;
  justify-content: center;

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    &__title {
      width: 100%;
      text-align: start;
    }

    &__input {
      font-size: 0.875rem;
    }

    &__login-text {
      font-weight: bolder;
      padding: 5px;
    }

    &__login-link {
      text-decoration: none;
      color: #3070ad;
      font-weight: bolder;
    }
  }
`;

export default RegisterFormikFormStyled;
