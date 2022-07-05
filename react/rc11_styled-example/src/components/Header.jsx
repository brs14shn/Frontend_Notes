import Button from "./styles/Button.styled";
import StyledHeader from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Button color="#A62440">APPLY COURCES</Button>
        <Button bg="#A62440">TALK TO ADVİSER</Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
