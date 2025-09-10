'use client'
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import img1 from "../../public/cde.jpeg"
import Button from "./(components)/Button";
import { useState } from "react";


export default function Home() {

  const [text, settext] = useState("");

  const handlechange = (e) => {
    settext(e.target.value)
  }


  const handlesubmit = (p1) => {
    alert(p1)

  }

  return (
    <div>
      <h1>hello world      </h1>

      <Button />

      <input type="text" onChange={handlechange} />

      <button onClick={() => handlesubmit("dilshan")}>Submit</button>

      <p>value is : {text}</p>

      {text === "dilshan" && 
      <div className="container">
        <h2>members</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
           in vitae praesentium nulla asperiores repudiandae iste quae 
           officiis dicta! Minima atque est magni.</p>

      </div>
      }


      <h3>cover Image </h3>



      {/* <Image src="."></Image> */}
      <Image src={img1} alt="asdas" style={{ width: "100%", objectFit: "cover" }} />
      <div style={{ position: "relative", width: "100%", height: "500px" }}>
        <Image
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Mountain range"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <ul>
        <li><a href="/home" className={styles.link}>home</a></li>
        <li><a href="/about" id={styles.special}>about</a></li>
        <li><a href="/contact" className={styles.link}>contact</a></li>
        <li><a href="/products">product</a></li>

      </ul>
      <br />

      <ul>
        <li><Link href="/">home</Link></li>
        <li><Link href="/products">products</Link></li>
        <li><Link href="/products/tools/21">tools</Link></li>
        <li><Link href="/contact">contact</Link></li>
        <li><Link href="https://nextjs.org/" target="_blank">nextjs</Link></li>

        <li><Link href="/plants">plants</Link></li>
        <li><Link href="/contact">plants</Link></li>

      </ul>



    </div>
  )
}
