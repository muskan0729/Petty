import React from "react";
import cate1 from "../../images/cate_1.png";
import cate2 from "../../images/cate_2.png";
import cate3 from "../../images/cate_3.png";
import cate4 from "../../images/cate_4.png";
import cate5 from "../../images/cate_5.png";

const Section2 = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12">

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-serif text-center mb-6">
        Shop By Categories
      </h2>

      {/* Category Nav */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-gray-600 font-medium text-sm md:text-base">
        <span className="cursor-pointer hover:text-black">Earrings</span>
        <span className="cursor-pointer hover:text-black">Necklace</span>
        <span className="cursor-pointer hover:text-black">Bracelet</span>
        <span className="cursor-pointer hover:text-black">Rings</span>
      </div>

      {/* Grid */}
      <div className="space-y-4">

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Left Big */}
          <div className="h-[220px] md:h-[260px]">
            <img
              src={cate1}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right 2 images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="h-[220px] md:h-[260px]">
              <img
                src={cate2}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-[220px] md:h-[260px]">
              <img
                src={cate3}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Left 2 images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="h-[220px] md:h-[260px]">
              <img
                src={cate4}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-[220px] md:h-[260px]">
              <img
                src={cate2}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Big */}
          <div className="h-[220px] md:h-[260px]">
            <img
              src={cate1}
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Section2;
