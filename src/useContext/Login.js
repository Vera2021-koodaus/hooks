import React,{useContext} from "react";
import {AppContext} from './useContext';


const Login =()=>{
    const {setUsername}=useContext(AppContext)
     return(
         <>
             <input placeholder="input"
                onChange={ (e)=>{setUsername(e.target.value)}  }
             />
         </>
     )
}

export default Login;