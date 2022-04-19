import React,{useRef} from "react"; 
import Button from './ButtonChild'

// 父组件事件操作子组件内的状态
const ButtonPare=(props)=>{
    const btnRef=useRef(null)
    return(<>
        <button 
        onClick={
            ()=>{btnRef.current.alterToggle()}
        }
        >
            Button From Parent
        </button>
        <Button ref={btnRef}/>
    </>)
}


export default ButtonPare;
