import { useRef } from "react";

export const UseRefs=()=>{
    
    const username = useRef(null)
    const password = useRef(null)

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username.current.value);
        console.log(password.current.value);
        
    }
    return(
        <form onSubmit={handleSubmit}
         style={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center",width:"100%",gap:"20px",marginTop:"20px"}}>
        <input type="text" id="username" ref={username} />
        <input type="text" id="password" ref={password}/>
        <button type="submit">Submit</button>
        </form>
    )
}