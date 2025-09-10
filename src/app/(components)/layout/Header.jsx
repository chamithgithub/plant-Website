"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    // Cleanup function
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <i className="fas fa-leaf"></i>
          <span>&nbsp; Manomi Plants</span>
        </div>
        
        {/* Hamburger menu for mobile */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* Desktop navigation */}
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/cart"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
        </ul>
        
        {/* Mobile navigation dropdown */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
          <ul>
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li><Link href="/cart" onClick={() => setIsMenuOpen(false)}><i className="fas fa-shopping-cart"></i> Cart</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;