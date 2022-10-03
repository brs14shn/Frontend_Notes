import Events from "./components/1-Event-Intro/Events";
import Counter from "./components/2-classComponents/Counter";

function App() {
  return (
    <div>
        <Events/>
        <Counter count={10}/>
        <Counter/>
    </div>
    
  );
}

export default App;
