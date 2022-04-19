import React, { useEffect }  from "react"; 

 const  Child=({returnComment})=>{
    useEffect(
        ()=>{console.log("Child function was called")},[returnComment]
    )

    return(
        <div>
            {returnComment()}
        </div>
    )

}

export default Child;

