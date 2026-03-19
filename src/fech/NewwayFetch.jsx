import React, { use } from 'react'


const  fetching= fetch("https://jsonplaceholder.typicode.com/comments").then(res=>res.json());
const NewwayFetch = () => {
   
    const data=use(fetching);

  return (
   <>
       <div>NewwayFetch using use hook</div>
       {data.slice(0,9).map((val)=>{
        return(
            <div className='card p-2 border m-2 '>
            <p> name:{val.name}</p>
             <p> body:{val.body}</p> 
       </div>
        )
            
       })}
       

   </>
  )
}

export default NewwayFetch