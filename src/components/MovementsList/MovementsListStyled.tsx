import styled from "styled-components";

const MovementsListStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    flex: 0.5;
  }

  .movements-list__title {
    font-size: 1rem;
  }

  .list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    list-style: none;
    padding: 0;

    &__movement {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 0px;
    }

    .movement-data {
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 4;

      &__name {
        font-weight: bold;
      }

      &__date {
        font-size: 0.7rem;
      }
    }
  }

  .movement-quantity {
    color: #18de4f;
    align-self: center;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    flex: 2;
  }

  .movement-quantity--expense {
    color: #f7487a;
  }

  .movement__icon {
    align-self: center;
    flex: 0.5;
  }
`;

export default MovementsListStyled;
