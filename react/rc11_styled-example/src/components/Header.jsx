import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import StyledHeader, { Image, Logo, Nav } from "./styles/Header.styled";
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
        <div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <Button bg="#A62440">START YOUR NEW CAREEER</Button>

          <Image src="./images/hero.jpg"></Image>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
