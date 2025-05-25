import React, { useState } from 'react';

function GreetingCard() {
 const [name,setName] = useState("");
 const [submittedValue,setSubmittedValue] = useState("");
 const [isGreetingValue,setIsGreetingValue] =  useState(false);
 const [error,setError] = useState("")

 const validateName=(value)=>{
   if(value.trim() === ""){
    return "Name is Required!"
   }
   if(value.trim().length < 3){
    return "Name must be atleast 3 characters."
   }
   return ""
 }
 const handleSubmit=(e)=>{
  e.preventDefault();
  const validateError = validateName(name);
  if(validateError){
    setError(validateError);
    setIsGreetingValue(false)
    return;
  }
  setError("")
  setSubmittedValue(name);
  setIsGreetingValue(true)
 }
 const handleReset=()=>{
  setName("");
  setSubmittedValue("")
  setIsGreetingValue(false);
  setError("")
 }

  return (
    <div style={{ border: '2px solid teal', padding: '20px', borderRadius: '10px', maxWidth: '400px' }}>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name: 
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>

       {error && (
         <div style={{ color: 'red', marginTop: '5px' }}>{error}</div>
       )}
      

        <br /><br />
        <button type="submit">Submit</button>
        <button 
        onClick={handleReset}
        type="button" style={{ marginLeft: '10px' }}>
          Reset
        </button>
      </form>

     {isGreetingValue && (
       <div style={{ marginTop: '20px' }}>
         <h3>Hello,{submittedValue}!</h3>
       </div>

     )}
    </div>
  );
}

export default GreetingCard;
