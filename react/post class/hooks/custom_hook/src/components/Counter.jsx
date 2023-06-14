import React from 'react'

const Counter = () => {

    const [count, setCount] = React.useState(0)

    const increment =()=>{
        setCount(count=>count+1)
    }
    const decrement =()=>{
        {
           count>0 && setCount(count=>count-1)
        }    
    }

  return (
    <div className='d-flex'>
        <button  className="btn btn-dark me-2" onClick={increment} >Artır</button>
        <div className='fs-5'>{count}</div>
        <button className='btn btn-danger ms-2' onClick={decrement}>Azalt</button>
    </div>
  )
}

export default Counter