import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/insructors" element={<Instructors/>}/>
      <Route path="/contanct" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
