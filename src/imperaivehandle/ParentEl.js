import React,{useRef} from 'react'; 
import ChildComponent from "./ChildEl";

const ParentComponent=()=>{

    const childRef=useRef(null)

    return(
        <div>
            <h1
                onClick={
                    ()=>{childRef.current.handleChange()}
                }
            >this is parent component</h1>
            <ChildComponent ref={childRef} />

        </div>
    )
}

export default ParentComponent;