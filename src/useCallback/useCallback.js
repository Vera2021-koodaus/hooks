import axios from "axios"; 
import { useCallback,useState } from "react"; 
import Child from "./Child";
 
const useCallbackTutorial=()=>{
    const [data,setData]=useState("yo,pls sub to the channel!");
    const [toggle,setToggle]=useState(false);

    const returnComment=useCallback(()=>{return data} ,[data])

    return(
        <div>
            <Child returnComment={returnComment}/>
            <button
            onClick={
                ()=>{setToggle(!toggle)}
            }>
            Click
            </button>
            {toggle && <p>hello world</p>}
        </div>
    )


}


export default useCallbackTutorial;