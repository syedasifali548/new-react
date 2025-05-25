import React from 'react'

export const UsingProps = () => {
  return (
    <>
    <UserCard name="Alice" age={25}/>
    <UserCard name="Bob" age={35}/>
    </>
  )
}
function UserCard(props){
return(
    <div>
    <h2>Name:{props.name}</h2>
    <p>Age:{props.age}</p>
    </div>
 )
}
