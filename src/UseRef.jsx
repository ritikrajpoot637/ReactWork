import React from 'react';
import {useRef} from 'react' 

function UseRef() {
    const inpRef=useRef();
    const ref=useRef(1);

    const ClickmeFocus=()=>{
        inpRef.current.focus();
        ref++;
    }

  return (
    <>
    <hr/>
    <div>UseRef</div>
    <input ref={inpRef} placeholder='click button to focus'/>
    <button className='bg-blue-500 text-white p-2 m-2 rounded' onClick={ClickmeFocus} >Focus Input</button>
      {ref.current}
    </>
  )
}

export default UseRef