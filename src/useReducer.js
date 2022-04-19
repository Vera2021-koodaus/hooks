import React,{useState,useReducer} from "react";
import './App.css';


const reducer=function(state,action){
    switch (action.type) {
        case 'INCREMENT':       
            return {counter:state.counter+1, showText:state.showText};
        case 'toggleShowText':
            return {counter:state.counter,showText:!state.showText};
        default:
            return state;
    }

}
const ReducerUse=()=>{
    
    const [state,dispatch]=useReducer(reducer, {counter:0,showText:true})
    const [message,setMessage]=useState('')

    return(
        <div>
            {state.counter}<button 
            onClick={
                ()=>{
                    dispatch({type: "INCREMENT"});
                    dispatch({type:"toggleShowText"})
                }}>+1</button>
            <input onChange={ (e)=>{setMessage(e.target.value)} }/>
            <span>{message}</span>
            {state.showText && <p>this is a line of text.</p>}
        </div>
    )
    
}

export default ReducerUse;