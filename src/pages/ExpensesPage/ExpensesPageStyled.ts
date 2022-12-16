import styled from "styled-components";

const ExpensesPageStyled = styled.div`
  width: 100%;
  min-height: 725px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

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

export default ExpensesPageStyled;
