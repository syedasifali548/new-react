import React, { useEffect, useState } from 'react'
import "./index.css";
const EffectChallenge = () => {
     const [count,setCount] = useState(0);
      const [name,setName] = useState("");
    
      useEffect(()=>{
        document.title = `count ${count}`;
      },[count])
      useEffect(()=>{
       console.log(name);
       
      },[name])
  return (
    
    <div className="container effect-container">
      <h1>useEffect Challenge</h1>
      <p>
        Count: <span> {count}</span>
      </p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <p>
        Name: <span>{name}</span>
      </p>
      <input
        type="text"
        onChange={(e)=>setName(e.target.value)}
      />
    </div>
  )
}

export default EffectChallenge