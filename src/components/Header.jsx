import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#a39976] px-6 py-3">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-white text-2xl font-semibold tracking-widest">
          GUNSAAJARI
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white text-sm">
          <li className="cursor-pointer hover:text-gray-200">Home</li>
          <li className="cursor-pointer hover:text-gray-200">Collections</li>
          <li className="cursor-pointer hover:text-gray-200">About</li>
          <li className="cursor-pointer hover:text-gray-200">Contact</li>
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 text-white text-sm">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Collections</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      )}
    </header>
  );
}
