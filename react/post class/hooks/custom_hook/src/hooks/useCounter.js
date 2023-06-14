import React from 'react'

const useCounter = () => {
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
    <div>useCounter</div>
  )
}

export default useCounter