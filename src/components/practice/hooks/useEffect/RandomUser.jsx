import React, { useEffect, useState } from 'react'

const RandomUser = () => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    fetch("https://randomuser.me/api/")
    .then((res)=>res.json())
    .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
    })
    
},[])
  if (loading) return <p>Loading user...</p>;
  return (
    <div style={{ border: '2px solid #333', padding: '20px', maxWidth: '300px' }}>
      <h3>{user.name.first} {user.name.first}</h3>
      <img src={user.picture.large} alt="User" />
      <p>Email:{user.email} </p>
      <p>Country: {user.location.country}</p>
    </div>
  )
}

export default RandomUser