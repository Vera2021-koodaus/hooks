import React,{forwardRef,useImperativeHandle,useState} from "react";

const Button=forwardRef(
    (props,ref)=>{
        useImperativeHandle(
            ref,()=>({
                alterToggle(){ setToggle(!toggle) }
            })
        )
        const [toggle,setToggle]=useState(false)
    
        return(
            <>
                <button>Button from Child</button>
                {toggle && <p>Toggle</p>}
            </>
        )
    }
)





export default Button