import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import axios from 'axios';

const BannerCarousel = () => {
  const [banners, setBanners] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Fetch active banners from backend
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get('/api/banners/active');
        setBanners(response.data.data);
      } catch (error) {
        console.error('Error fetching banners', error);
      }
    };
    fetchBanners();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setTransitionEnabled(true);
    setCurrentSlide(index);
  };

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] overflow-hidden">
      {/* Slides container */}
      <div
        className={`flex h-full transition-transform duration-700 ease-in-out ${transitionEnabled ? '' : 'transition-none'}`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`flex-shrink-0 w-full h-full ${banner.bgColor} ${banner.textColor} relative`}
          >
            <div className="container mx-auto h-full flex flex-col md:flex-row items-center">
              {/* Content */}
              <div className="w-full md:w-1/2 px-4 sm:px-6 lg:px-8 py-4 md:py-0 z-10">
                {banner.brand && <p className="text-sm sm:text-base font-medium mb-1">{banner.brand}</p>}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{banner.title}</h2>
                {banner.subtitle && <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4">{banner.subtitle}</h3>}
                {banner.price && <p className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{banner.price}</p>}
                {banner.offer && <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-4">{banner.offer}</p>}
                <button className="px-4 sm:px-6 py-1 sm:py-2 bg-black text-white rounded-md hover:bg-gray-800 transition text-sm sm:text-base">
                  {banner.cta}
                </button>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center order-1 md:order-2">
                <img
                  src={banner.imageUrl}
                  alt={banner.title}
                  className="h-full w-auto object-contain p-2 sm:p-4"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button onClick={prevSlide} className="hidden sm:block absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-1 sm:p-2 rounded-full shadow-md hover:bg-opacity-100 transition z-10">
        <FiChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      <button onClick={nextSlide} className="hidden sm:block absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-1 sm:p-2 rounded-full shadow-md hover:bg-opacity-100 transition z-10">
        <FiChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;