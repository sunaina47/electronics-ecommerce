// src/components/Header.js
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
            <ul>
              <li>
                <Link href="/products/smartphones">Smartphones</Link>
              </li>
              <li>
                <Link href="/products/laptops">Laptops</Link>
              </li>
              <li>
                <Link href="/products/accessories">Accessories</Link>
              </li>
              <li>
                <Link href="/products/tvs">TVs</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/deals">Deals</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/Login">Login</Link>
          </li>
          <li>
            <Link href="/Register">Register</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
