import styled from "styled-components";

export const IncomesExpensesFormikFormStyled = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;
  margin-bottom: 30px;

  .form-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .form-inputs-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 30px;
  }
  .form-input {
    width: 100%;
    display: flex;
  }

  .radio-container {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
  }

  .form-radio-group {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
    padding: 0;
    flex-wrap: wrap;
    gap: 15px;
    width: 100%;
  }

  .active {
    box-shadow: 5px 5px 10px #3070ad;
  }

  input[type="radio"] {
    appearance: none;
  }
`;
