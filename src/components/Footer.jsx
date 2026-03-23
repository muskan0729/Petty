import React from "react";
import logo from "../images/Logo.webp"; // your logo path


const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#fff0f0] via-[#ffd6d6] to-[#ff9393] text-white pt-14">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

      <div>
          {/* Logo */}
          <img 
            src={logo} 
            alt="UEC Logo"
            className="h-28"
            style={{border:"0px solid black"}}
          />

          <p className="text-sm text-[#0B2F5B] leading-relaxed">
            Premium Leashes, Collars & Harness Manufacturer in India.
            We export high-quality pet accessories designed for durability,
            comfort and safety for the global pet market.
          </p>
        </div>


        {/* Products */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#0B2F5B]">Products</h3>

          <ul className="space-y-2 text-sm text-[#0B2F5B]">
            <li className="hover:text-[#0B2F5B] cursor-pointer">Dog Collars</li>
            <li className="hover:text-[#0B2F5B] cursor-pointer">Pet Leashes</li>
            <li className="hover:text-[#0B2F5B] cursor-pointer">Dog Harness</li>
            <li className="hover:text-[#0B2F5B] cursor-pointer">Custom Pet Accessories</li>
          </ul>
        </div>


        {/* Why Choose Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#0B2F5B]" >Why Choose Us</h3>

          <ul className="space-y-2 text-sm text-[#0B2F5B]">
            <li> Exporter</li>
            <li>Competitive Bulk Pricing</li>
            <li>Strict Quality Inspection</li>
            <li>Timely Shipment</li>
            <li>Custom Packaging</li>
          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#0B2F5B]">Get In Touch</h3>

          <p className="text-sm text-[#0B2F5B]">
            Phone: 9152668333
          </p>

          <p className="text-sm text-[#0B2F5B] mt-2">
            Email: askme@universalconnect.com
          </p>
{/* Social Icons */}
<div className="flex gap-4 mt-4">

  {/* Facebook */}
  <a href="https://www.facebook.com/people/Sunita-Falke/pfbid0Azz9D3nK2KKSXPZ9ssXUE46aS236vw36e4DrEBo4a3vkNRbPH42ibXowAT7EwSDKl/" className="bg-white p-2 rounded-full hover:bg-[#0B2F5B] group transition">
    <svg
      className="w-5 h-5 text-[#0B2F5B] group-hover:text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22 12a10 10 0 10-11.63 9.87v-6.99H7.9V12h2.47V9.8c0-2.44 1.45-3.8 3.68-3.8 1.07 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.43 2.88h-2.29v6.99A10 10 0 0022 12z" />
    </svg>
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/uec_dikoopaws/#" className="bg-white p-2 rounded-full hover:bg-[#0B2F5B] group transition">
    <svg
      className="w-5 h-5 text-[#0B2F5B] group-hover:text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.8A5.2 5.2 0 106 13a5.2 5.2 0 006-5.2zm0 2A3.2 3.2 0 118.8 13 3.2 3.2 0 0112 9.8zm4.8-.9a1.2 1.2 0 11-1.2-1.2 1.2 1.2 0 011.2 1.2z" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a href="http://www.linkedin.com/in/sunita-falke-25b9503b5" className="bg-white p-2 rounded-full hover:bg-[#0B2F5B] group transition">
    <svg
      className="w-5 h-5 text-[#0B2F5B] group-hover:text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.45 20.45h-3.55v-5.6c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.35V9h3.4v1.56h.05c.47-.9 1.63-1.86 3.35-1.86 3.58 0 4.24 2.36 4.24 5.42v6.33zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  </a>

  {/* Twitter */}
  {/* <a href="#" className="bg-white p-2 rounded-full hover:bg-[#0B2F5B] group transition">
    <svg
      className="w-5 h-5 text-[#0B2F5B] group-hover:text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.73 1.04A4.28 4.28 0 0016.07 4c-2.37 0-4.3 1.92-4.3 4.3 0 .34.04.67.11.99A12.14 12.14 0 013 5.16a4.3 4.3 0 001.33 5.74 4.23 4.23 0 01-1.95-.54v.05c0 2.08 1.48 3.82 3.44 4.21a4.28 4.28 0 01-1.94.07 4.3 4.3 0 004.01 2.98A8.6 8.6 0 012 19.54 12.13 12.13 0 008.56 21c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.7 8.7 0 0022.46 6z" />
    </svg>
  </a> */}

</div>


        </div>

      </div>


      {/* Bottom Bar */}
      <div className="mt-12 bg-[#ffebeb] py-4 text-center text-sm text-[#0B2F5B]">
        © 2026 UEC Pet Accessories. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
