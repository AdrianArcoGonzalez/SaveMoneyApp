import styled from "styled-components";

const NavigationBarStyled = styled.div`
  position: sticky;
  bottom: 0px;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: center;
  background-color: white;
  border-top: 1px solid black;

  .link-icon {
    font-size: 30px;
  }

  .link-text {
    font-size: 10px;
    font-weight: bold;
  }

  .active {
    transition: 1s;
    color: #3070ad;
  }
`;

export default NavigationBarStyled;
