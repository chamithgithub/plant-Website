import React from 'react'
import Link from 'next/link'

function page() {

  const tools =[
    {
      id:1,
      toolname:"hummer"
    },
    {
      id:2,
      toolname:"saw"
    },
    {
      id:3,
      toolname:"ladder"
    } ,    {
      id:4,
      toolname:"savel"
    } ,    {
      id:5,
      toolname:"hose"
    } ,

  ]



  return (
    <div>
      <h2>tools page</h2>

      <ul>
        {tools.map((tools)=>{
          return (
            <li><Link href={`/products/tools/${tools.toolname}`}>{tools.toolname}</Link></li>
          )
        })}
      </ul>
      <Link href="/">Go to Home</Link>
    </div>
  )
}

export default page
