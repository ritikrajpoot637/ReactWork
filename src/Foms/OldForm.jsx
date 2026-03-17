import React from 'react'

const OldForm=  () => {

    const Submit=async(e)=>{
      e.preventDefault();
      const name=e.target.name.value;
      console.log(name);
    //   await fetch("url" ,{
    //     method:"post",
    //     body:JSON.stringify({name})
    //   }
    //   )
    }

  return (
    <>
    <div>oldForm</div>
    <form onSubmit={Submit}>
        <label htmlFor='1'>Name</label>
        <input id='1' name='name' placeholder='name'/>
        <button type='submit'>Submit</button>
    </form>

    </>
  )
}

export default OldForm