import React from "react";
// import dog from "../../images/dog.jpg"; 
import dog from "../../images/banne1.png"; 


const Section1 = () => {

  return (
<section className="relative w-full bg-gradient-to-br from-[#fff0f0] via-[#ffd6d6] to-[ #fbafaf] py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div className="ms-5">
          <p className="text-orange-500 font-semibold mb-3 ">
            Best Pet Care
          </p>

          <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
            Premium Pet Products <br /> for Global Markets
          </h1>

          <p className="text-gray-600 mb-6">
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
<div className="flex justify-center">
  <div className="relative">

    {/* Arch Image Container */}
    {/* <div className="w-[360px] h-[460px] bg-yellow-400 border-[6px] border-white overflow-hidden rounded-t-[200px] rounded-b-[200px]"> */}
        <div className="w-[360px] h-[460px] bg-[#f5f6f8] border-[6px] border-white  overflow-hidden rounded-t-[200px] rounded-b-[200px]">

      <img
        src={dog}
        alt="pet"
        className="w-full h-full object-contain pb-9 pr-1"
      />
    </div>

  </div>
</div>


      </div>
        {/* WAVE */}
  {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      className="relative block w-full h-[120px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#ffffff"
        d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64V320H0Z"
      ></path>
    </svg>
  </div> */}
    </section>
  );
};

export default Section1;
