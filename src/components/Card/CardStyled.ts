import styled from "styled-components";

const CardStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  width: 310px;
  height: 180px;
  margin-bottom: 20px;

  .card-money-saved {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 20px;
    background-color: #191919;
  }

  .card-title {
    padding: 5px;
    font-size: 0.8rem;
    margin-top: 5px;
  }

  .card-main-info {
    font-size: 2rem;
  }

  .money-stats {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }

  .money-stats-income {
    display: flex;
    justify-content: center;
    gap: 5px;
    padding: 5px;
  }

  .arrow-up {
    margin-top: 10px;
    color: #17de4f;
    font-size: 2rem;
  }

  .money-income {
    display: flex;
    flex-direction: column;
    color: #17de4f;
    font-size: 1rem;
    padding: 5px;
  }

  .money-income-title {
    color: #17de4f;
    font-size: 0.8rem;
  }

  .money-spend-title {
    color: #f7487a;
    font-size: 0.8rem;
  }

  .money-stats-spend {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 10px;
  }

  .money-spend {
    padding: 5px;
    display: flex;
    flex-direction: column;
    color: #f7487a;
    font-size: 1rem;
  }
  .arrow-down {
    margin-top: 10px;
    color: #f7487a;
    font-size: 2rem;
    transform: rotate(180deg);
  }

  .card-limit {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    gap: 20px;
    background-color: #3070ad;
  }

  .spend-limit {
    font-size: 0.8rem;
    color: black;
    opacity: 80%;
    text-align: right;
    margin-right: 15px;
    padding: 10px;
  }

  .spend-grafic {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default CardStyled;
