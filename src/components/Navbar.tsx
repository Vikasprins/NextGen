"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import LeadPopup from "./LeadPopup";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
          <Link href="/" className="text-gray-700 hover:text-orange-500">Services</Link>
          <Link href="/courses" className="text-gray-700 hover:text-orange-500">Courses</Link>
          <Link href="/" className="text-gray-700 hover:text-orange-500">Contact</Link>
          <button
          onClick={() => setOpen(true)} 
          className="bg-[#FF7300] hover:bg-orange-600 text-white px-4 py-2 rounded-md cursor-pointer">
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
          <Link href="/" className="text-gray-700 hover:text-orange-500">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-orange-500">About Us</Link>
          <Link href="/" className="text-gray-700 hover:text-orange-500">Services</Link>
          <Link href="/courses" className="text-gray-700 hover:text-orange-500">Courses</Link>
          <Link href="/" className="text-gray-700 hover:text-orange-500">Contact</Link>
          <button
          onClick={() => setOpen(true)} 
          className="bg-[#FF7300] hover:bg-orange-600 text-white px-4 py-2 rounded-md w-full text-left cursor-pointer">
            Book Free Demo
          </button>
        </div>
      )}
    </header>
    <LeadPopup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;

