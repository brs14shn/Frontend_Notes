import { useState } from 'react';
import LifeCycleMethods from './components/LifeCycleMethods';
import UseEffectHook from './components/UseEffectHook';

function App() {

  const [show,setShow] =useState(false)
  console.log(show)

  return (
    <div className="container text-center mt-4">
      <button
      onClick={()=>setShow(!show)}
      className='btn btn-warning'>
       {show ? "Hide" : "Show"}
      </button>
      {/* {Conditional Rendering} */}
     {/* {show &&  <LifeCycleMethods /> }  */}
     {/* {show ?  <LifeCycleMethods /> :null }  */}
     {/* {!show || <LifeCycleMethods /> } */}
     
{   show &&  <UseEffectHook/>}
    </div>
  );
}

export default App;
