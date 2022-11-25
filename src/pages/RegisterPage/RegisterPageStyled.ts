import styled from "styled-components";

const RegisterPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .secondary-title-container {
    display: flex;
    width: 60%;
    text-align: left;
    flex-direction: column;

    &__text {
      width: 100%;
    }
    &__text--blue {
      color: #3070ad;
    }
  }
`;

export default RegisterPageStyled;
