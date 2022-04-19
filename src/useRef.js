import React from "react"; 
import { useRef } from "react";

function Reftutorial(){
    
    const inputRef=useRef(null);

    const handleClick=()=>{
        inputRef.current.value=''
        inputRef.current.focus()
    }

    return(
        <div>
            <h1>useRef</h1>
            <input type="text" placeholder="Ex..." ref={inputRef}/>
            <button
            onClick={handleClick}
            >Change Name</button>
        </div>
    )
}

export default Reftutorial;
