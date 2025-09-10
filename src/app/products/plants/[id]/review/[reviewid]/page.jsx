import React from 'react'

function page({params}) {
  return (
    <div>
      <h1>plants {params.id} review {params.reviewid}</h1>
    </div>
  )
}

export default page
