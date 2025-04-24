import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-black bg-opacity-80 rounded-lg overflow-hidden shadow-lg">
        
        {/* Left: Contact Text Box */}
        <div className="w-full md:w-1/2 p-8 border-4 border-yellow-400 rounded-lg m-4">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. 
            Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
            sit amet commodo magna eros quis urna.
          </p>
        </div>

        {/* Right: Contact Info */}
        <div className="w-full md:w-1/2 p-8 flex flex-col gap-6 justify-center">
          <div className="flex items-center space-x-4">
            <img src="https://img.icons8.com/ios-filled/24/ffffff/new-post.png" alt="email" />
            <span className="text-white text-sm">www.slideuplift.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src="https://img.icons8.com/ios-filled/24/ffffff/phone.png" alt="phone" />
            <span className="text-white text-sm">+000 1234 2345</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src="https://img.icons8.com/ios-filled/24/ffffff/marker.png" alt="location" />
            <span className="text-white text-sm">ABC road, New York</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
