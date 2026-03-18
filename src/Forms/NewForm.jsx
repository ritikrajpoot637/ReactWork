"use client"
import { useActionState} from 'react'
import {useFormStatus} from 'react-dom'
import { SaveName } from './actions/SaveName'



const NewForm = () => {
    const[state,action]=useActionState(SaveName,{msg:""})

  return (
    <>
    <hr/>
    <div>NewForm</div>
    <form action={action}>
        <label htmlFor='2'>Name</label>
      <input id="2" name='name'/>
      <SubmitButton/>

      
    </form>

    </>
  )
}

export default NewForm

import React from 'react'

export const SubmitButton= () => {
    const{pending}=useFormStatus();

  return (
    <button disabled={pending}>{pending?"Loading":"SaveName"}</button>
   
  )
}
