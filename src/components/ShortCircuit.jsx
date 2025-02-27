import React, { useState } from 'react'
import './ShortCircuit.css'
const ShortCircuit = () => {
    const[login,setLogin] = useState(true);
    const[user,setUser] = useState("");


  return (
    <>
    <div className="shortCircuit_container">
    {user ? `Hey ! ${user}` : "Please Login"}
    {login &&  <p>You are Logged in!</p>}
    <div className="btns_group">
    <button onClick={()=>setLogin(!login)}>Login State</button>
    <button onClick={()=>setUser("Syed Asif Ali")}>Set User</button>
    <button onClick={()=>setUser("")}>Clear User</button>
    </div>
    </div>
    </>
  )
}

export default ShortCircuit