import styled from "styled-components";

const CardStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  .card-money-saved {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 400px;
    height: 250px;
    border-radius: 20px;
    background-color: #191919;
  }

  .card-title {
    padding: 10px;
    font-size: 0.8rem;
  }

  .card-main-info {
    font-size: 2.3rem;
  }

  .money-stats {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .money-stats-specific {
    display: flex;
    justify-content: center;

    gap: 10px;
    padding: 10px;
  }

  .money-income {
    display: flex;
    flex-direction: column;
  }
  .money-income-title {
    color: #17de4f;
    font-size: 0.8rem;
  }

  .money-income {
    color: #17de4f;
    font-size: 2rem;
  }

  .card-limit {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 250px;
    border-radius: 20px;
    background-color: #3070ad;
  }
`;

export default CardStyled;
