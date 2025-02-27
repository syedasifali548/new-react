import React, { useState } from 'react'
import './index.css'
const Loginform = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        const loginData={
            username,password
        }
        console.log(loginData);
    }
    

  return (
    <div className="container">
    <div className="card">
      <h1 style={{color:"black"}}>Login Form</h1>
      <form 
      onSubmit={handleSubmit}
      style={{flexDirection:"column"}}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          required
          autoComplete="off"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}

        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          required
          autoComplete="off"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  </div>
  )
}

export default Loginform