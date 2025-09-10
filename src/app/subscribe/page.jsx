import React from 'react'
import styles from './page.module.css';

function page() {

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thanks for subscribing to our newsletter!');
    e.target.reset();
  };


  return (
    <div>

<section className={styles.newsletter}>
      <div className={styles.newsletterContent}>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get updates on new plants, care tips, and exclusive offers</p>
        <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>

    </div>
  )
}

export default page
