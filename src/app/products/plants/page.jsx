"use client"
import React, { useState } from 'react'
import styles from './page.module.css';
import Image from 'next/image';

function PlantPage() {
  // Sample plant data - moved to the top
  const plants = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: "$45.99",
      description: "Also known as the Swiss Cheese Plant, with beautiful split leaves.",
      image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 2,
      name: "Snake Plant",
      price: "$32.50",
      description: "Extremely hardy and perfect for beginners. Purifies indoor air.",
      image: "https://images.unsplash.com/photo-1687552212914-03a30c82053c?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      price: "$65.00",
      description: "A popular statement plant with large, violin-shaped leaves.",
      image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Peace Lily",
      price: "$28.75",
      description: "Beautiful flowering plant that thrives in low light conditions.",
      image: "https://plus.unsplash.com/premium_photo-1676117273363-2b13dbbc5385?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      name: "ZZ Plant",
      price: "$38.99",
      description: "Extremely durable and drought tolerant. Perfect for busy plant owners.",
      image: "https://plus.unsplash.com/premium_photo-1669870413077-93390b44baf0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      name: "Pothos Golden",
      price: "$24.99",
      description: "Easy to grow vine plant with heart-shaped leaves. Great for hanging baskets.",
      image: "https://images.unsplash.com/photo-1749748302631-0f4d9fccf74b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },      {
      id: 7,
      name: "Monstera Deliciosa",
      price: "$45.99",
      description: "Also known as the Swiss Cheese Plant, with beautiful split leaves.",
      image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 8,
      name: "Snake Plant",
      price: "$32.50",
      description: "Extremely hardy and perfect for beginners. Purifies indoor air.",
      image: "https://images.unsplash.com/photo-1687552212914-03a30c82053c?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 9,
      name: "Fiddle Leaf Fig",
      price: "$65.00",
      description: "A popular statement plant with large, violin-shaped leaves.",
      image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 10,
      name: "Peace Lily",
      price: "$28.75",
      description: "Beautiful flowering plant that thrives in low light conditions.",
      image: "https://plus.unsplash.com/premium_photo-1676117273363-2b13dbbc5385?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 11,
      name: "ZZ Plant",
      price: "$38.99",
      description: "Extremely durable and drought tolerant. Perfect for busy plant owners.",
      image: "https://plus.unsplash.com/premium_photo-1669870413077-93390b44baf0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 12,
      name: "Pothos Golden",
      price: "$24.99",
      description: "Easy to grow vine plant with heart-shaped leaves. Great for hanging baskets.",
      image: "https://images.unsplash.com/photo-1749748302631-0f4d9fccf74b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
      id: 13,
      name: "Monstera Deliciosa",
      price: "$45.99",
      description: "Also known as the Swiss Cheese Plant, with beautiful split leaves.",
      image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 14,
      name: "Snake Plant",
      price: "$32.50",
      description: "Extremely hardy and perfect for beginners. Purifies indoor air.",
      image: "https://images.unsplash.com/photo-1687552212914-03a30c82053c?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 15,
      name: "Fiddle Leaf Fig",
      price: "$65.00",
      description: "A popular statement plant with large, violin-shaped leaves.",
      image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 16,
      name: "Peace Lily",
      price: "$28.75",
      description: "Beautiful flowering plant that thrives in low light conditions.",
      image: "https://plus.unsplash.com/premium_photo-1676117273363-2b13dbbc5385?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 17,
      name: "ZZ Plant",
      price: "$38.99",
      description: "Extremely durable and drought tolerant. Perfect for busy plant owners.",
      image: "https://plus.unsplash.com/premium_photo-1669870413077-93390b44baf0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 18,
      name: "Pothos Golden",
      price: "$24.99",
      description: "Easy to grow vine plant with heart-shaped leaves. Great for hanging baskets.",
      image: "https://images.unsplash.com/photo-1749748302631-0f4d9fccf74b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },      {
      id: 19,
      name: "Monstera Deliciosa",
      price: "$45.99",
      description: "Also known as the Swiss Cheese Plant, with beautiful split leaves.",
      image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 20,
      name: "Snake Plant",
      price: "$32.50",
      description: "Extremely hardy and perfect for beginners. Purifies indoor air.",
      image: "https://images.unsplash.com/photo-1687552212914-03a30c82053c?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 21,
      name: "Fiddle Leaf Fig",
      price: "$65.00",
      description: "A popular statement plant with large, violin-shaped leaves.",
      image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 22,
      name: "Peace Lily",
      price: "$28.75",
      description: "Beautiful flowering plant that thrives in low light conditions.",
      image: "https://plus.unsplash.com/premium_photo-1676117273363-2b13dbbc5385?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 23,
      name: "ZZ Plant",
      price: "$38.99",
      description: "Extremely durable and drought tolerant. Perfect for busy plant owners.",
      image: "https://plus.unsplash.com/premium_photo-1669870413077-93390b44baf0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 24,
      name: "Pothos Golden",
      price: "$24.99",
      description: "Easy to grow vine plant with heart-shaped leaves. Great for hanging baskets.",
      image: "https://images.unsplash.com/photo-1749748302631-0f4d9fccf74b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 25,
      name: "Monstera Deliciosa",
      price: "$45.99",
      description: "Also known as the Swiss Cheese Plant, with beautiful split leaves.",
      image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 26,
      name: "Snake Plant",
      price: "$32.50",
      description: "Extremely hardy and perfect for beginners. Purifies indoor air.",
      image: "https://images.unsplash.com/photo-1687552212914-03a30c82053c?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 27,
      name: "Fiddle Leaf Fig",
      price: "$65.00",
      description: "A popular statement plant with large, violin-shaped leaves.",
      image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 28,
      name: "Peace Lily",
      price: "$28.75",
      description: "Beautiful flowering plant that thrives in low light conditions.",
      image: "https://plus.unsplash.com/premium_photo-1676117273363-2b13dbbc5385?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 29,
      name: "ZZ Plant",
      price: "$38.99",
      description: "Extremely durable and drought tolerant. Perfect for busy plant owners.",
      image: "https://plus.unsplash.com/premium_photo-1669870413077-93390b44baf0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 30,
      name: "Pothos Golden",
      price: "$24.99",
      description: "Easy to grow vine plant with heart-shaped leaves. Great for hanging baskets.",
      image: "https://images.unsplash.com/photo-1749748302631-0f4d9fccf74b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },      {
      id: 31,
      name: "Monstera Deliciosa",
      price: "$45.99",
      description: "Also known as the Swiss Cheese Plant, with beautiful split leaves.",
      image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 32,
      name: "Snake Plant",
      price: "$32.50",
      description: "Extremely hardy and perfect for beginners. Purifies indoor air.",
      image: "https://images.unsplash.com/photo-1687552212914-03a30c82053c?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 33,
      name: "Fiddle Leaf Fig",
      price: "$65.00",
      description: "A popular statement plant with large, violin-shaped leaves.",
      image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 34,
      name: "Peace Lily",
      price: "$28.75",
      description: "Beautiful flowering plant that thrives in low light conditions.",
      image: "https://plus.unsplash.com/premium_photo-1676117273363-2b13dbbc5385?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 35,
      name: "ZZ Plant",
      price: "$38.99",
      description: "Extremely durable and drought tolerant. Perfect for busy plant owners.",
      image: "https://plus.unsplash.com/premium_photo-1669870413077-93390b44baf0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 36,
      name: "Pothos Golden",
      price: "$24.99",
      description: "Easy to grow vine plant with heart-shaped leaves. Great for hanging baskets.",
      image: "https://images.unsplash.com/photo-1749748302631-0f4d9fccf74b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
      id: 37,
      name: "Monstera Deliciosa",
      price: "$45.99",
      description: "Also known as the Swiss Cheese Plant, with beautiful split leaves.",
      image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 38,
      name: "Snake Plant",
      price: "$32.50",
      description: "Extremely hardy and perfect for beginners. Purifies indoor air.",
      image: "https://images.unsplash.com/photo-1687552212914-03a30c82053c?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 39,
      name: "Fiddle Leaf Fig",
      price: "$65.00",
      description: "A popular statement plant with large, violin-shaped leaves.",
      image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 40,
      name: "Peace Lily",
      price: "$28.75",
      description: "Beautiful flowering plant that thrives in low light conditions.",
      image: "https://plus.unsplash.com/premium_photo-1676117273363-2b13dbbc5385?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 41,
      name: "ZZ Plant",
      price: "$38.99",
      description: "Extremely durable and drought tolerant. Perfect for busy plant owners.",
      image: "https://plus.unsplash.com/premium_photo-1669870413077-93390b44baf0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 42,
      name: "Pothos Golden",
      price: "$24.99",
      description: "Easy to grow vine plant with heart-shaped leaves. Great for hanging baskets.",
      image: "https://images.unsplash.com/photo-1749748302631-0f4d9fccf74b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },      {
      id: 43,
      name: "Monstera Deliciosa",
      price: "$45.99",
      description: "Also known as the Swiss Cheese Plant, with beautiful split leaves.",
      image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 44,
      name: "Snake Plant",
      price: "$32.50",
      description: "Extremely hardy and perfect for beginners. Purifies indoor air.",
      image: "https://images.unsplash.com/photo-1687552212914-03a30c82053c?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 45,
      name: "Fiddle Leaf Fig",
      price: "$65.00",
      description: "A popular statement plant with large, violin-shaped leaves.",
      image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 46,
      name: "Peace Lily",
      price: "$28.75",
      description: "Beautiful flowering plant that thrives in low light conditions.",
      image: "https://plus.unsplash.com/premium_photo-1676117273363-2b13dbbc5385?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 47,
      name: "ZZ Plant",
      price: "$38.99",
      description: "Extremely durable and drought tolerant. Perfect for busy plant owners.",
      image: "https://plus.unsplash.com/premium_photo-1669870413077-93390b44baf0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 48,
      name: "Pothos Golden",
      price: "$24.99",
      description: "Easy to grow vine plant with heart-shaped leaves. Great for hanging baskets.",
      image: "https://images.unsplash.com/photo-1749748302631-0f4d9fccf74b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const plantsPerPage = 20;

  // Calculate total pages
  const totalPages = Math.ceil(plants.length / plantsPerPage);

  // Get current plants
  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  const currentPlants = plants.slice(indexOfFirstPlant, indexOfLastPlant);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <section className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Plants Collection</h2>
        
        {/* Page info */}
        <div className={styles.pageInfo}>
          Showing {indexOfFirstPlant + 1}-{Math.min(indexOfLastPlant, plants.length)} of {plants.length} plants
        </div>
        
        {/* Plants Grid */}
        <div className={styles.plantsGrid}>
          {currentPlants.map(plant => (
            <div key={plant.id} className={styles.plantCard}>
              <Image 
                src={plant.image} 
                alt={plant.name}
                width={280}
                height={200}
                className={styles.plantImage}
              />
              <div className={styles.plantInfo}>
                <h3 className={styles.plantName}>{plant.name}</h3>
                <p className={styles.plantPrice}>{plant.price}</p>
                <p className={styles.plantDescription}>{plant.description}</p>
                <button className={styles.addToCart}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button 
              className={styles.paginationButton}
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            {pageNumbers.map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`${styles.paginationButton} ${currentPage === number ? styles.active : ''}`}
              >
                {number}
              </button>
            ))}
            
            <button 
              className={styles.paginationButton}
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

export default PlantPage;
