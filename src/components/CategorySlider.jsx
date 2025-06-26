import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { NavLink, } from "react-router-dom";
import { Camera, Gamepad, Headphones, Laptop, Smartphone, Watch } from "lucide-react";

const categories = [
  { label: "Phones", icon: <Smartphone/> },
  { label: "Smart Watches", icon: <Watch/> },
  { label: "Cameras", icon: <Camera/> },
  { label: "Headphones", icon: <Headphones/> },
  { label: "Computers", icon: <Laptop/> },
  { label: "Gaming", icon: <Gamepad/> },
  { label: "Phones", icon: <Smartphone/> },
  { label: "Smart Watches", icon: <Watch/> },
  { label: "Cameras", icon: <Camera/> },
  { label: "Headphones", icon: <Headphones/> },
  { label: "Computers", icon: <Laptop/> },
  { label: "Gaming", icon: <Gamepad/> },
];

const CategorySlider = () => {
  return (
    <div className="py-10 px-4 mt-20 bg-white container mx-auto dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold dark:text-white">
            Browse By Category
          </h2>
          <div className="flex items-center gap-2">
            <button className="swiper-button-prev w-8 h-8 flex items-center justify-center rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              
            </button>
            <button className="swiper-button-next w-8 h-8 flex items-center justify-center rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              
            </button>
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="category-swiper"
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <NavLink to={'/shop'} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <div className="text-3xl mb-2">{cat.icon}</div>
                <p className="text-sm font-medium dark:text-white">
                  {cat.label}
                </p>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
