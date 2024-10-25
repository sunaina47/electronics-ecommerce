// src/layouts/MainLayout.js
import React from "react";
import Header from "../Header"; // Adjust path as necessary
import Footer from "../Footer"; // Adjust path as necessary

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
