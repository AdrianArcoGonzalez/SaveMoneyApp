import styled from "styled-components";

const RegisterPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .secondary-title {
    display: flex;
    width: 60%;
    text-align: left;
    flex-direction: column;
    padding: 10px;

    &-container {
      width: 100%;
    }
    &--blue {
      color: #3070ad;
    }
  }
  .third-title {
    width: 100%;
    padding: 10px;
    text-align: left;
    font-size: 1.5rem;
  }
`;

export default RegisterPageStyled;
