import React from "react";
import collar from "../../images/dog_collar1.jpg";
import leash from "../../images/leashes.png";
import harness from "../../images/harnesses.png";
import accessory from "../../images/pet_access (2).png";

const Section3 = () => {
  return (
    <section id="products" className="bg-[#f5f5f5] py-20 px-6 lg:px-20">

      <div className="max-w-7xl mx-auto text-center mb-14" data-aos="fade-down">

        <p className="text-[#C79A2E] font-semibold uppercase text-sm mb-2">
          Our Products
        </p>

        <h2 className="text-4xl font-bold text-[#0B2F5B]">
          Premium Pet Accessories
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Explore our range of high-quality pet accessories designed
          for durability, comfort and safety.
        </p>

      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Product 1 */}
        <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden" data-aos="fade-up">
          <img
           src={collar}
          // src="https://img.freepik.com/free-vector/realistic-vector-brown-leather-dog-collar-pets-isolated-gradient-background_1284-48381.jpg?t=st=1773588117~exp=1773591717~hmac=b094818b2dfd40d07cc6326b7bebb5198e9353b00294a4ae7f92364dfa5cb8a3&w=1480"

           className="h-60 w-full object-contain bg-white" alt="colloar"/>
          <div className="p-5 text-center">
            <h3 className="font-semibold text-lg text-[#0B2F5B]">
              Dog Collars
            </h3>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden" data-aos="fade-down">
          <img 
          src={leash} 
          // src="https://img.freepik.com/free-photo/shiba-inu-dog-taking-walk_23-2149478809.jpg?t=st=1773588804~exp=1773592404~hmac=c088ba7bb635433349e04ebe32b3c5da767d7db4d9e5b33e488fc97ef0c6b513&w=1480"
          className="h-60 w-full object-cover"  alt="colloar"/>
          <div className="p-5 text-center">
            <h3 className="font-semibold text-lg text-[#0B2F5B]">
              Pet Leashes
            </h3>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden" data-aos="fade-up">
          <img 
          src={harness}
          // src="https://img.freepik.com/premium-psd/dog-leash-mockup-design_23-2150792294.jpg?w=1480"
           className="h-60 w-full object-cover"  alt="colloar"/>
          <div className="p-5 text-center">
            <h3 className="font-semibold text-lg text-[#0B2F5B]">
              Dog Harness
            </h3>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden" data-aos="fade-down">
          <img 
          src={accessory}
          // src="https://img.freepik.com/free-photo/top-view-pet-accessories_23-2150930409.jpg?t=st=1773588976~exp=1773592576~hmac=127a4a2217482e0fa406266d4fce63ccb6e6aff7b0364aa44ad54c3fae4fe7ad&w=1480"
           className="h-60 w-full object-contain bg-[#f0f7f2]"  alt="pet accessories"/>
          <div className="p-5 text-center">
            <h3 className="font-semibold text-lg text-[#0B2F5B]">
              Pet Accessories
            </h3>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Section3;
