import React from 'react'
import Link from 'next/link'

function page({params}) {
  return (
    <div>
      <h2>tools item {params.id} </h2>

      <br />
      <h3><Link href="/products/tools">Back to tools</Link>  </h3>
    </div>
  )
}

export default page
