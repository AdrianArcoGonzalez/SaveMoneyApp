import styled from "styled-components";

const LayoutStyled = styled.div`
  display: flex;
  max-width: 320px;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 320px) {
    margin-top: 150px;
    padding: 20px;
    border-radius: 10px;
    -webkit-box-shadow: -8px 10px 110px 25px rgba(0, 0, 0, 0.41);
    -moz-box-shadow: -8px 10px 110px 25px rgba(0, 0, 0, 0.41);
    box-shadow: -8px 10px 110px 25px rgba(0, 0, 0, 0.41);
  }
`;

export default LayoutStyled;
