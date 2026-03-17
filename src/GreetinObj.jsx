import React from 'react'

export const GreetinObj = ({data}) => {
  return (
      <>
       <hr/>
       <h1 style={{color:'green'}}>GreetinObj Pass as on object and inline style</h1>
    <h1 className='bg-black'> hellow  {data.name}and bootstrap css(utilty)</h1>
      </>
  )
}
