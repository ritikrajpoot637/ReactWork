import React from 'react'
import { GreetinObj } from './GreetinObj'
import Greeting from './Greeting'

function ConditanalRendering({Isloged}) {
    return Isloged?<Greeting name="ritik kumar"/>:<Greeting name="rajpoot"/>
    return Isloged?<h1>teminary rendering</h1>:<h1>false terminary rendering</h1>
    return <>{Isloged&&<h1>hellow with && rendering</h1>}</>
    if(Isloged){return <h1>welcome User</h1>}
    else{return <h1>You are not login</h1>}
    
  return (
    <>
     <hr/>
    <div>ConditanalRendering</div>
    
    </>

  )
}

export default ConditanalRendering