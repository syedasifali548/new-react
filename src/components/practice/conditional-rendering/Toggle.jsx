import React, { useState } from 'react'

const Toggle = () => {
   const [isDarkMode,setIsDarkMode] = useState(false);

   const toggleMode=()=>{
    setIsDarkMode(!isDarkMode)
   }
  return (
    <div
    style={{
      backgroundColor : isDarkMode ? '#333' : '#f4f4f4',
      color: isDarkMode ? "#fff" : "#000",
      padding:"20px",
      textAlign:"center"
    }}
    >
     <h2>{isDarkMode ? "Dark Mode is on" : "Light Mode is on"}</h2>
     <button
     onClick={toggleMode}
     >Switch to {isDarkMode ? "Light" : "Dark"} Mode</button>
    </div>
  )
}

export default Toggle