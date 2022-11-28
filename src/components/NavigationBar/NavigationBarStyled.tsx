import styled from "styled-components";

export const NavigationBarStyled = styled.div`
  padding: 10px 0;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 10px;

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
    font-size: 24px;
  }

  .link-text {
    font-size: 10px;
    font-weight: bold;
  }

  .active {
    color: #3070ad;
  }
`;
