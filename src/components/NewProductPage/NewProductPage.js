// "use client";

// import React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const cars = [
//     { id: 1, name: "Tesla Model S", price: "$120,000", img: "/image/download3.jpg" },
//     { id: 2, name: "BMW X5", price: "$85,000", img: "/image/download4.jpg" },
//     { id: 3, name: "Audi Q8", price: "$95,000", img: "/image/download5.jpg" },
//     { id: 4, name: "Mercedes GLE", price: "$90,000", img: "/image/download5.jpg" },
// ];

// const NewProductPage = () => {
//     return (
//         <div className="bg-white flex flex-col items-center py-12 px-4">
//             <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">New Arrivals</h1>

//             <Swiper
//                 modules={[Navigation, Pagination, Autoplay]}
//                 navigation
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 3500, disableOnInteraction: false }}
//                 spaceBetween={20}
//                 slidesPerView={1}
//                 breakpoints={{
//                     640: { slidesPerView: 1 },
//                     768: { slidesPerView: 2 },
//                     1024: { slidesPerView: 3 },
//                     1280: { slidesPerView: 4 },
//                 }}
//                 className="w-full"
//             >
//                 {cars.map((car) => (
//                     <SwiperSlide key={car.id}>
//                         <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
//                             {/* Car Image */}
//                             <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
//                                 <Image src={car.img} alt={car.name} fill className="object-cover" />
//                             </div>

//                             {/* Overlay Price Badge */}
//                             <div className="absolute top-4 right-4 bg-white bg-opacity-70 text-gray-900 font-semibold px-4 py-2 rounded-xl backdrop-blur-sm shadow-md">
//                                 {car.price}
//                             </div>

//                             {/* Car Details */}
//                             <div className="p-5">
//                                 <h2 className="text-xl font-semibold text-gray-800">{car.name}</h2>
//                                 <p className="text-gray-600 mt-2">
//                                     Experience luxury and performance in every drive.
//                                 </p>
//                                 <button className="mt-5 w-full bg-[#1F2937] text-white py-2 rounded-xl hover:bg-gray-700 transition">
//                                     View Details
//                                 </button>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default NewProductPage;


"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cars = [
    { id: 1, name: "Tesla Model S", price: "$120,000", img: "/image/download3.jpg" },
    { id: 2, name: "BMW X5", price: "$85,000", img: "/image/download4.jpg" },
    { id: 3, name: "Audi Q8", price: "$95,000", img: "/image/download5.jpg" },
    { id: 4, name: "Mercedes GLE", price: "$90,000", img: "/image/download5.jpg" },
    { id: 5, name: "Tesla Model S", price: "$120,000", img: "/image/download3.jpg" },
    { id: 6, name: "BMW X5", price: "$85,000", img: "/image/download4.jpg" },
    { id: 7, name: "Audi Q8", price: "$95,000", img: "/image/download5.jpg" },
    { id: 8, name: "Mercedes GLE", price: "$90,000", img: "/image/download5.jpg" },
];

const NewProductPage = () => {
    return (
        <div className="bg-white py-12 px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">New Arrivals</h1>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className="w-full"
            >
                {cars.map((car) => (
                    <SwiperSlide key={car.id}>
                        <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                            {/* Car Image */}
                            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-80">
                                <Image src={car.img} alt={car.name} fill className="object-cover" />
                            </div>

                            {/* Overlay Price Badge */}
                            <div className="absolute top-4 left-4 bg-white bg-opacity-80 backdrop-blur-md px-3 py-1 rounded-lg text-gray-800 font-semibold shadow-sm">
                                {car.price}
                            </div>

                            {/* Car Details Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
                                <h2 className="text-lg sm:text-xl font-semibold text-white">{car.name}</h2>
                               
                                <button className="mt-2 px-4 py-1 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NewProductPage;
