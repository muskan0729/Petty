import React, { useState } from "react";
// import logo from "../images/Logo_Paw.webp"; 
import logo from "../images/Logo.webp"; // your logo path


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <header className="bg-gradient-to-r from-[#fff4dc] to-[#e8d3a5] px-6 py-3">
      // <header className="px-6 py-3 bg-gradient-to-br from-[#ffe9e9] via-[#ffe9e9] to-[#ffe9e9] h-20">
            <header className="px-1 py-1 bg-gradient-to-br from-[#f7f5f5] via-[#fff8f8] to-[#fbf0f0] ">

      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-12 "
      style={{border:"0px solid black"}}>

        {/* Logo */}
<div className="w-28 md:w-32 p-0 m-0" style={{border:"0px solid black"}}>
          <img src={logo}  alt="UE logo" className="w-full object-cover"/>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-black text-lg " style={{border:"0px solid black"}}>
  <li><a href="#home" className="hover:text-[#C79A2E]">HOME</a></li>
  <li><a href="#about" className="hover:text-[#C79A2E]">ABOUT US</a></li>
  <li><a href="#products" className="hover:text-[#C79A2E]">PRODUCTS</a></li>
  <li><a href="#order" className="hover:text-[#C79A2E]">ORDER SYSTEM</a></li>
  <li><a href="#why_choose" className="hover:text-[#C79A2E]">WHY CHOOSE US</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-black text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 text-black text-sm">
   <li><a href="#home" className="hover:text-[#C79A2E]">HOME</a></li>
  <li><a href="#about" className="hover:text-[#C79A2E]">ABOUT US</a></li>
  <li><a href="#products" className="hover:text-[#C79A2E]">PRODUCTS</a></li>
  <li><a href="#order" className="hover:text-[#C79A2E]">ORDE SYSTEM</a></li>
  <li><a href="#why_choose" className="hover:text-[#C79A2E]">WHY CHOOSE US</a></li>
        </ul>
      )}
    </header>
  );
}
