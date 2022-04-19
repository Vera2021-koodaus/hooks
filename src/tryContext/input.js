import React,{useContext} from "react"; 
import {AppContext} from './App'

const Login=()=>{

    const {setUsername}=useContext(AppContext)

    return(
        <div>
            <input placeholder="enter in your name" 
            type='text'
            onChange={ (e)=>{setUsername(e.target.value)} }
            />
        </div>
    )
}

export default Login;