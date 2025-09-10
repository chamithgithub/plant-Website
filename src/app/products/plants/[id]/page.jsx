import React from 'react'

function page({params}) {
  return (
    <div>
      <h2>plants {params.id} </h2>
    </div>
  )
}

export default page
