import React from "react";

const Section4 = () => {
  return (
    <div className="bg-gray-100 py-12 md:py-16 px-4">

      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        Trendy Collection
      </h2>

      {/* Products */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">

        {/* Product 1 */}
        <div>
          <img
            src="/src/images/Component 17.png"
            className="rounded-lg mb-3 w-full object-cover"
          />
          <p className="text-sm text-gray-700">Cable Chain Choker</p>
          <p className="text-sm text-gray-500">₹20,000</p>
        </div>

        {/* Product 2 */}
        <div>
          <img
            src="/src/images/Component 21.png"
            className="rounded-lg mb-3 w-full object-cover"
          />
          <p className="text-sm text-gray-700">Link Chain Earrings</p>
          <p className="text-sm text-gray-500">₹20,000</p>
        </div>

        {/* Product 3 */}
        <div>
          <img
            src="/src/images/Component 22.png"
            className="rounded-lg mb-3 w-full object-cover"
          />
          <p className="text-sm text-gray-700">Yona Signet Ring</p>
          <p className="text-sm text-gray-500">₹20,000</p>
        </div>

        {/* Product 4 */}
        <div>
          <img
            src="/src/images/Component 23.png"
            className="rounded-lg mb-3 w-full object-cover"
          />
          <p className="text-sm text-gray-700">Anna Ribbed Bangle</p>
          <p className="text-sm text-gray-500">₹20,000</p>
        </div>

      </div>

    </div>
  );
};

export default Section4;
