'use client'


const handleclick = () =>{
   alert("Button clicked")
}

function Button() {
  return (
    <div>
      <button onClick={handleclick}>Click me</button>
    </div>
  )
}

export default Button
