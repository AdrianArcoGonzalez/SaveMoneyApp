import styled from "styled-components";

const CustomInputFieldStyled = styled.div`
  font-family: "Roboto";
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    border-bottom: 2px solid black;
  }

  .input-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  .errors {
    text-align: center;
    color: #ff3131;
    font-weight: bold;
    font-size: 0.7rem;
  }
`;

export default CustomInputFieldStyled;
