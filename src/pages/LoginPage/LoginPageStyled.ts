import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .secondary-title {
    display: flex;
    width: 60%;
    text-align: left;
    flex-direction: column;

    &-container {
      width: 100%;
    }
    &--blue {
      color: #3070ad;
    }
  }
  .third-title {
    width: 100%;
    text-align: left;
    font-size: 1.5rem;
  }
`;

export default LoginPageStyled;
