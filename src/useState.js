import React from "react"; 
import { useState } from "react"; 



const StateUseFunc=()=>{

 const [counter,setCounter]=useState(100);
 const [message, setMessage]=useState('');
 const [showText,setShowText]=useState(true)

  const onChange=(e)=>{
    setMessage(e.target.value)
  }
    return(
       <div>
         <h1>
            {counter} <button 
                onClick={()=>{
                setCounter(counter+1);
                setShowText(!showText)       
                }}>+1</button>
         </h1>   
         <div>
             <input placeholder="enter in texts"
             onChange={onChange}
             />
          <span>{message}</span>
          {showText && <p>this is a line of text.</p>}
         </div>
       </div>
    )
}

export default StateUseFunc;