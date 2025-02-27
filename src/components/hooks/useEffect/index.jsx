import React, { useEffect, useState } from 'react'
import './index.css'
const EffecHook = () => {
  const [date,setDate] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
        const updatedDate = new Date();
        setDate(updatedDate.toLocaleTimeString())
    },1000  )
  },[])

  return (
    <div className="container effect-container">
      <h1> Date : {date} </h1>
    </div>
  )
}

export default EffecHook