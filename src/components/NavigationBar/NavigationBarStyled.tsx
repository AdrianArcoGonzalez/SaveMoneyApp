import styled from "styled-components";

const NavigationBarStyled = styled.div`
  position: sticky;

  bottom: 0px;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: white;
  border-top: 1px solid black;

  .navigation-bar__link {
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }

  .link-icon {
    font-size: 30px;
  }

  .link-text {
    font-size: 10px;
    font-weight: bold;
  }

  .active {
    color: #3070ad;
  }
`;

export default NavigationBarStyled;
