import styled from "styled-components";

const ButtonStyled = styled.button`
  font-family: "Roboto";
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background-color: #191919;
  color: #3070ad;
  border: 0;
  font-weight: bolder;
  font-size: 0.8rem;
  margin-top: 10px;

  :disabled {
    background-color: #3070ad;
    color: #191919;
    pointer-events: none;
  }
`;

export default ButtonStyled;
