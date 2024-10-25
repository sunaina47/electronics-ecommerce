// src/pages/index.js
import React from "react";
import HeroBanner from "../components/HeroBanner"; // Assuming you create this component
import ProductCard from "../components/ProductCard"; // Import ProductCard component

const Home = () => {
  // Dummy data for featured products (you can replace this with actual data later)
  const featuredProducts = [
    {
      id: 1,
      name: "Smartphone X",
      price: 999,
      imageUrl: "/images/smartphone-x.jpg",
    },
    { id: 2, name: "Laptop Y", price: 1299, imageUrl: "/images/laptop-y.jpg" },
    {
      id: 3,
      name: "Headphones Z",
      price: 299,
      imageUrl: "/images/headphones-z.jpg",
    },
  ];

  return (
    <div>
      {/* <HeroBanner /> */}
      <h1>Featured Products</h1>
      <div className="product-list">
        {/* {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))} */}
      </div>
    </div>
  );
};

export default Home;
