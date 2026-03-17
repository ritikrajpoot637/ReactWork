import React, { useState } from 'react'

function UseState() {
    const[count,setCount]=useState(0);
     const plus=()=>{
       setCount(count+1)
    }
      const minus=()=>{
       //setCount(count-1)

       //used prev state so that its  not failed in async code 
       setCount(prev=>prev-1);
    }
    const[text,setText]=useState("");
    const textChange=(e)=>{
        setText(e.target.value);
        
    }
      return (
   <>
    <hr/>
     <div>UseState</div>
     <div>
        <h1>Counter</h1>
         <button className='bg-blue-500 text-white p-2 m-2 rounded' onClick={plus}>+</button>
     {count}
     <button className='bg-blue-500 text-white p-2 m-2 rounded' onClick={minus}>-</button>
     </div>
     <div>
      <h1>Manging Input Text State</h1>
      <input  name="text" onChange={textChange} placeholder='giveInput'/>
      <h1>{text}</h1>

    

     </div>
    

      
     
   </>
   
  )
}

export default UseState