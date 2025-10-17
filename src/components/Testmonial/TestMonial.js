"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TestMonial = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "CEO, TechCorp",
      text: "The product quality is outstanding. Packaging was premium and delivery was right on time. Definitely ordering again.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sneha Patel",
      role: "Marketing Head, BrandX",
      text: "Both the design and durability are impressive. The product was exactly as described. Hats off to the team!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Amit Verma",
      role: "Freelancer",
      text: "I loved the comfort and usability the most. For the price, it’s absolutely value for money.",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 font-functionPro">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className="pb-10"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl  p-10 md:p-12 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="bg-blue-100 p-4 rounded-full mb-6">
                  <FaQuoteLeft className="text-blue-500 text-4xl" />
                </div>
                <p className="text-gray-700 mb-8 italic text-base md:text-lg leading-relaxed">
                  "{item.text}"
                </p>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-blue-500 mb-4 shadow-lg object-cover"
                />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-sm md:text-base text-gray-500">{item.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestMonial;
