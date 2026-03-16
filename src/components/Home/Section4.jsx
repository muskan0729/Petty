import React from "react";
import { FaShoppingCart, FaEnvelope, FaShippingFast } from "react-icons/fa";

const Section4 = () => {
  return (
    <section id="order" className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">

        {/* Title */}
        <p className="text-yellow-500 font-semibold uppercase text-sm mb-2">
          Order System
        </p>

        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Simple & Easy Ordering Process
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 relative">

          {/* Step 1 */}
          <div className="bg-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-400 p-4 rounded-full text-white text-2xl">
                <FaShoppingCart />
              </div>
            </div>

            <h3 className="font-bold text-lg mb-3">Online Order</h3>

            <p className="text-gray-500 text-sm">
              Browse our catalog and place your order online by selecting
              the required pet accessories.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-400 p-4 rounded-full text-white text-2xl">
                <FaEnvelope />
              </div>
            </div>

            <h3 className="font-bold text-lg mb-3">Send Message</h3>

            <p className="text-gray-500 text-sm">
              Contact us via email or message with your order details and
              quantity requirements.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-400 p-4 rounded-full text-white text-2xl">
                <FaShippingFast />
              </div>
            </div>

            <h3 className="font-bold text-lg mb-3">Fast Shipping</h3>

            <p className="text-gray-500 text-sm">
              Once confirmed, we process your order quickly and ensure
              timely global delivery.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section4;
