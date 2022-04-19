import React,{useEffect, useState} from "react";
import axios from "axios";
// useEffect 钩子，不设置第二个参数[]时候，
// 功能相当于componentDidAmount和componenDidupdate的结合，钩子监听所有状态变化驱动页面渲染
//  useEffect 钩子，设置了第二个参数[]时候，置空时候，相当于componentDidAmount，state变化
// 不驱动页面更新
// useEffect 钩子，设置了第二个参数[]时候，不置空时候，里面是哪一个state变量就监听哪一个状态变化。
function EffectTutorial(){
    const [data,setData]=useState("");
    const [count,setCount]=useState(0)

    useEffect(
        ()=>{
            axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(
                (response)=>{
                    setData(response.data[0].email);
                    console.log('API was called')
                }
            )
        },[]
    )
 
    return(
        <div>
         <p>{data}</p>
         <h1>{count}</h1>
         <button onClick={()=>{setCount(count+1)}}>Press+1</button>
         <button onClick={()=>{setCount(count-1)}}>Press-1</button>
         <button onClick={()=>{setCount(0)}}>Press Reset</button>
     
       </div>
    )


}

export default EffectTutorial;