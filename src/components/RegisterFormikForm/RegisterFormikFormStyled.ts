import styled from "styled-components";

const RegisterFormikFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .form-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .text-login {
    font-weight: bolder;
    padding: 5px;
  }
  .link-login {
    text-decoration: none;
    color: #3070ad;
    font-weight: bolder;
  }
`;

export default RegisterFormikFormStyled;
