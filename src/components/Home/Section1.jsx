import React from "react";
import dog from "../../images/section1_img.png"; 
// import dog from "../../images/Dikoo-Paw3.jpeg"; 



const Section1 = () => {

  return (
<section className="relative w-full bg-gradient-to-br from-[#fff0f0] via-[#ffd6d6] to-[ #fbafaf] py-16">
      {/* <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10"> */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 items-center gap-4">

        
        {/* Left Content */}
        <div className="ms-5" data-aos="fade-up">
          <p className="text-orange-500 font-semibold mb-3 ">
            Best Pet Care
          </p>

          {/* <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-6"> */}
          <h1 className="text-xl  sm:text-3xl md:text-5xl font-bold text-gray-800 leading-tight ">

            Premium Pet Products <br /> for Global Markets
          </h1>

          {/* <p className="text-gray-600 mb-6"> */}
          <p className="text-sm sm:text-base text-gray-600 mb-4">

           Trusted supplier of high-quality pet food, toys, accessories & grooming products.
          </p>

          <div className="flex gap-4">
            {/* <button className="bg-[#d4b363] text-white px-6 py-3 rounded-full hover:bg-[#d4b363]">
              <a href="#Products">
              Shop Now
              </a>
            </button>

            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-100">
              Learn More
            </button> */}
          </div>
        </div>

        {/* Right Image */}
 {/* Right Image */}
<div className="flex justify-center" data-aos="fade-up">
  <div className="relative">

    {/* Arch Image Container */}
    {/* <div className="w-[360px] h-[460px] bg-yellow-400 border-[6px] border-white overflow-hidden rounded-t-[200px] rounded-b-[200px]"> */}
        {/* <div className="w-[360px] h-[460px] bg-[#fff] border-[6px] border-white  overflow-hidden rounded-t-[200px] rounded-b-[200px]"> */}
<div className="w-[150px] h-[200px] sm:w-[220px] sm:h-[300px] md:w-[360px] md:h-[460px] bg-white border-[4px] border-white overflow-hidden rounded-t-[100px] rounded-b-[100px] sm:rounded-t-[150px] sm:rounded-b-[150px] md:rounded-t-[200px] md:rounded-b-[200px]">

      <img
        src={dog}
        alt="pet"
        className="w-full h-full object-cover pt-1"
      />
    </div>

  </div>
</div>


      </div>
    </section>
  );
};

export default Section1;
