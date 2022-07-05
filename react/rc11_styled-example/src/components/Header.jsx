import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import StyledHeader, { Logo, Nav } from "./styles/Header.styled";
// import img2 from "../images/logo_white.png";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.png"></Logo>
          <div>
            <Button color="#A62440">APPLY COURCES</Button>
            <Button bg="#A62440">TALK TO ADVİSER</Button>
          </div>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
