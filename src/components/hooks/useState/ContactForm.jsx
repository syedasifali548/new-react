import React, { useState } from 'react'
import './index.css'
const ContactForm = () => {
  const [contacts,setContacts] = useState({
    username:"",email:"",message:""
  })
    
  const handleInputChange=(e)=>{
    const {name,value} = e.target;
    setContacts((prev)=>({...prev,[name]:value}));
    
  }
  const handleFormSubmit=(e)=>{
   e.preventDefault();
   console.log(contacts);
  }
  return (
    <div className="container">
    <div className="card">
      <h1 style={{color:"black"}}>Contact Form</h1>
      <form onSubmit={handleFormSubmit}
      style={{flexDirection:"column"}}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          required
          autoComplete="off"
          value={contacts.username}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          value={contacts.email}
          onChange={handleInputChange}
        />

        <label htmlFor="message">Message</label>
        <textarea
          type="password"
          name="message"
          required
          autoComplete="off"
          rows="6"
          value={contacts.message}
          onChange={handleInputChange}
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
  )
}

export default ContactForm