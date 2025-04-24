import React, { useState, useEffect } from "react";
import { axiosinstance } from "../../Config/axiosinstance";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Home = () => {
  const [HomeData, setHomeData] = useState([]);
console.log(HomeData,"hdata")
  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await axiosinstance.get("/admin/all");
        setHomeData(response.data.data);
      } catch (error) {
        console.error("Error fetching Home:", error);
      }
    };

    fetchHome();
  }, []);

  return (
    <div className="w-full bg-white text-gray-800 font-sans">

      {/* Banner Carousel */}
      <div className="px-4 mt-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-lg overflow-hidden shadow-md"
        >
          {(HomeData.length ? HomeData : [1, 2]).map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#dce8ff] flex flex-col md:flex-row items-center justify-between p-6 ">

                <div className="mb-4 md:mb-0">
                  <h2 className="text-xl font-semibold">{banner?.title || "Today's Deal"}</h2>
                  <h1 className="text-4xl font-bold mt-1">{banner?.subtitle || "50% OFF"}</h1>
                  <p className="text-sm mt-2">
                    {banner?.description ||
                      "On provider new booking. Earn more through subscriptions with cashback options."}
                  </p>
                  <button className="mt-4 bg-black text-white py-2 px-4 ">
                    {banner?.buttonText || "BUY IT NOW"}
                  </button>
                </div>
                <img
                  src={banner?.imageUrl || "/path-to-image.jpg"}
                  alt="Deal"
                  className="w-60 h-60 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Top Rated Freelancers */}
      <div className="mt-8">
        <div className="flex justify-between items-center px-4">
          <h2 className="text-lg font-bold">Top Rated Freelances</h2>
          <a href="#" className="text-blue-600 text-sm">View All</a>
        </div>
        <div className="flex space-x-4 overflow-x-auto mt-4 px-4 pb-2">
          {[1, 2, 3, 4, 5].map((item, i) => (
            <div key={i} className="flex flex-col items-center w-24">
              <img src="/path-to-avatar.jpg" className="w-16 h-16 rounded-full object-cover" alt="Freelancer" />
              <p className="text-xs mt-2 text-center">Miss Women Beautician</p>
              <div className="text-yellow-400 text-sm">4.8 ⭐</div>
            </div>
          ))}
        </div>
      </div>

     {/* Top Services */}
<div className="mt-8">
  <div className="flex justify-between items-center px-4">
    <h2 className="text-lg font-bold">Top Services</h2>
    <a href="#" className="text-blue-600 text-sm">View All</a>
  </div>

  <div className="space-y-4 mt-4 px-4">
    {/* Replace with actual direct video links if available */}
    {[
      {
        name: "Miss Zachary Will",
        desc: "Beautician - Special care your needs",
        rating: "4.9",
        Image: "https://i.pinimg.com/474x/8e/e2/fa/8ee2fab9651d9e11fcaf9d2396da8412.jpg", // sample
      },
      {
        name: "Sarah Glamour Pro",
        desc: "Facials & Skin Treatments",
        rating: "4.8",
        Image: "https://i.pinimg.com/474x/11/49/05/11490550f4cbb2d75823012cae182d28.jpg", // sample
      },
      {
        name: "Glow by Reena",
        desc: "Hair styling expert for every occasion",
        rating: "4.9",
        Image: "https://i.pinimg.com/474x/d7/5f/d4/d75fd4264c62e26e762386e4d427e628.jpg", // sample
      },
    ].map((item, i) => (
      <div key={i} className="flex bg-gray-100 rounded-lg p-4 items-center">
        <img
          className="w-50 h-50 rounded-lg object-cover mr-4"
          src={item.Image}
          
        />
        <div className="flex-1">
          <h3 className="font-bold text-base">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.desc}</p>
          <div className="text-yellow-500 text-sm">{item.rating} ⭐</div>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded">Shop Now</button>
      </div>
    ))}
  </div>
</div>

      {/* Best Bookings */}
      <div className="mt-8 px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Best Bookings</h2>
          <a href="#" className="text-blue-600 text-sm">View All</a>
        </div>

        {/* Deal Card */}
        <div className="bg-[#f0f4ff] p-4 mt-4 rounded-lg flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <p className="text-sm text-gray-500">Deal Of The Day</p>
            <h3 className="text-xl font-bold">Flat 60% OFF</h3>
            <p className="text-xs text-gray-500 mt-1">Flat 60% on all services booked via card</p>
            <div className="text-sm mt-2">06:34:16</div>
            <button className="mt-2 bg-black text-white py-2 px-4 rounded">Shop Now</button>
          </div>
          <img src="/path-to-model.jpg" alt="Deal Model" className="w-32 h-32 object-cover rounded-lg mt-4 md:mt-0 md:ml-6" />
        </div>

        {/* Booking Card */}
        <div className="bg-gray-100 p-4 mt-4 rounded-lg flex items-center">
          <img src="/path-to-booking.jpg" className="w-20 h-20 rounded-lg object-cover mr-4" alt="Booking" />
          <div className="flex-1">
            <h3 className="font-bold text-base">Miss Zachary Will</h3>
            <p className="text-sm text-gray-600">Discount on service from top notch customization</p>
            <div className="text-yellow-500 text-sm">4.6 ⭐</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
