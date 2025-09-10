import React from 'react'
import Link from 'next/link'

function page({params}) {
  return (
    <div>
      <h1>Product {params.id} </h1>

      <Link href="products/plants">plants</Link>
      <br />
      <Link href="products/tools">tools</Link>
      <br />
      <h3>

      <Link href="/">back to home</Link>
      </h3>
    </div>
  )
}

export default page
