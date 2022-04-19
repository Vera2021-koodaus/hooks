import { useEffect,useMemo,useState } from "react";
import axios from "axios";

export default function MemoLearn(){
    const [data,setData]=useState(null);
    const [toggle, setToggle]=useState(false)
    useEffect(
        ()=>{
            axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then(response=>{setData(response.data)})
        },[]
    );

    const findLogestName=(comments)=>{
        if(!comments)return null;
        let longestName='';
        for(let i=0;i< comments.length;i++){
            let currentName=comments[i].name;
            if(currentName.length > longestName.length){
                longestName=currentName;
            }
        }
        console.log(`this is computed`)
        return longestName
    }

  
    const getLongestName=useMemo( ()=>findLogestName(data), [data])

return (
    <div>
        <h1>{getLongestName}</h1>
        <button
        onClick={
            ()=>{setToggle(!toggle)}
        }
        >Toggle</button>
        {toggle && <p>This is the hidden paragraph.</p>}
     
    </div>
    )
}