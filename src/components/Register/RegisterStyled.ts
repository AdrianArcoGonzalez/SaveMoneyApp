import styled from "styled-components";

const RegisterStyled = styled.div`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-label {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      padding: 5px;
    }

    &-input {
      font-family: inherit;
      text-align: center;
      padding: 5px;
    }
  }

  .link-register {
    text-decoration: none;
    color: #3070ad;
    font-weight: bolder;
  }

  .text-login {
    font-weight: bolder;
    padding: 5px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .errors {
    text-align: center;
    color: #ff3131;
    font-weight: bold;
    font-size: 0.7rem;
  }
`;

export default RegisterStyled;
