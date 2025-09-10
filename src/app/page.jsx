"use client"
import { useState, useEffect } from 'react';
import Subscribe from './subscribe/page';
import Plant from './products/plants/page';
import Header from './(components)/layout/Header';
import Footer from './(components)/layout/Footer';
import Hero from './(components)/layout/Hero';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading beautiful plants...</p>
        </div>
        
        <style jsx>{`
          .loading-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          }
          
          .loading-spinner {
            text-align: center;
          }
          
          .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid rgba(74, 114, 41, 0.2);
            border-radius: 50%;
            border-top: 5px solid #4a7229;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .loading-spinner p {
            color: #4a7229;
            font-size: 1.2rem;
            font-weight: 500;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="homepage">
      <Header />  
      <Hero />   
      <Plant />
      <Subscribe />
      <Footer />
    </div>
  );
}