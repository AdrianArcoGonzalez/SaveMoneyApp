import styled from "styled-components";

const LandingPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  max-width: 320px;

  .image-central {
    object-fit: cover;
  }

  .secondary-title {
    width: 60%;
    &container {
      width: 100%;
    }
    &--blue {
      color: #3070ad;
    }
  }
  .text-login {
    font-weight: bold;
  }
  .link-login {
    color: #3070ad;
    text-decoration: none;
    font-weight: bolder;
  }
`;

export default LandingPageStyled;
