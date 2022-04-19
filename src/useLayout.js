import React from "react"; 
import { useLayoutEffect,useEffect,useRef } from "react"; 


// useLayoutEffect 是在页面加载之初就优先渲染的, 比useEffect钩子更快加载
function LayoutEffectTutorial(){
    const inputRef=useRef(null)
    useLayoutEffect(
        ()=>{
          console.log(inputRef.current.value='vERA')
        },[]);

    useEffect(
        ()=>{inputRef.current.value='hello world'},[]
    )


    return(
        <div>
            <h1>useLayoutEffect</h1>
            <input ref={inputRef}/>
        </div>
    )
}

export default LayoutEffectTutorial;