import React from 'react'
import Link from 'next/link';
function Hero() {
   return (
      <div>
         <section className="hero">
            <div className="hero-content">
               <h1>Bring Nature Into Your Home</h1>
               <p>Discover our wide variety of beautiful indoor plants that purify your air and enhance your space</p>
               <Link href="/products/plants" className="btn">Shop Now</Link>
            </div>
         </section>
         <style jsx>{`


      `}
         </style>
         <style jsx global>{`
                 .hero {
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80');
          background-size: cover;
          background-position: center;
          color: white;
          text-align: center;
          padding: 6rem 2rem;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .hero p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

      `}</style>


      </div>
   )
}

export default Hero
