import styled from "styled-components";

const CustomInputFieldStyled = styled.div`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .input-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 5px;
  }
  .errors {
    text-align: center;
    color: #ff3131;
    font-weight: bold;
    font-size: 0.7rem;
  }
`;

export default CustomInputFieldStyled;
