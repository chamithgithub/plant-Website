import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>GreenLeaf</h3>
            <p>Bringing nature&apos;s beauty into your home with quality plants and expert care advice.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <Link href="#">Home</Link>
            <Link href="#">Shop</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Contact</Link>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123 Plant Street, Nature City</p>
            <p><i className="fas fa-phone"></i> (123) 456-7890</p>
            <p><i className="fas fa-envelope"></i> info@greenleaf.com</p>
            <div className="social-icons">
              <Link href="#"><i className="fab fa-facebook"></i></Link>
              <Link href="#"><i className="fab fa-instagram"></i></Link>
              <Link href="#"><i className="fab fa-pinterest"></i></Link>
              <Link href="#"><i className="fab fa-twitter"></i></Link>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 GreenLeaf Plant Shop. All rights reserved.</p>
        </div>
        </footer>
        <style jsx>{`

// empty
         `}</style>




         <style jsx global>{`
                       footer {
          background-color: #1a2912;
          color: white;
          padding: 3rem 2rem;
          text-align: center;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        
        .footer-section h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #86efac;
        }
        
        .footer-section p, .footer-section a {
          color: #cbd5e1;
          margin-bottom: 0.5rem;
          display: block;
          text-decoration: none;
        }
        
        .footer-section a:hover {
          color: #86efac;
        }
        
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-icons a {
          font-size: 1.5rem;
        }
        
        .copyright {
          margin-top: 3rem;
          padding-top: 1rem;
          border-top: 1px solid #334155;
          text-align: center;
        }
`}</style>
    </div>
  )
}

export default Footer
