import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <img
        src="/images/logo.png"
        alt="logo from save money app"
        className="image-logo"
        height={36}
        width={36}
      />
      <h1 className="main-title">Save Money</h1>
    </HeaderStyled>
  );
};

export default Header;
