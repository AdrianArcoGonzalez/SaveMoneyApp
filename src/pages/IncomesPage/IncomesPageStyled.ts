import styled from "styled-components";

const IncomesPageStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main-title {
    width: 100%;
    font-size: 1rem;
    display: flex;
    align-self: flex-start;
    justify-content: space-between;
    align-items: center;

    &__button {
      margin: 0;
      font-size: 2rem;
      background-color: transparent;
      border: none;
      padding: 0;
    }

    &__button:hover {
      color: blue;
    }
  }
`;

export default IncomesPageStyled;
