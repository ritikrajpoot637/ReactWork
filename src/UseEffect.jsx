import React, { useState } from 'react'
import { useEffect } from 'react'
function UseEffect() {
    const [count,setCount]=useState(0);
     useEffect(()=>{
    console.log("i called at render")
    setCount(count=>count+1);
    setCount(count=>count+1);
    //4 is understand why is strict mode
    
   
    }, [])

    useEffect(()=>{
        function handleWindo(){
          console.log(`window width is:${window.innerWidth}`)
        }
        window.addEventListener("resize",handleWindo);
        return ()=> window.removeEventListener("resize",handleWindo);

    },[])
    
    const plus=()=>{
        setCount(prev=>prev+1);
    }

  return (

    <>
    <hr/>
    <div>UseEffect</div>
    <button  className="btn btn-primary"onClick={plus}>+</button>
    {count}

     
    
    </>
  )
}

export default UseEffect