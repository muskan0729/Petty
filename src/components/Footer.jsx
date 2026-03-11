import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#a29875] text-white pt-12 ">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* My Account */}
        <div>
          <h3 className="font-semibold mb-4 tracking-wide">MY ACCOUNT</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="hover:text-white cursor-pointer">Career at Ely</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Sustainability</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-4 tracking-wide">HELP</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Shipping</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Order Status</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold mb-4 tracking-wide">FOLLOW US ON</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="hover:text-white cursor-pointer">Twitter</li>
            <li className="hover:text-white cursor-pointer">Facebook</li>
            <li className="hover:text-white cursor-pointer">Google Plus</li>
            <li className="hover:text-white cursor-pointer">Instagram</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-4 tracking-wide">ABOUT US</h3>
          <p className="text-sm text-gray-200">
            Email: purity_jewel@gmail.com
          </p>
          <p className="text-sm text-gray-200 mt-2">
            Phone: 0987654321
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 bg-[#6f6852] h-8"></div>

    </footer>
  );
};

export default Footer;
