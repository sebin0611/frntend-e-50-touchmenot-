import React from 'react';

const ProductBanner = () => {
  return (
    <div className="relative w-full min-h-[300px] md:h-[400px] bg-white flex flex-col md:flex-row items-center justify-center">
  {/* Text Content Section - Centered with max-width */}
  <div className="w-full ps-20 pe-20 max-w-xl md:w-1/2 p-6 md:pl-12 lg:pl-16 md:pr-8 text-center md:text-left flex flex-col items-center md:items-start">
    <p className="text-[#555] text-sm md:text-lg font-medium  mb-2 md:mb-3">Our New Favourites</p>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-1">Snapdragon</h1>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-black mb-4 md:mb-6">x Series</h2>
    
    <div className="mb-4 md:mb-6 text-center md:text-left">
      <h3 className="text-xl md:text-2xl text-[#333] mb-1 md:mb-2">Laptops</h3>
      <p className="text-lg md:text-xl text-[#666]">Live the Snapdragon life</p>
    </div>
    
    <div className="text-center md:text-left">
      <p className="text-lg md:text-xl mb-1">
        Starting at <span className="font-bold">60,990</span>*
      </p>
      <p className="text-xs text-[#999] mb-4 md:mb-6">*Tracking from: Offer</p>
      <button className="bg-black text-white py-2 px-6 md:px-8 text-sm md:text-base font-bold hover:bg-gray-800 transition-colors">
        BUY NOW
      </button>
    </div>
  </div>
  
  {/* Image Section - Centered with max-width */}
  <div className="w-full max-w-6xl md:w-1/2 h-full p-4 md:p-8 flex items-center justify-center">
    <div className="relative w-full max-w-[400px] h-[200px] sm:h-[250px] md:h-[320px] flex items-center justify-center">
      {/* Animated Glow Border */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="absolute inset-0 border-2 md:border-4 border-transparent animate-pulse [animation-duration:3s]">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500 to-black opacity-0 hover:opacity-30 transition-opacity duration-1000"></div>
        </div>
      </div>
      
      {/* Main Image Container */}
      <div className="relative rounded-lg overflow-hidden border-2 md:border-4 border-white z-10 transform hover:scale-[1.02] transition-transform duration-300 w-full h-full">
        <img 
          src="https://i.pinimg.com/1200x/aa/79/a8/aa79a81e0310ddab1dfb3fa1bdb3a18e.jpg" 
          alt="Snapdragon Laptop"
          className="w-full h-full object-contain p-2"
        />
      </div>
      
      {/* Continuous Glow Animation */}
      <div className="absolute -inset-1 sm:-inset-2 rounded-lg overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-gray-950 opacity-10 md:opacity-20 rounded-lg animate-[pulse_3s_ease-in-out_infinite]"></div>
      </div>
    </div>
  </div>
</div>
);
};



export default ProductBanner;