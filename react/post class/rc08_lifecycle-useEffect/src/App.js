import { useState } from 'react';
import LifeCycleMethods from './components/LifeCycleMethods';

function App() {

  const [show,setShow] =useState(false)
  console.log(show)

  return (
    <div className="container text-center mt-4">
      <button
      onClick={()=>setShow(!show)}
      className='btn btn-warning'>
       {show ? "Show" : "Hide"}
      </button>
      {/* {Conditional Rendering} */}
     {show &&  <LifeCycleMethods /> } 
     {/* {show ?  <LifeCycleMethods /> :null }  */}
     {/* {!show || <LifeCycleMethods /> } */}
    </div>
  );
}

export default App;
