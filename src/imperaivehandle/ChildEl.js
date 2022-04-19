import React,{useImperativeHandle,forwardRef,useState} from "react";

const ChildComponent=forwardRef(
    (props,Ref)=>{
        console.log(Ref)
        useImperativeHandle(Ref,
            ()=>({
                handleChange(){setMessage(!message)}
            }))

        const [message,setMessage]=useState(false)
        return(
            <div>
                {message && <p>hello world, you will became a good coder.</p>}  
            </div>
        )
    }

)

export default ChildComponent;