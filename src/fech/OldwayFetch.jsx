import React, { useState } from 'react'
import { useEffect } from 'react';

const OldwayFetch = () => {
    const [state,setState]=useState([]);
    const [data,setData]=useState([]);
    useEffect(()=>{
    async function Fetching(){
     const res=await fetch("https://jsonplaceholder.typicode.com/todos");
     const data=await res.json();
     setState(data);
    
    }
    Fetching();
    },[])
   
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data1=>{console.log(data1.slice(0,8)),setData(data1)})
    },[])
     if(state.length==0){return <h1>Loading...</h1>}

  return (
   <>
   <hr/>
   <div>OldWay of fetch of useEffect using async and await </div>
   {
    state.slice(0,10).map((val)=>{
      return(
        <>

         <div key={val.id} className='card p-2 border-2'>
            <h1>id:{val.id}</h1>
       <h1>work:{val.completed?"Completed":"Non-completed"}</h1>
         </div>
        </>
      )
    })
   }
    <hr/>
   <div>OldWay of fetch of useEffect using promise</div>

   {data.map((val)=>{
    return (
        <>
        <div className='card p-2'>
            <h2>{val.name}</h2>
            <h2>{val.email}</h2>
            <h2>{val.website}</h2>
        </div>
        </>

    )
   })}
   
    
   </>
  )
}

export default OldwayFetch