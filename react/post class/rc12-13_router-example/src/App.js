import Footer from './components/Footer';
import Navbar from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Instructors from './pages/Instructors';
import NotFound from './pages/NotFound';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import InstructorsDetails from './pages/InstructorsDetails';
import Paths from './pages/Paths';

function App() {
  return (
    <>
    <BrowserRouter>

    <Navbar />
    <Routes>
      <Route path ="/" element={ <Home />} />
      <Route path ="/instructors" element={  <Instructors />} />
      <Route path ="/instructors/:id" element={<InstructorsDetails/>} />
      <Route path ="/contact" element={ <Contact />} />
      <Route path='/paths' element={<Paths/>} />




      
      {/* <Route path ="/contact" element={ <Navigate to="/">} /> */}
      <Route path ="*" element={ <NotFound />} />
    </Routes>
     

      <Footer />
    </BrowserRouter>
     
    </>
  );
}

export default App;
