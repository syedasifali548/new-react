import React from 'react'

export const PropsDrilling = () => {
  return (
    <section style={{textAlign:"center"}}>
    <h1>Parent Component</h1>
    <ChildComponent data="Hey React js"/>
    </section>
  )
}
const ChildComponent=(props)=>{
    return(
        <>
        <h1>Child Component</h1>
        <GrandChildComponent data={props.data}/>
        </>
    )
}
const GrandChildComponent=(props)=>{
return(
        <>
         
        <h1> GrandChild Component</h1>
        <GrandGrandChildComponent data={props.data}/>
        </>
    )
}
const GrandGrandChildComponent=(props)=>{
return(
        <>
         <h1> Grand Grand Child Component {props.data}</h1>
        </>
    )
}