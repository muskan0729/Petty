import React from "react";
import { FaGlobe, FaBoxOpen, FaShieldAlt } from "react-icons/fa";

const Section3 = () => {
  return (
    <div className="bg-gray-100 py-12 md:py-16 px-4">

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">

        {/* Item 1 */}
        <div className="flex flex-col items-center space-y-3">
          <FaGlobe className="text-3xl md:text-4xl text-gray-700" />
          <h3 className="text-sm md:text-base font-semibold tracking-wide">
            Highly Workable
          </h3>
          <p className="text-xs md:text-sm text-gray-500 max-w-[220px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center space-y-3">
          <FaBoxOpen className="text-3xl md:text-4xl text-gray-700" />
          <h3 className="text-sm md:text-base font-semibold tracking-wide">
            100% Eco Friendly
          </h3>
          <p className="text-xs md:text-sm text-gray-500 max-w-[220px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center space-y-3">
          <FaShieldAlt className="text-3xl md:text-4xl text-gray-700" />
          <h3 className="text-sm md:text-base font-semibold tracking-wide">
            Secure Payment
          </h3>
          <p className="text-xs md:text-sm text-gray-500 max-w-[220px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Section3;
