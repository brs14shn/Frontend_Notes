import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'


function App() {
  return (
    <>
      <div className='d-flex align-items-center flex-column'>
        <h1 className=' bg-info w-25'>Custom Hook</h1>

        <div className='d-flex justify-content-center align-content-center  mt-5'>
          <Counter/>
         
          
        </div>
       
      </div>
      
    </>
  )
}

export default App
