import React from "react";

const Section2 = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-20 py-16 grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Images */}
      <div className="relative flex justify-center lg:justify-start" data-aos="fade-down">
        
        {/* Big Circle */}
        <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-[#d4b363]">
          <img
            // src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
            src="https://img.freepik.com/free-photo/shallow-focus-vertical-shot-cute-golden-retriever-puppy-sitting-grass-ground_181624-27259.jpg?t=st=1773588262~exp=1773591862~hmac=fff4f63634c74f806793db3d7bacda7996ac98b74dbf74a3c996f598efb3eb2a&w=1480"
            alt="cat"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Small Circle */}
{/* Small Circle */}
<div className="absolute -bottom-6 right-4 lg:bottom-0 lg:right-10 w-48 h-48 lg:w-54 lg:h-54 rounded-full overflow-hidden border-8 border-white shadow-lg">
  <img
    src="https://img.freepik.com/free-photo/smart-feeder-pets-still-life_23-2151310856.jpg?t=st=1773588531~exp=1773592131~hmac=ad9bf3bd5dda55568e37a18ab0f06d00b0f7fa2b8d5d4a98d9262cd1dfb73c7c&w=1480"
    alt="kitten"
    className="w-full h-full object-cover"
  />
</div>

      </div>

      {/* Right Content */}
      <div data-aos="fade-down" > 
        <p className="text-yellow-500 font-semibold text-sm uppercase mb-3">
          About Us
        </p>

        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Welcome To Dikoo Paws <br />
        </h2>

     <p className="text-gray-500 mb-6 max-w-lg">
    We are a merchant exporter specializing in premium-quality leashes,
    collars, and harnesses for the global pet market. Partnering with
    trusted manufacturers, we ensure every product meets international
    quality standards for durability, comfort, and control.
  </p>

  <p className="text-gray-500 mb-8 max-w-lg">
    Our collections combine functionality with modern style, catering to
    the evolving needs of pet owners worldwide. With a strong focus on
    quality assurance, competitive pricing, and timely delivery, we aim
    to build reliable long-term partnerships globally.
  </p>

        {/* Feature 1 */}
        {/* <div className="flex items-start gap-4 mb-6"> */}
          {/* <div className="p-3 border-2 border-yellow-400 rounded-full">
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="8" r="2" />
              <circle cx="12" cy="6" r="2" />
              <circle cx="18" cy="8" r="2" />
              <circle cx="8" cy="14" r="2.5" />
              <circle cx="16" cy="14" r="2.5" />
            </svg>
          </div> */}

          {/* <div>
            <h4 className="font-semibold text-gray-800">
              Feeding A Cat To Be Healthy
            </h4>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div> */}
        {/* </div> */}

        {/* Feature 2 */}
        {/* <div className="flex items-start gap-4 mb-8">
          <div className="p-3 border-2 border-yellow-400 rounded-full">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 12a8 8 0 0 1 16 0v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
              <circle cx="9" cy="11" r="1" />
              <circle cx="15" cy="11" r="1" />
            </svg>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">
              Dogs Veterinary Diet Plan
            </h4>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
        </div> */}

        {/* Button */}
        {/* <button className="bg-[#d4b363] hover:bg-[#d4b363] text-white px-6 py-3 rounded-full font-medium shadow">
          Discover More
        </button> */}
      </div>
    </section>
  );
};

export default Section2;