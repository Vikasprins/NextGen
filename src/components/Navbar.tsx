// // src/components/Navbar.tsx
// import React from "react";

// const Navbar = () => {
//   return (
//     <header className="flex justify-between items-center p-4 shadow-md bg-white mx-4">
//       <div className="text-2xl font-bold text-orange-600">
//         <img className="h-16 w-auto" src="./nga_logo.png"  alt="Your Company" />
//       </div>
//       <nav className="space-x-6 hidden md:block">
//         <a href="#" className="text-gray-700 hover:text-orange-500">Home</a>
//         <a href="#" className="text-gray-700 hover:text-orange-500">About Us</a>
//         <a href="#" className="text-gray-700 hover:text-orange-500">Services</a>
//         <a href="#" className="text-gray-700 hover:text-orange-500">Courses</a>
//         <a href="#" className="text-gray-700 hover:text-orange-500">Contact</a>
//         <button className="bg-[#FF7300] hover:bg-orange-600 text-white px-4 py-2 rounded-md cursor-pointer">
//         Book Free Demo
//       </button>
//       </nav>
      
//     </header>
//   );
// };

// export default Navbar;

// src/components/Navbar.tsx
"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-4 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src="./nga_logo.png" alt="NGA Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-orange-500">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-orange-500">About Us</Link>
          <Link href="/services" className="text-gray-700 hover:text-orange-500">Services</Link>
          <Link href="/courses" className="text-gray-700 hover:text-orange-500">Courses</Link>
          <Link href="/contact" className="text-gray-700 hover:text-orange-500">Contact</Link>
          <button className="bg-[#FF7300] hover:bg-orange-600 text-white px-4 py-2 rounded-md">
            Book Free Demo
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-4 mt-2 space-y-4">
          <Link href="#" className="text-gray-700 hover:text-orange-500">Home</Link>
          <Link href="#" className="text-gray-700 hover:text-orange-500">About Us</Link>
          <Link href="#" className="text-gray-700 hover:text-orange-500">Services</Link>
          <Link href="#" className="text-gray-700 hover:text-orange-500">Courses</Link>
          <Link href="#" className="text-gray-700 hover:text-orange-500">Contact</Link>
          <button className="bg-[#FF7300] hover:bg-orange-600 text-white px-4 py-2 rounded-md w-full text-left">
            Book Free Demo
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

