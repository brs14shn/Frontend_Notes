import Button, { TomatoButton } from './components/Button.styled';
import Container from "./components/Container.styled";

const App = () => {
  return (
    <>
      <Container bg="green">
      <Button primary>Click</Button>
      <Button>Click</Button>
      <TomatoButton primary>Click</TomatoButton>
      <TomatoButton >Click</TomatoButton>
      </Container>
      
    </>
  );
};

export default App;
