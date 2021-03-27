import { HeaderWrapper } from "./StyledComonents";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <div className="container">
        <div className="logo_section">
          <img src="./logo192.png" alt="logo" />
          <h1 className="title"> Hacker Labs</h1>
        </div>
        <nav>
          <a href="#hero">Home</a>
          <a href="#developer">Developer</a>
          <a href="#techstach">Tech Stack</a>

          <a href="#contactus">Contact Us</a>
        </nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
