import React, { useState } from 'react'

const Crud = () => {
    const [item,setItem] = useState([]);
    const [input,setInput] = useState("");
    const [editIndex,setEditIndex] = useState(null);
    
    const handldeAddOrUpdate=()=>{
        if(input.trim() === "") return;

        if(editIndex === null){
            // Create
            setItem([...item,input])
        }
        else{
         // Update
         const updateItems = [...item];
         updateItems[editIndex] = input;
         setItem(updateItems);
         setEditIndex(null)

        }
        setInput("")
    }
    const handleEdit=(index)=>{
        setInput(item[index]);
        setEditIndex(index)
    }

    const handleDelete=(index)=>{
       const filterdItem = item.filter((_,i)=> i !== index);
       setItem(filterdItem);
       if(editIndex === index){
        setEditIndex(null);
        setInput("")
       }
    }


  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>React CRUD</h2>
      <input type="text" 
      placeholder='Enter Item'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />
      <button onClick={handldeAddOrUpdate}>
      {editIndex === null ? "Add" : "Update"}
      </button>
      <ul>
      {item.map((item,index)=>(
         <li key={index} style={{ marginTop: "8px" }}>
          {item}
            <button onClick={()=>handleEdit(index)} style={{ marginLeft: "10px" }}>
              Edit
             </button>
            <button style={{ marginLeft: "5px" }}
            onClick={()=>handleDelete(index)}
            >
              Delete
            </button>
          </li>
      ))}
     
      </ul>
    </div>
  )
}

export default Crud