import React, { useState } from 'react'

const State = () => {
  const [users,setUsers] = useState([
    {name:'Alice',age:25},
    {name:'Bob',age:28},
    {name:'Charlie',age:30},
    {name:'Angles',age:35},
  ])    
  const userCount = users.length;
  const avg = users.reduce((acum,curElem)=>acum+curElem.age,0)/userCount;
  console.log(avg);
  
  return (
    <>
    <div className="main_div">
    <h1>List of Users</h1>
    <ul>
       {users.map((user,index)=>(
        <li key={index}>
        {user.name} .... {user.age}
        </li>
       ))}
       <li>{userCount}</li>
       <li>{avg}</li>
    </ul>
    </div>
    </>
  )
}

export default State