import React from "react";
import { FaGlobe, FaBoxOpen, FaTags, FaCheckCircle, FaShippingFast, FaGift } from "react-icons/fa";

const Section5 = () => {
  return (
    <section id="why_choose" className="py-16 px-6 lg:px-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center" data-aos="fade-down">
          <img
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
            alt="dog"
            className="rounded-3xl shadow-lg w-[400px] object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-up">

          <p className="text-yellow-500 font-semibold uppercase text-sm mb-3" >
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Premium Pet Accessories <br /> You Can Trust
          </h2>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-2 gap-6">

            <div className="flex items-start gap-3">
              <FaGlobe className="text-yellow-500 text-xl mt-1"/>
              <p className="text-gray-700 font-medium">Merchant Exporter</p>
            </div>

            <div className="flex items-start gap-3">
              <FaBoxOpen className="text-yellow-500 text-xl mt-1"/>
              <p className="text-gray-700 font-medium">Reliable Sourcing</p>
            </div>

            <div className="flex items-start gap-3">
              <FaTags className="text-yellow-500 text-xl mt-1"/>
              <p className="text-gray-700 font-medium">Competitive Bulk Pricing</p>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-yellow-500 text-xl mt-1"/>
              <p className="text-gray-700 font-medium">Strict Quality Inspection</p>
            </div>

            <div className="flex items-start gap-3">
              <FaShippingFast className="text-yellow-500 text-xl mt-1"/>
              <p className="text-gray-700 font-medium">Timely Shipment</p>
            </div>

            <div className="flex items-start gap-3">
              <FaGift className="text-yellow-500 text-xl mt-1"/>
              <p className="text-gray-700 font-medium">Custom Packaging</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Section5;
