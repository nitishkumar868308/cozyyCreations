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


// "use client";

// import React, { useEffect } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { fetchProducts } from "@/app/redux/slices/products/productSlice";
// import { useSelector, useDispatch } from "react-redux";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const NewProductPage = () => {
//     const { products } = useSelector((state) => state.products);
//     const dispatch = useDispatch();
//     console.log("products", products)
//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     return (
//         <div className="bg-white py-16 px-6 md:px-10 lg:px-16">
//             <h1 className="text-4xl md:text-6xl  text-[#4b5c46] mb-10 text-center" style={{ fontFamily: "Stalemate, cursive" }}>
//                 ✨ New Arrivals
//             </h1>

//             {products?.length === 0 ? (
//                 <p className="text-center text-gray-600">No new products available.</p>
//             ) : (
//                 <Swiper
//                     modules={[Navigation, Pagination, Autoplay]}
//                     navigation
//                     pagination={{ clickable: true }}
//                     autoplay={{ delay: 3000, disableOnInteraction: false }}
//                     spaceBetween={24}
//                     slidesPerView={1}
//                     breakpoints={{
//                         640: { slidesPerView: 1 },
//                         768: { slidesPerView: 2 },
//                         1024: { slidesPerView: 3 },
//                         1280: { slidesPerView: 4 },
//                     }}
//                     className="w-full"
//                 >
//                     {products?.map((product) => (
//                         <SwiperSlide key={product.id}>
//                             <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer">

//                                 {/* Product Image */}
//                                 <div className="relative w-full h-64 sm:h-72 md:h-80">
//                                     <Image
//                                         src={product?.image?.[0] || "/image/placeholder.png"}
//                                         alt={product.name}
//                                         fill
//                                         sizes="(max-width: 640px) 100vw, 
//                            (max-width: 1024px) 50vw, 
//                            (max-width: 1280px) 33vw, 
//                            25vw"
//                                         className="object-cover transition-transform duration-500 group-hover:scale-105"
//                                         priority={true}
//                                     />
//                                 </div>

//                                 {/* Product Info */}
//                                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-gray-800 font-semibold shadow-sm">
//                                     {product.currencySymbol}
//                                     {product.price}
//                                 </div>

//                                 {/* Bottom Overlay */}
//                                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col items-start">
//                                     <h2 className="text-lg sm:text-xl font-semibold text-white truncate">
//                                         {product.name}
//                                     </h2>
//                                     <button className="mt-3 px-4 py-1.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition">
//                                         View Details
//                                     </button>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             )}
//         </div>
//     );
// };

// export default NewProductPage;


"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/app/redux/slices/products/productSlice";

const NewProductPage = () => {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const fontStyle = { fontFamily: "Stalemate, cursive" };

    return (
        <div className="bg-[#f7f7f7] py-16 px-6 md:px-10 lg:px-16">
            <h1
                className="text-4xl md:text-6xl text-[#4b5c46] mb-12 text-center"
                style={fontStyle}
            >
                <span className="relative inline-block">
                    ✨ New Arrivals
                    <span className="absolute left-0 bottom-0 w-full h-1.5 bg-[#698467] rounded-full origin-center" />
                </span>
            </h1>


            {products?.length === 0 ? (
                <p className="text-center text-gray-600 text-lg" style={fontStyle}>
                    No new products available.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products?.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col"
                        >
                            {/* Product Image */}
                            <div className="relative w-full h-64 sm:h-72 md:h-80">
                                <Image
                                    src={product?.image?.[0] || "/image/placeholder.png"}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw"
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                    priority={true}
                                />
                            </div>

                            {/* Product Info */}
                            <div className="p-5 flex flex-col flex-1 justify-between">
                                <div>
                                    <h2
                                        className="text-xl md:text-4xl text-gray-800 mb-1 line-clamp-2"
                                        style={fontStyle}
                                    >
                                        {product.name}
                                    </h2>
                                    <p
                                        className="text-gray-700 mt-2 text-lg  md:text-3xl"
                                        style={fontStyle}
                                    >
                                        {product.currencySymbol}
                                        {product.price}
                                    </p>
                                </div>

                                <button
                                    className="mt-4 w-full px-4 py-2 bg-[#4b5c46] md:text-3xl text-white text-xl  rounded-2xl hover:bg-[#3a4737] transition-all duration-300"
                                    style={fontStyle}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Browse All Products Card */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center mt-6">
                        <button
                            className="px-6 py-3 md:px-6 md:py-3 bg-[#4b5c46] text-white rounded-2xl hover:bg-[#3a4737] transition-all duration-300 text-lg md:text-4xl"
                            style={fontStyle}
                        >
                            Browse All Products
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default NewProductPage;
