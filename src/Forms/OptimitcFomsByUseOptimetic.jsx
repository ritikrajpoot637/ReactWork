import React, { useActionState, useOptimistic } from 'react'

import AddTask from './actions/AddTask';
import { useFormStatus } from 'react-dom'

const OptimitcFomsByUseOptimetic = () => {
    const[task,action]=useActionState(AddTask,[]);
    const[optim,addOptim]=useOptimistic(task,(curr,newtak)=>{
       return  [...curr,{text:newtak,opt:true}]
    })
  return (
   <>
    <hr/>
    <div>OptimtcFomsByUseOptimetic</div>
    <form action={async(formData)=>{
       const task1=formData.get("text");
      
       addOptim(task1);
       await action(formData);
    }}>
        <label htmlFor='id1'>task</label>
        <input type='text' id='id1' name='text'/>
        <SubmitButton/>

        
    </form>
     <ul>
        {optim.map((val,index)=>{
          return <li key={index} style={{opacity:val.opt?0.3:0.7}}>{val.text}</li>
    })}
     </ul>

   

   </>

  )
}

export default OptimitcFomsByUseOptimetic




export const SubmitButton= () => {
    const{pending}=useFormStatus();

  return (
    <button disabled={pending}>{pending?"Loading":"SaveName"}</button>
   
  )
}
