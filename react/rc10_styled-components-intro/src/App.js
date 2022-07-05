import Button, { TomatoButton } from './components/Button.styled';
import Container from "./components/Container.styled";
import HeaderText from './components/Header.styled';

const App = () => {
  return (
    <>
      <Container bg="green">
       <HeaderText color='white' >STYLED COMPONENTS</HeaderText>
      <Button primary>Click</Button>
      <Button>Click</Button>
      <TomatoButton primary>Click</TomatoButton>
      <TomatoButton >Click</TomatoButton>
      </Container>
      
    </>
  );
};

export default App;
