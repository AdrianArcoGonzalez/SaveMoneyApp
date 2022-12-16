import styled from "styled-components";

const MainPageStyled = styled.div`
  width: 100%;
  min-height: 725px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  .main-title {
    font-size: 1rem;
    align-self: flex-start;
  }
`;

export default MainPageStyled;
