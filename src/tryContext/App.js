import React,{createContext,useState} from "react"; 
import Login from "./input";
import User from './User';

export const AppContext=createContext(null)

const ContextApp=()=>{
    const [username,setUsername]= useState("");

    return(
        <AppContext.Provider value={{username,setUsername}}>
            <Login/>
            <User/>
        </AppContext.Provider>
    )
}

export default ContextApp;