
import { useActionState } from 'react'
import { useFormState } from 'react-dom'
import { SaveName } from './actions/SaveName'

const NestedForm = () => {
       const[state,action]=useActionState(SaveName,{msg:""})
  return (
    <>
    <hr/>
    <div>NestedForm and  Not fomm tag can be nested</div>

    <form action={action}>
        <ProfileField/>
        <Footer/>
        <SubmitButton/>

         
    </form>

    </>
  )
}

export default NestedForm
import React from 'react'

export const ProfileField = () => {
  return(
    <>

        <label htmlFor='id1'>Name</label>
        <input type="text" id ="id1" name='name' />
    
        <label htmlFor='id4'>Class</label>
        <input type="text" id ="id4" name='name' />


    </>
  )
}


export const Footer = () => {
  return(
    <>
   
        <label htmlFor='id2'>Mobileno</label>
        <input type="text" id ="id2" name='name' />
    
        <label htmlFor='id3'>Address</label>
        <input type="text" id ="id3" name='name' />

   
    </>
  )
}

export const SubmitButton= () => {
    const{pending}=useFormState();

  return (
    <button disabled={pending}>{pending?"Loading":"SaveName"}</button>
   
  )
}

