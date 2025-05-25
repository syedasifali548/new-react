import React, { useEffect, useState } from 'react'

const UseStates = () => { 
    const[isVisible,setIsvisible] = useState(false)
    const handleTogle=()=>{
        setIsvisible(!isVisible);
    }

  return (
    <div>
    <button onClick={handleTogle}>
    {isVisible ? "Hide Message" : "Show Message"}
    </button>
        {isVisible &&  <p>This is a Toggle message!</p>}
    </div>
  )}
export default UseStates