import React, { useMemo, useState } from 'react'

function UseMemo({product}) {
     const[query,setQuery]=useState("");

    const  change=(e)=>{
     setQuery(e.target.value);
    }

    
    const res=useMemo(()=>{
        return product.filter((p)=>{ return p.name.toLowerCase().includes(query.toLowerCase())})
    },[query,product])
    
    
  return (
    <>
     <hr/>
      <div>UseMemo</div>
      <input onChange={change} placeholder='serch...'/>
      <ul>
        {res.map((p)=>(<li key={p.id}>{p.name}</li>))}
      </ul>


      
    </>
  
  )
}


export default function App() {
  // Dummy Data (Products ki array)
  const [items] = useState([
    { id: 1, name: "Apple iPhone 15" },
    { id: 2, name: "Samsung Galaxy S24" },
    { id: 3, name: "Google Pixel 8" },
    { id: 4, name: "MacBook Air M3" },
    { id: 5, name: "Sony Headphones" }
  ]);

  return (
    <div>
      <h1>My Store</h1>
      {/* Products array ko yahan pass kiya gaya hai */}
      <UseMemo product={items} />
    </div>
  );
}
