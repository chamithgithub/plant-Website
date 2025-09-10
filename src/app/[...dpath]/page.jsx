import React from 'react'

function page({ params }) {
   console.log(params);

   return (
      <div>
         <h1>catch all routes</h1>
         <ul>
            {params.dpath.map((item) => {
               return (
                  <ul>
                     <li>{item}</li>
                  </ul>
               )
            })}
         </ul>
      </div>
   )
}

export default page
