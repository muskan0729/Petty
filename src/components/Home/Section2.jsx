import React from "react";
import dog_section2 from "../../images/dog_section2.png";
import cat_section2 from "../../images/cat_section2.png";

const Section2 = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2
 gap-12 items-center"
    >
      

      <div className="block lg:hidden text-left mb-4">
<p className="text-yellow-500 font-semibold text-sm uppercase mb-3">
  About Us
</p>

<h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
  Welcome To Dikoo Paws
</h2>

</div>

      {/* Left Images */}
<div
  className="relative flex justify-center items-start  pb-40 pr-20
  w-full max-w-[380px]  max-h-[300px] sm:max-w-[420px] 
  mx-auto lg:mx-0 lg:justify-start
  overflow-visible"
  // style={{ border: "2px solid black" }}
>


        {/* Big Circle */}
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-[#d4b363] z-0 hover:scale-105 transition duration-300">
          <img
            src={dog_section2}
            alt="dog"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Small Circle */}
        <div
          className="absolute 
          bottom-0 right-0
          translate-x-[10%] translate-y-[10%]
          sm:translate-x-[25%] sm:translate-y-[25%]
          md:translate-x-[30%] md:translate-y-[30%]
          lg:translate-x-[25%] lg:translate-y-[25%]
          w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-54 lg:h-54
          rounded-full overflow-hidden border-4 sm:border-6 border-white shadow-lg z-10
          hover:scale-105 transition duration-300"
        >
          <img
            src={cat_section2}
            alt="cat"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Content */}
      <div data-aos="fade-down">
        <div className="hidden lg:block">
        <p className="text-yellow-500 font-semibold text-sm uppercase mb-3">
          About Us
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
          Welcome To Dikoo Paws
        </h2>
</div>
        <p className="text-gray-500 mb-6 max-w-lg">
          We are a pet product exporter specializing in premium-quality leashes,
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
      </div>
    </section>
  );
};

export default Section2;
