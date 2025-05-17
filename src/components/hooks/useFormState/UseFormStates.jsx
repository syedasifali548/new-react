// import {useFormState,useForm } from "react-dom";
import { useState } from 'react';
import './index.css'
const UseFormStates = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submt">Submit</button>
    </form>
    </>
  );
};

export default UseFormStates;
