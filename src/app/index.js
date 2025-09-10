`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GreenLeaf Plant Shop</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f8fafc;
            color: #334155;
            line-height: 1.6;
        }
        
        header {
            background: linear-gradient(to right, #2d5016, #4a7229);
            color: white;
            padding: 1rem 2rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            display: flex;
            align-items: center;
        }
        
        .logo i {
            margin-right: 0.5rem;
            color: #86efac;
        }
        
        .nav-links {
            display: flex;
            list-style: none;
        }
        
        .nav-links li {
            margin-left: 2rem;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .nav-links a:hover {
            color: #86efac;
        }
        
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
        
        .btn {
            display: inline-block;
            background-color: #4a7229;
            color: white;
            padding: 0.8rem 1.5rem;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            transition: background-color 0.3s, transform 0.3s;
        }
        
        .btn:hover {
            background-color: #5a8c35;
            transform: translateY(-3px);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 3rem;
            color: #2d5016;
            font-size: 2.2rem;
        }
        
        .plants-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }
        
        .plant-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .plant-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .plant-image {
            height: 200px;
            width: 100%;
            object-fit: cover;
            border-bottom: 4px solid #4a7229;
        }
        
        .plant-info {
            padding: 1.5rem;
        }
        
        .plant-name {
            font-size: 1.4rem;
            color: #2d5016;
            margin-bottom: 0.5rem;
        }
        
        .plant-price {
            font-size: 1.2rem;
            color: #4a7229;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        
        .plant-description {
            color: #64748b;
            margin-bottom: 1.5rem;
        }
        
        .add-to-cart {
            width: 100%;
            padding: 0.7rem;
            background-color: #4a7229;
            color: white;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .add-to-cart:hover {
            background-color: #5a8c35;
        }
        
        .newsletter {
            background: linear-gradient(to right, #2d5016, #4a7229);
            color: white;
            padding: 4rem 2rem;
            text-align: center;
            margin: 2rem 0;
        }
        
        .newsletter-content {
            max-width: 600px;
            margin: 0 auto;
        }
        
        .newsletter h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        
        .newsletter p {
            margin-bottom: 2rem;
        }
        
        .newsletter-form {
            display: flex;
            max-width: 500px;
            margin: 0 auto;
        }
        
        .newsletter-form input {
            flex: 1;
            padding: 0.8rem 1rem;
            border: none;
            border-radius: 30px 0 0 30px;
            font-size: 1rem;
        }
        
        .newsletter-form button {
            padding: 0.8rem 1.5rem;
            background-color: #86efac;
            color: #2d5016;
            border: none;
            border-radius: 0 30px 30px 0;
            font-weight: 600;
            cursor: pointer;
        }
        
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
        
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .hero h1 {
                font-size: 2.2rem;
            }
            
            .plants-grid {
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            }
            
            .newsletter-form {
                flex-direction: column;
            }
            
            .newsletter-form input,
            .newsletter-form button {
                width: 100%;
                border-radius: 30px;
                margin-bottom: 0.5rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <i class="fas fa-leaf"></i>
                <span>GreenLeaf</span>
            </div>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>Bring Nature Into Your Home</h1>
            <p>Discover our wide variety of beautiful indoor plants that purify your air and enhance your space</p>
            <a href="#plants" class="btn">Shop Now</a>
        </div>
    </section>

    <section class="container" id="plants">
        <h2 class="section-title">Our Popular Plants</h2>
        <div class="plants-grid" id="plants-container">
            <!-- Plant cards will be loaded here by JavaScript -->
        </div>
    </section>

    <section class="newsletter">
        <div class="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get updates on new plants, care tips, and exclusive offers</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Enter your email address" required>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>GreenLeaf</h3>
                <p>Bringing nature's beauty into your home with quality plants and expert care advice.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
            </div>
            <div class="footer-section">
                <h3>Contact Info</h3>
                <p><i class="fas fa-map-marker-alt"></i> 123 Plant Street, Nature City</p>
                <p><i class="fas fa-phone"></i> (123) 456-7890</p>
                <p><i class="fas fa-envelope"></i> info@greenleaf.com</p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2023 GreenLeaf Plant Shop. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Sample plant data (in a real app, this would come from your database)
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
                image: "https://images.unsplash.com/photo-1585353387342-6f41b45f1737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            },
            {
                id: 3,
                name: "Fiddle Leaf Fig",
                price: "$65.00",
                description: "A popular statement plant with large, violin-shaped leaves.",
                image: "https://images.unsplash.com/photo-1598887141417-31c7ed46e8ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            },
            {
                id: 4,
                name: "Peace Lily",
                price: "$28.75",
                description: "Beautiful flowering plant that thrives in low light conditions.",
                image: "https://images.unsplash.com/photo-1593483316242-27b5c5d47c9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            },
            {
                id: 5,
                name: "ZZ Plant",
                price: "$38.99",
                description: "Extremely durable and drought tolerant. Perfect for busy plant owners.",
                image: "https://images.unsplash.com/photo-1598880343628-3f6c6c72e590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            },
            {
                id: 6,
                name: "Pothos Golden",
                price: "$24.99",
                description: "Easy to grow vine plant with heart-shaped leaves. Great for hanging baskets.",
                image: "https://images.unsplash.com/photo-1598880343628-3f6c6c72e590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            }
        ];

        // Function to display plants
        function displayPlants() {
            const plantsContainer = document.getElementById('plants-container');
            
            plants.forEach(plant => {
                const plantCard = document.createElement('div');
                plantCard.className = 'plant-card';
                
                plantCard.innerHTML = 
                    <img src="${plant.image}" alt="${plant.name}" class="plant-image">
                    <div class="plant-info">
                        <h3 class="plant-name">${plant.name}</h3>
                        <p class="plant-price">${plant.price}</p>
                        <p class="plant-description">${plant.description}</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                ;
                
                plantsContainer.appendChild(plantCard);
            });
        }

        // Display plants when page loads
        window.onload = displayPlants;

        // Simple form submission handler
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thanks for subscribing to our newsletter!');
            this.reset();
        });
    </script>
</body>
</html>
`