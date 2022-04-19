// 既然useLayout加载优先，那么一挂载App 就加载内容 
import React,{useLayoutEffect, useState} from 'react'; 
import axios from 'axios';


const LayoutHook =()=>{
    const [data,setData]=useState('')

    useLayoutEffect( 
        ()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then( response=>{
                 setData(response.data[3].email)
                 console.log(response.data)
                }
            )
        }    
    )
    

    return(
        <div>
            {data}
        </div>
    )
}

export default LayoutHook;


