import React, { useState,createContext } from "react"; 
import Login from './Login';
import User from './User';


export const AppContext=createContext(null)

const useContext=()=>{
    const[username,setUsername]=useState("");

    return(
        <AppContext.Provider value={{username, setUsername}}>
            <h1>useContext</h1>
            <Login/>
            <User/>
        </AppContext.Provider>
    )
}

export default useContext;