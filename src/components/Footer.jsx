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
            className="h-25 mb-4"
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
            <li>Merchant Exporter</li>
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

          <p className="text-sm text-[#0B2F5B] mt-2">
            Website: universalconnect.com
          </p>
        </div>

      </div>


      {/* Bottom Bar */}
      <div className="mt-12 bg-[#6f6852] py-4 text-center text-sm text-[#0B2F5B]">
        © 2026 UEC Pet Accessories. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
