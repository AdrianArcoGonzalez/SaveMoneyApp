import styled from "styled-components";

const LoginStyled = styled.div`
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

    &-input {
      font-family: inherit;
      text-align: center;
      padding: 5px;
    }
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

export default LoginStyled;
