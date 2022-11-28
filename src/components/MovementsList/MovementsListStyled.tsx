import styled from "styled-components";

const MovementsListStyled = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 20px;

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
      display: flex;
      flex-direction: column;
      align-items: flex-start;

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
  }

  .movement-quantity--expense {
    color: #f7487a;
  }

  .movement__icon {
    align-self: center;
  }
`;

export default MovementsListStyled;
