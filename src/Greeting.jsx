import React from 'react'
import style from './StyleComp.module.css'  
function Greeting({name}) {
  return (
    <>
    <h1 className={style.h1}>Greeting</h1>
    <h1>hellkow {name}</h1>
   

    </>
  )
}

export default Greeting