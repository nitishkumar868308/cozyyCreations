// "use client";
// import React from "react";
// import Image from "next/image";

// const Page = () => {
//     return (
//         <div className="min-h-screen bg-white flex flex-col md:flex-row gap-6 p-6">
//             {/* Left Tall Card */}
//             <div className="relative flex-1 md:max-w-[35%] rounded-2xl overflow-hidden">
//                 {/* Background Image */}
//                 <Image
//                     src="/image/download3.jpg"
//                     alt="Left Card"
//                     fill
//                     className="object-cover"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-[#698467]/70 flex flex-col justify-between p-6 text-white">
//                     <div>
//                         <h2 className="text-3xl font-semibold mb-4">Left Card (Tall)</h2>
//                         <p className="leading-relaxed text-gray-100">
//                             Ye card height me bada hai. Isme kuch description, image ya
//                             content aa sakta hai. Overlay ke sath ye modern aur clean lagta hai.
//                         </p>
//                     </div>
//                     <button className="mt-6 bg-white text-[#698467] font-medium py-2 px-4 rounded-lg hover:bg-[#5a705b] hover:text-white transition">
//                         Read More
//                     </button>
//                 </div>
//             </div>

//             {/* Right Side Cards */}
//             <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {/* Card 1 */}
//                 <div className="relative rounded-2xl overflow-hidden">
//                     <Image
//                         src="/image/download3.jpg"
//                         alt="Card 1"
//                         fill
//                         className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-[#698467]/70 flex flex-col justify-end p-6 text-white">
//                         <h3 className="text-2xl font-semibold mb-2">Right Card 1</h3>
//                         <p className="text-gray-100">
//                             Ye chhota card hai lekin width me lamba aur stylish.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="relative rounded-2xl overflow-hidden">
//                     <Image
//                         src="/image/download3.jpg"
//                         alt="Card 2"
//                         fill
//                         className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-[#698467]/70 flex flex-col justify-end p-6 text-white">
//                         <h3 className="text-2xl font-semibold mb-2">Right Card 2</h3>
//                         <p className="text-gray-100">
//                             Ye bhi same overlay style follow karega — responsive and elegant.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Optional Third Card */}
//                 <div className="relative rounded-2xl overflow-hidden sm:col-span-2">
//                     <Image
//                         src="/image/download3.jpg"
//                         alt="Card 3"
//                         fill
//                         className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-[#698467]/70 flex flex-col justify-end p-6 text-white">
//                         <h3 className="text-2xl font-semibold mb-2">Right Card 3 (Wide)</h3>
//                         <p className="text-gray-100">
//                             Ye full-width card responsive layout ke liye perfect hai.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;


// "use client";
// import React from "react";
// import Image from "next/image";

// const Page = () => {
//     return (
//         <div className="bg-white flex flex-col md:flex-row gap-6 p-6">
//             {/* Left Tall Card */}
//             <div className="relative flex-1 md:max-w-[35%] h-[500px] sm:h-[450px] md:h-[600px] rounded-2xl overflow-hidden">
//                 {/* Background Image */}
//                 <Image
//                     src="/image/download3.jpg"
//                     alt="Left Card"
//                     fill
//                     className="object-cover"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-[#698467]/70 flex flex-col items-center justify-center text-center p-6 text-white">
//                     <div className="max-w-[90%]">
//                         <h2 className="text-3xl md:text-4xl font-semibold mb-4">
//                             Left Card (Tall)
//                         </h2>
//                         <p className="text-gray-100 text-base md:text-lg leading-relaxed mb-6">
//                             Ye card height me bada hai. Image ke upar centered text aur button
//                             use karke clean aur modern design create kiya gaya hai.
//                         </p>
//                         <button className="bg-white text-[#698467] font-medium py-2 px-6 rounded-lg hover:bg-[#5a705b] hover:text-white transition-all duration-300">
//                             Read More
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Right Side Cards */}
//             <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {/* Card 1 */}
//                 <div className="relative h-[250px] sm:h-[280px] md:h-[300px] rounded-2xl overflow-hidden">
//                     <Image
//                         src="/image/download3.jpg"
//                         alt="Card 1"
//                         fill
//                         className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-[#698467]/70 flex flex-col items-center justify-center text-center text-white p-6">
//                         <h3 className="text-2xl font-semibold mb-2">Right Card 1</h3>
//                         <p className="text-gray-100 text-sm md:text-base max-w-[90%]">
//                             Ye chhota card hai lekin centered content ke sath stylish lagta
//                             hai.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="relative h-[250px] sm:h-[280px] md:h-[300px] rounded-2xl overflow-hidden">
//                     <Image
//                         src="/image/download3.jpg"
//                         alt="Card 2"
//                         fill
//                         className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-[#698467]/70 flex flex-col items-center justify-center text-center text-white p-6">
//                         <h3 className="text-2xl font-semibold mb-2">Right Card 2</h3>
//                         <p className="text-gray-100 text-sm md:text-base max-w-[90%]">
//                             Same elegant overlay, responsive layout aur clean UI design.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Optional Third Card */}
//                 <div className="relative h-[280px] sm:h-[300px] md:h-[350px] rounded-2xl overflow-hidden sm:col-span-2">
//                     <Image
//                         src="/image/download3.jpg"
//                         alt="Card 3"
//                         fill
//                         className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-[#698467]/70 flex flex-col items-center justify-center text-center text-white p-6">
//                         <h3 className="text-2xl md:text-3xl font-semibold mb-2">
//                             Right Card 3 (Wide)
//                         </h3>
//                         <p className="text-gray-100 text-sm md:text-base max-w-[90%]">
//                             Ye full-width card responsive layout ke liye perfect hai — clean,
//                             centered aur balanced design ke sath.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;


// "use client";
// import React from "react";
// import Image from "next/image";

// const Page = () => {
//     return (
//         <div className="bg-white flex flex-col md:flex-row gap-6 p-4 sm:p-6">
//             {/* ✅ Left Tall Card */}
//             <div className="relative w-full md:w-1/3 h-[400px] sm:h-[450px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden">
//                 {/* Background Image */}
//                 <Image
//                     src="/image/download3.jpg"
//                     alt="Left Card"
//                     fill
//                     className="object-cover transition-transform duration-500 hover:scale-105"
//                     priority
//                 />

//                 {/* Overlay Content */}
//                 <div className="absolute inset-0 bg-[#698467]/70 flex flex-col items-center justify-center text-center px-4 sm:px-6 text-white">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
//                         Nature’s Harmony
//                     </h2>
//                     <p className="text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mb-6">
//                         Peaceful, elegant, and minimal — ye left card responsive height ke
//                         sath sab screen pe perfect dikhega.
//                     </p>
//                     <button className="bg-white text-[#698467] font-medium py-2 px-6 rounded-lg hover:bg-[#5a705b] hover:text-white transition-all duration-300">
//                         Explore More
//                     </button>
//                 </div>
//             </div>

//             {/* ✅ Right Cards */}
//             <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {/* Card 1 */}
//                 <div className="relative h-[250px] sm:h-[280px] md:h-[300px] rounded-2xl overflow-hidden">
//                     <Image
//                         src="/image/download3.jpg"
//                         alt="Card 1"
//                         fill
//                         className="object-cover transition-transform duration-500 hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-[#698467]/70 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6">
//                         <h3 className="text-xl sm:text-2xl font-semibold mb-2">
//                             Elegant View
//                         </h3>
//                         <p className="text-gray-100 text-sm sm:text-base max-w-[90%]">
//                             Centered overlay text aur soft green tone ke sath balanced design.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="relative h-[250px] sm:h-[280px] md:h-[300px] rounded-2xl overflow-hidden">
//                     <Image
//                         src="/image/download3.jpg"
//                         alt="Card 2"
//                         fill
//                         className="object-cover transition-transform duration-500 hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-[#698467]/70 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6">
//                         <h3 className="text-xl sm:text-2xl font-semibold mb-2">
//                             Calm Spaces
//                         </h3>
//                         <p className="text-gray-100 text-sm sm:text-base max-w-[90%]">
//                             Fully responsive layout — mobile pe stack aur desktop pe side by
//                             side.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Wide Card */}
//                 <div className="relative h-[280px] sm:h-[320px] md:h-[350px] rounded-2xl overflow-hidden sm:col-span-2">
//                     <Image
//                         src="/image/download3.jpg"
//                         alt="Card 3"
//                         fill
//                         className="object-cover transition-transform duration-500 hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-[#698467]/70 flex flex-col items-center justify-center text-center text-white p-4 sm:p-8">
//                         <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
//                             Discover Serenity
//                         </h3>
//                         <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-2xl">
//                             Ye wide card pure width leke elegant look deta hai — soft hover
//                             animation aur modern responsive layout ke sath.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;


// "use client";
// import React from "react";
// import Image from "next/image";

// const Page = () => {
//     return (
//         <div className="bg-white flex flex-col md:flex-row gap-5 p-4 sm:p-6 lg:p-10">
//             {/* ✅ Left Tall Card */}
//             <div className="relative w-full md:w-1/2 h-[350px] sm:h-[400px] md:h-[800px] rounded-2xl overflow-hidden shadow-md flex-shrink-0">
//                 <Image
//                     src="/image/download3.jpg"
//                     alt="Left Card"
//                     fill
//                     className="object-cover transition-transform duration-500 hover:scale-105"
//                     priority
//                 />
//                 <div className="absolute inset-0  flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
//                     <h2 className="text-2xl sm:text-3xl font-bold mb-3">
//                         Nature’s Harmony
//                     </h2>
//                     <p className="text-gray-100 text-sm sm:text-base leading-relaxed max-w-md mb-5">
//                         Calm, elegant, and minimal — this left card matches the height of the right section.
//                     </p>
//                     <button className="bg-white text-[#698467] font-medium py-2 px-6 rounded-lg hover:bg-[#5a705b] hover:text-white transition-all duration-300">
//                         Explore More
//                     </button>
//                 </div>
//             </div>

//             {/* ✅ Right Equal Height Section */}
//             <div className="w-full md:w-1/2 flex flex-col justify-between gap-5">
//                 {/* Top Row (2 Cards) */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
//                     {/* Card 1 */}
//                     <div className="relative h-[180px] sm:h-auto rounded-2xl overflow-hidden shadow-md">
//                         <Image
//                             src="/image/download3.jpg"
//                             alt="Card 1"
//                             fill
//                             className="object-cover transition-transform duration-500 hover:scale-105"
//                         />
//                         <div className="absolute inset-0  flex flex-col items-center justify-center text-center text-white p-4 sm:p-6">
//                             <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
//                                 Elegant View
//                             </h3>
//                             <p className="text-gray-100 text-xs sm:text-sm max-w-[90%]">
//                                 Balanced design with smooth transitions.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Card 2 */}
//                     <div className="relative h-[180px] sm:h-auto rounded-2xl overflow-hidden shadow-md">
//                         <Image
//                             src="/image/download3.jpg"
//                             alt="Card 2"
//                             fill
//                             className="object-cover transition-transform duration-500 hover:scale-105"
//                         />
//                         <div className="absolute inset-0  flex flex-col items-center justify-center text-center text-white p-4 sm:p-6">
//                             <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
//                                 Calm Spaces
//                             </h3>
//                             <p className="text-gray-100 text-xs sm:text-sm max-w-[90%]">
//                                 Compact and adaptive layout on all screens.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Wide Card */}
//                 <div className="relative h-[180px] sm:h-[200px] md:h-[250px] rounded-2xl overflow-hidden shadow-md">
//                     <Image
//                         src="/image/download3.jpg"
//                         alt="Card 3"
//                         fill
//                         className="object-cover transition-transform duration-500 hover:scale-105"
//                     />
//                     <div className="absolute inset-0  flex flex-col items-center justify-center text-center text-white p-4 sm:p-8">
//                         <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
//                             Discover Serenity
//                         </h3>
//                         <p className="text-gray-100 text-xs sm:text-sm md:text-base max-w-2xl">
//                             Clean, wide layout — perfectly balanced with left card height.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;


// "use client";
// import React from "react";
// import Image from "next/image";

// const cardsTop = [
//     { title: "Elegant View", text: "Balanced design with smooth transitions." },
//     { title: "Calm Spaces", text: "Compact and adaptive layout on all screens." },
// ];

// const Page = () => {
//     return (
//         <>
//             {/* ================== Heading ================== */}
//             <div className="bg-white py-6">
//                 <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#4b5c46] tracking-wide">
//                     <span className="relative inline-block">
//                         Our Products
//                         {/* Static underline */}
//                         <span className="absolute left-0 -bottom-2 w-full h-1.5 bg-[#698467] rounded-full"></span>
//                     </span>
//                 </h1>
//             </div>


//             {/* ================== Main Cards ================== */}
//             <div className="bg-white flex flex-col md:flex-row gap-6 p-4 sm:p-6 lg:p-10">
//                 {/* Left Tall Card */}
//                 <div className="relative w-full md:w-1/2 h-[350px] sm:h-[400px] md:h-[800px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 opacity-0 animate-fadeInCard">
//                     <Image
//                         src="/image/download3.jpg"
//                         alt="Left Card"
//                         fill
//                         className="object-cover transition-transform duration-500 hover:scale-105"
//                         priority
//                     />
//                     <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
//                         <h2 className="text-2xl sm:text-3xl font-bold mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
//                             Nature’s Harmony
//                         </h2>
//                         <p className="text-gray-100 text-sm sm:text-base leading-relaxed max-w-md mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
//                             Calm, elegant, and minimal — this left card matches the height of the right section.
//                         </p>
//                         <button className="bg-[#ffffffee] text-[#698467] font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70">
//                             Shop Now
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right Cards */}
//                 <div className="w-full md:w-1/2 flex flex-col justify-between gap-5">
//                     {/* Top Row */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
//                         {cardsTop.map((card, index) => (
//                             <div
//                                 key={index}
//                                 className="relative h-[180px] sm:h-auto rounded-2xl overflow-hidden shadow-md opacity-0 animate-fadeInCard"
//                                 style={{ animationDelay: `${0.2 * (index + 1)}s` }}
//                             >
//                                 <Image
//                                     src="/image/download3.jpg"
//                                     alt={card.title}
//                                     fill
//                                     className="object-cover transition-transform duration-500 hover:scale-105"
//                                 />
//                                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6">
//                                     <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
//                                         {card.title}
//                                     </h3>
//                                     <p className="text-gray-100 text-xs sm:text-sm mb-6 max-w-[90%] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
//                                         {card.text}
//                                     </p>
//                                     <button className="bg-[#ffffffee] text-[#698467] font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70">
//                                         Shop Now
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Bottom Wide Card */}
//                     <div className="relative h-[180px] sm:h-[200px] md:h-[250px] rounded-2xl overflow-hidden shadow-md opacity-0 animate-fadeInCard" style={{ animationDelay: '0.6s' }}>
//                         <Image
//                             src="/image/download3.jpg"
//                             alt="Discover Serenity"
//                             fill
//                             className="object-cover transition-transform duration-500 hover:scale-105"
//                         />
//                         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-8">
//                             <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]">
//                                 Discover Serenity
//                             </h3>
//                             <p className="text-gray-100 mb-6 text-xs sm:text-sm md:text-base max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
//                                 Clean, wide layout — perfectly balanced with left card height.
//                             </p>
//                             <button className="bg-[#ffffffee] text-[#698467] font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70">
//                                 Shop Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* ================== Animations ================== */}
//             <style jsx global>{`
//         /* Heading fade-in */
//         @keyframes fadeIn {
//           0% { opacity: 0; transform: translateY(10px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-out forwards;
//         }

//         /* Cards fade-in + upward movement */
//         @keyframes fadeInCard {
//           0% { opacity: 0; transform: translateY(20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeInCard {
//           animation: fadeInCard 0.8s ease-out forwards;
//         }

//         /* Animated underline */
//         @keyframes underlineGrow {
//           0% { transform: scaleX(0); }
//           100% { transform: scaleX(1); }
//         }
//         .animate-underline {
//           animation: underlineGrow 1s ease-out forwards;
//           transform-origin: left;
//           display: block;
//         }
//       `}</style>
//         </>
//     );
// };

// export default Page;


// "use client";
// import React, { useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fetchCategories } from "@/app/redux/slices/addCategory/addCategorySlice";
// import { useDispatch, useSelector } from "react-redux";

// const cardsTop = [
//     { title: "Elegant View", text: "Balanced design with smooth transitions." },
//     { title: "Calm Spaces", text: "Compact and adaptive layout on all screens." },
// ];

// const Page = () => {
//     const dispatch = useDispatch();
//     const { categories } = useSelector((state) => state.category);
//     console.log("categories", categories)
//     useEffect(() => {
//         dispatch(fetchCategories());
//     }, [dispatch]);
//     return (
//         <div className="bg-white">
//             {/* ================== Heading ================== */}
//             <div className="py-6">
//                 <motion.h1
//                     className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#4b5c46] tracking-wide relative inline-block"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true, amount: 0.5 }}
//                 >
//                     Our Products
//                     {/* Animated underline */}
//                     <motion.span
//                         className="absolute left-0 -bottom-2 w-full h-1.5 bg-[#698467] rounded-full origin-left"
//                         initial={{ scaleX: 0 }}
//                         whileInView={{ scaleX: 1 }}
//                         transition={{ duration: 1, ease: "easeOut" }}
//                         viewport={{ once: true, amount: 0.5 }}
//                     />
//                 </motion.h1>
//             </div>

//             {/* ================== Main Cards ================== */}
//             <div className="flex flex-col md:flex-row gap-6 p-4 sm:p-6 lg:p-10">
//                 {/* Left Tall Card */}
//                 <motion.div
//                     className="relative w-full md:w-1/2 h-[350px] sm:h-[400px] md:h-[800px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true, amount: 0.4 }}
//                 >
//                     <Image
//                         src="/image/download3.jpg"
//                         alt="Left Card"
//                         fill
//                         className="object-cover transition-transform duration-500 hover:scale-105"
//                         priority
//                     />
//                     <motion.div
//                         className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6"
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.4 }}
//                         transition={{ staggerChildren: 0.2 }}
//                         variants={{
//                             hidden: {},
//                             visible: {},
//                         }}
//                     >
//                         <motion.h2
//                             className="text-2xl sm:text-3xl font-bold mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
//                             variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
//                         >
//                             Nature’s Harmony
//                         </motion.h2>
//                         <motion.p
//                             className="text-gray-100 text-sm sm:text-base leading-relaxed max-w-md mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
//                             variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
//                         >
//                             Calm, elegant, and minimal — this left card matches the height of the right section.
//                         </motion.p>
//                         <motion.button
//                             className="bg-[#ffffffee] text-[#698467] font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70"
//                             variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
//                         >
//                             Shop Now
//                         </motion.button>
//                     </motion.div>
//                 </motion.div>

//                 {/* Right Cards */}
//                 {/* Right Cards – showing categories dynamically */}
//                 <div className="w-full md:w-1/2 flex flex-col justify-between gap-5">
//                     {/* Top Categories Grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
//                         {categories && categories.length > 0 ? (
//                             categories.slice(0, 3).map((cat, index) => (
//                                 <motion.div
//                                     key={cat.id || index}
//                                     className="relative h-[200px] sm:h-[220px] md:h-[250px] rounded-2xl overflow-hidden shadow-md group"
//                                     initial={{ opacity: 0, y: 30 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.8, delay: index * 0.2 }}
//                                     viewport={{ once: true, amount: 0.5 }}
//                                 >
//                                     <Image
//                                         src={cat.image.startsWith("http") ? cat.image : `${process.env.NEXT_PUBLIC_API_URL || ""}${cat.image}`}
//                                         alt={cat.name}
//                                         fill
//                                         className="object-cover transition-transform duration-500 group-hover:scale-105"
//                                         unoptimized
//                                     />
//                                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
//                                     <motion.div
//                                         className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
//                                         initial="hidden"
//                                         whileInView="visible"
//                                         viewport={{ once: true, amount: 0.4 }}
//                                         transition={{ staggerChildren: 0.15 }}
//                                     >
//                                         <motion.h3
//                                             className="text-lg sm:text-xl font-semibold mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
//                                             variants={{ hidden: { y: -15, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
//                                         >
//                                             {cat.name}
//                                         </motion.h3>
//                                         <motion.button
//                                             className="bg-[#ffffffee] text-[#698467] font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70"
//                                             variants={{ hidden: { y: 15, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
//                                         >
//                                             Shop Now
//                                         </motion.button>
//                                     </motion.div>
//                                 </motion.div>
//                             ))
//                         ) : (
//                             <p className="text-gray-500 text-center col-span-2">No categories found.</p>
//                         )}
//                     </div>

//                     {/* Bottom Category (last one wide) */}
//                     {categories && categories.length > 3 && (
//                         <motion.div
//                             className="relative h-[200px] sm:h-[220px] md:h-[260px] rounded-2xl overflow-hidden shadow-md group"
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8, delay: 0.3 }}
//                             viewport={{ once: true, amount: 0.4 }}
//                         >
//                             <Image
//                                 src={categories[3].image.startsWith("http") ? categories[3].image : `${process.env.NEXT_PUBLIC_API_URL || ""}${categories[3].image}`}
//                                 alt={categories[3].name}
//                                 fill
//                                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//                                 unoptimized
//                             />
//                             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
//                             <motion.div
//                                 className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4"
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ once: true, amount: 0.4 }}
//                                 transition={{ staggerChildren: 0.2 }}
//                             >
//                                 <motion.h3
//                                     className="text-xl sm:text-2xl font-semibold mb-2 drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]"
//                                     variants={{ hidden: { y: -15, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
//                                 >
//                                     {categories[3].name}
//                                 </motion.h3>
//                                 <motion.button
//                                     className="bg-[#ffffffee] text-[#698467] font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70"
//                                     variants={{ hidden: { y: 15, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
//                                 >
//                                     Shop Now
//                                 </motion.button>
//                             </motion.div>
//                         </motion.div>
//                     )}
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Page;


// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { fetchCategories } from "@/app/redux/slices/addCategory/addCategorySlice";
// import { useDispatch, useSelector } from "react-redux";

// const Page = () => {
//   const dispatch = useDispatch();
//   const { categories } = useSelector((state) => state.category);

//   const [activeCategory, setActiveCategory] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   const activeCategories = categories ? categories.filter(cat => cat.active) : [];

//   useEffect(() => {
//   if (activeCategories.length > 0) {
//     setActiveCategory(activeCategories[0]); // Default: first active category
//   }
// }, [activeCategories]);


//   return (
//     <div className="bg-white py-10">
//       {/* ================== Heading ================== */}
//       <div className="pb-6">
//         <motion.h1
//           className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#4b5c46] tracking-wide relative inline-block"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           Our Products
//           <motion.span
//             className="absolute left-0 -bottom-2 w-full h-1.5 bg-[#698467] rounded-full origin-left"
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.5 }}
//           />
//         </motion.h1>
//       </div>

//       {/* ================== Main Layout ================== */}
//       <div className="flex flex-col md:flex-row gap-6 px-4 sm:px-6 lg:px-10">
//         {/* ---------- Left: Feature Card (Auto Height) ---------- */}
//         <motion.div
//           key={activeCategory?.id}
//           className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl flex-shrink-0 md:h-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <AnimatePresence mode="wait">
//             {activeCategory && (
//               <motion.div
//                 key={activeCategory.id}
//                 initial={{ opacity: 0, scale: 0.97 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="relative w-full h-full min-h-[350px]"
//               >
//                 <Image
//                   src={
//                     activeCategory.image?.startsWith("http")
//                       ? activeCategory.image
//                       : `${process.env.NEXT_PUBLIC_API_URL || ""}${activeCategory.image}`
//                   }
//                   alt={activeCategory.name}
//                   fill
//                   className="object-cover transition-transform duration-500"
//                   unoptimized
//                 />
//                 <div className="absolute inset-0 bg-black/40"></div>

//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
//                   <h2 className="text-3xl sm:text-4xl font-bold mb-3 drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
//                     {activeCategory.name}
//                   </h2>
//                   <p className="text-gray-200 text-base sm:text-lg mb-6 max-w-md leading-relaxed">
//                     Discover premium {activeCategory.name} crafted to elevate your lifestyle.
//                   </p>
//                   <button className="bg-[#ffffffee] text-[#698467] font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70">
//                     Shop Now
//                   </button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>

//         {/* ---------- Right: Dynamic Grid ---------- */}
//         <div
//           className={`
//             w-full md:w-1/2 
//             grid gap-5
//             ${activeCategories.length <= 4 ? "grid-cols-2" : activeCategories.length <= 6 ? "grid-cols-3" : "grid-cols-4"} 
//             auto-rows-[200px] sm:auto-rows-[220px]
//           `}
//         >
//           {activeCategories && activeCategories.length > 0 ? (
//             activeCategories.map((cat, index) => (
//               <motion.div
//                 key={cat.id || index}
//                 className={`relative rounded-2xl overflow-hidden shadow-md group cursor-pointer ${
//                   activeCategory?.id === cat.id ? "ring-2 ring-[#698467]" : ""
//                 }`}
//                 onClick={() => setActiveCategory(cat)}
//                 whileHover={{ scale: 1.02 }}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Image
//                   src={
//                     cat.image.startsWith("http")
//                       ? cat.image
//                       : `${process.env.NEXT_PUBLIC_API_URL || ""}${cat.image}`
//                   }
//                   alt={cat.name}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   unoptimized
//                 />
//                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>

//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
//                   <h3 className="text-lg sm:text-xl font-semibold mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
//                     {cat.name}
//                   </h3>
//                   <button className="bg-[#ffffffee] text-[#698467] font-semibold py-1.5 px-5 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70 text-sm">
//                     View
//                   </button>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <p className="text-gray-500 text-center col-span-full">No categories found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { fetchCategories } from "@/app/redux/slices/addCategory/addCategorySlice";
// import { useDispatch, useSelector } from "react-redux";

// const Page = () => {
//     const dispatch = useDispatch();
//     const { categories } = useSelector((state) => state.category);

//     const [activeCategory, setActiveCategory] = useState(null);

//     // Fetch categories
//     useEffect(() => {
//         dispatch(fetchCategories());
//     }, [dispatch]);

//     // Filter only active categories
//     const activeCategories = categories ? categories.filter(cat => cat.active) : [];

//     // Default first active category
//     useEffect(() => {
//         if (activeCategories.length > 0) {
//             setActiveCategory(activeCategories[0]);
//         }
//     }, [activeCategories]);

//     return (
//         <div className="bg-white py-10">
//             {/* Heading */}
//             <div className="pb-6">
//                 <motion.h1
//                     className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#4b5c46] tracking-wide relative inline-block"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true, amount: 0.5 }}
//                 >
//                     Our Products
//                     <motion.span
//                         className="absolute left-0 -bottom-2 w-full h-1.5 bg-[#698467] rounded-full origin-left"
//                         initial={{ scaleX: 0 }}
//                         whileInView={{ scaleX: 1 }}
//                         transition={{ duration: 1, ease: "easeOut" }}
//                         viewport={{ once: true, amount: 0.5 }}
//                     />
//                 </motion.h1>
//             </div>

//             {/* Main Layout */}
//             <div className="flex flex-col md:flex-row gap-6 px-4 sm:px-6 lg:px-10">
//                 {/* Left: Big Feature Card */}
//                 <motion.div
//                     key={activeCategory?.id}
//                     className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl flex-shrink-0 md:h-[800px]"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <AnimatePresence mode="wait">
//                         {activeCategory && (
//                             <motion.div
//                                 key={activeCategory.id}
//                                 initial={{ opacity: 0, scale: 0.97 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 exit={{ opacity: 0 }}
//                                 transition={{ duration: 0.6 }}
//                                 className="relative w-full h-full"
//                             >
//                                 <Image
//                                     src={
//                                         activeCategory.image?.startsWith("http")
//                                             ? activeCategory.image
//                                             : `${process.env.NEXT_PUBLIC_API_URL || ""}${activeCategory.image}`
//                                     }
//                                     alt={activeCategory.name}
//                                     fill
//                                     className="object-cover transition-transform duration-500"
//                                     unoptimized
//                                 />
//                                 <div className="absolute inset-0 bg-black/40"></div>
//                                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
//                                     <h2 className="text-3xl sm:text-4xl font-bold mb-3 drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
//                                         {activeCategory.name}
//                                     </h2>
//                                     <p className="text-gray-200 text-base sm:text-lg mb-6 max-w-md leading-relaxed">
//                                         Discover premium {activeCategory.name} crafted to elevate your lifestyle.
//                                     </p>
//                                     <button className="bg-[#ffffffee] text-[#698467] font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70">
//                                         Shop Now
//                                     </button>
//                                 </div>
//                             </motion.div>
//                         )}
//                     </AnimatePresence>
//                 </motion.div>

//                 {/* Right: Dynamic Grid */}
//                 <div className="w-full md:w-1/2 flex flex-col gap-5">
//                     <div
//                         className={`grid gap-5 ${activeCategories.length <= 3 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
//                             }`}
//                     >
//                         {activeCategories.map((cat) => (
//                             <motion.div
//                                 key={cat.id}
//                                 className={`relative h-[200px] sm:h-[220px] rounded-2xl overflow-hidden shadow-md group cursor-pointer ${activeCategory?.id === cat.id ? "ring-2 ring-[#698467]" : ""
//                                     }`}
//                                 onClick={() => setActiveCategory(cat)}
//                                 whileHover={{ scale: 1.02 }}
//                             >
//                                 <Image
//                                     src={
//                                         cat.image.startsWith("http")
//                                             ? cat.image
//                                             : `${process.env.NEXT_PUBLIC_API_URL || ""}${cat.image}`
//                                     }
//                                     alt={cat.name}
//                                     fill
//                                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                                     unoptimized
//                                 />
//                                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
//                                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
//                                     <h3 className="text-lg sm:text-xl font-semibold mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
//                                         {cat.name}
//                                     </h3>
//                                     <button className="bg-[#ffffffee] text-[#698467] font-semibold py-1.5 px-5 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70 text-sm">
//                                         View
//                                     </button>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>

//                     {/* Bottom Wide Card (selected category preview) */}
//                     {activeCategory && (
//                         <motion.div
//                             key={activeCategory.id}
//                             className="relative h-[200px] sm:h-[220px] md:h-[260px] rounded-2xl overflow-hidden shadow-md mt-5"
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6 }}
//                         >
//                             <Image
//                                 src={
//                                     activeCategory.image?.startsWith("http")
//                                         ? activeCategory.image
//                                         : `${process.env.NEXT_PUBLIC_API_URL || ""}${activeCategory.image}`
//                                 }
//                                 alt={activeCategory.name}
//                                 fill
//                                 className="object-cover transition-transform duration-500"
//                                 unoptimized
//                             />
//                             <div className="absolute inset-0 bg-black/40"></div>
//                             <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
//                                 <h3 className="text-xl sm:text-2xl font-semibold mb-2 drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]">
//                                     {activeCategory.name}
//                                 </h3>
//                                 <button className="bg-[#ffffffee] text-[#698467] font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70">
//                                     Shop Now
//                                 </button>
//                             </div>
//                         </motion.div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;

// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fetchCategories } from "@/app/redux/slices/addCategory/addCategorySlice";
// import { useDispatch, useSelector } from "react-redux";

// const Page = () => {
//     const dispatch = useDispatch();
//     const { categories } = useSelector((state) => state.category);
//     const [activeCategory, setActiveCategory] = useState(null);

//     useEffect(() => {
//         dispatch(fetchCategories());
//     }, [dispatch]);

//     const activeCategories = categories ? categories.filter((cat) => cat.active) : [];

//     useEffect(() => {
//         if (activeCategories.length > 0) setActiveCategory(activeCategories[0]);
//     }, [activeCategories]);

//     return (
//         <div className="bg-white min-h-screen flex flex-col py-6 px-4 sm:px-6 lg:px-10">
//             {/* Heading */}
//             <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#4b5c46] relative inline-block mb-6">
//                 Our Products
//                 <span className="absolute left-0 -bottom-2 w-full h-1.5 bg-[#698467] rounded-full origin-left" />
//             </h1>

//             {/* Main Layout */}
//             <div className="flex flex-1 gap-6 overflow-hidden flex-col md:flex-row">
//                 {/* Left Column */}
//                 <motion.div
//                     layout
//                     className="relative md:flex-1 rounded-2xl overflow-hidden shadow-xl min-h-[400px] md:min-h-[600px]"
//                 >
//                     {activeCategory && (
//                         <motion.div
//                             key={activeCategory.id}
//                             layout
//                             initial={{ opacity: 0, scale: 0.98 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             exit={{ opacity: 0, scale: 0.98 }}
//                             transition={{ duration: 0.5 }}
//                             className="relative w-full h-full"
//                         >
//                             <Image
//                                 src={
//                                     activeCategory.image?.startsWith("http")
//                                         ? activeCategory.image
//                                         : `${process.env.NEXT_PUBLIC_API_URL || ""}${activeCategory.image}`
//                                 }
//                                 alt={activeCategory.name}
//                                 fill
//                                 className="object-cover"
//                                 unoptimized
//                             />
//                             <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
//                                 <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white drop-shadow-md">
//                                     {activeCategory.name}
//                                 </h2>
//                                 <p className="text-white text-sm sm:text-base mb-4 max-w-xs">
//                                     Discover premium {activeCategory.name} crafted to elevate your lifestyle.
//                                 </p>
//                                 <button className="bg-white/90 text-[#698467] font-semibold py-2 px-6 rounded-lg shadow hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70">
//                                     Shop Now
//                                 </button>
//                             </div>
//                         </motion.div>
//                     )}
//                 </motion.div>

//                 {/* Right Column */}
//                 <div className="md:flex-1 flex flex-col gap-4">
//                     {/* Grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 flex-1 overflow-auto">
//                         {activeCategories.map((cat) => (
//                             <motion.div
//                                 key={cat.id}
//                                 layout
//                                 className={`relative h-[120px] sm:h-[140px] md:h-[160px] rounded-xl overflow-hidden shadow-md cursor-pointer border-2 ${activeCategory?.id === cat.id ? "border-[#698467]" : "border-transparent"
//                                     }`}
//                                 onClick={() => setActiveCategory(cat)}
//                             // whileHover removed
//                             >
//                                 <Image
//                                     src={
//                                         cat.image.startsWith("http")
//                                             ? cat.image
//                                             : `${process.env.NEXT_PUBLIC_API_URL || ""}${cat.image}`
//                                     }
//                                     alt={cat.name}
//                                     fill
//                                     className="object-cover"
//                                     unoptimized
//                                 />
//                                 <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
//                                     <h3 className="text-white text-sm sm:text-base font-semibold drop-shadow-md">
//                                         {cat.name}
//                                     </h3>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>


//                     {/* Wide Card */}
//                     {activeCategory && (
//                         <motion.div
//                             key={activeCategory.id}
//                             layout
//                             className="relative h-[180px] sm:h-[200px] md:h-[220px] rounded-xl overflow-hidden shadow-md mt-2"
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.4 }}
//                         >
//                             <Image
//                                 src={
//                                     activeCategory.image?.startsWith("http")
//                                         ? activeCategory.image
//                                         : `${process.env.NEXT_PUBLIC_API_URL || ""}${activeCategory.image}`
//                                 }
//                                 alt={activeCategory.name}
//                                 fill
//                                 className="object-cover"
//                                 unoptimized
//                             />
//                             <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-2">
//                                 <h3 className="text-base sm:text-lg font-semibold text-white drop-shadow-md">
//                                     {activeCategory.name}
//                                 </h3>
//                                 <button className="bg-white/90 text-[#698467] font-semibold py-1 px-6 rounded-lg shadow hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70 text-sm mt-1">
//                                     Shop Now
//                                 </button>
//                             </div>
//                         </motion.div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;



"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fetchCategories } from "@/app/redux/slices/addCategory/addCategorySlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubcategories } from "@/app/redux/slices/subcategory/subcategorySlice";
import Link from "next/link";

const Page = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.category);
    const { subcategories } = useSelector((state) => state.subcategory);
    const [activeCategory, setActiveCategory] = useState(null);
    console.log("subcategories", subcategories)
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchSubcategories());
    }, [dispatch]);

    const activeCategories = categories ? categories.filter((cat) => cat.active) : [];

    useEffect(() => {
        if (activeCategories.length > 0 && !activeCategory) {
            setActiveCategory(activeCategories[0]);
        }
    }, [activeCategories]);

    return (
        <div className="bg-white min-h-screen flex flex-col py-6 px-4 sm:px-6 lg:px-10">
            {/* Heading */}
            <div className="w-full text-left">
                <h1
                    className="text-3xl sm:text-4xl md:text-6xl text-[#4b5c46] relative text-center mb-6"
                    style={{ fontFamily: "Stalemate, cursive" }}
                >
                    <span className="relative inline-block">
                        Our Products
                        <span className="absolute left-0 bottom-0 w-full h-1.5 bg-[#698467] rounded-full origin-center" />
                    </span>
                </h1>
            </div>


            {/* Main Layout */}
            <div className="flex flex-col md:flex-row flex-1 gap-6 h-auto md:h-full">

                {/* Left Column */}
                <div className="relative md:flex-1 rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[400px] md:h-auto flex-shrink-0 bg-white">
                    <AnimatePresence mode="wait">
                        {activeCategory && (
                            <motion.div
                                key={activeCategory.id}
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 0.5 }}
                                className="relative w-full h-full"
                            >
                                {/* Background Image */}
                                <Image
                                    src={
                                        activeCategory.image?.startsWith("http")
                                            ? activeCategory.image
                                            : `${process.env.NEXT_PUBLIC_API_URL || ""}${activeCategory.image}`
                                    }
                                    alt={activeCategory.name}
                                    fill
                                    className="object-cover brightness-[0.9]" // darken background slightly for better contrast
                                    unoptimized
                                />

                                {/* Overlay layer with cards */}
                                <div className="absolute inset-0   p-4 sm:p-6 overflow-auto">
                                    {(() => {
                                        const filteredSubs = subcategories.filter(
                                            (sub) => sub.categoryId === activeCategory.id && sub.active
                                        );

                                        if (filteredSubs.length === 0) {
                                            return (
                                                <div className="flex flex-col items-center justify-center text-center h-full">
                                                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white drop-shadow-md">
                                                        {activeCategory.name}
                                                    </h2>
                                                    <p className="text-white text-sm sm:text-base mb-4 max-w-xs">
                                                        Discover premium {activeCategory.name} crafted to elevate your lifestyle.
                                                    </p>
                                                    <Link
                                                        href={`/categories?category=${encodeURIComponent(activeCategory.name)}&subcategory=All`}
                                                    >
                                                        <button className="bg-white/90 text-[#698467] font-semibold py-1 px-6 rounded-lg shadow hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70 text-sm mt-1">
                                                            Shop Now
                                                        </button>
                                                    </Link>
                                                </div>
                                            );
                                        }

                                        return (
                                            <div
                                                className="grid gap-4 sm:gap-6 w-full h-full justify-center"
                                                style={{
                                                    gridTemplateColumns:
                                                        filteredSubs.length === 1
                                                            ? "1fr"
                                                            : filteredSubs.length === 2
                                                                ? "repeat(2, 1fr)"
                                                                : "repeat(3, 1fr)",
                                                }}
                                            >
                                                {filteredSubs.map((sub) => (
                                                    <div
                                                        key={sub.id}
                                                        className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 aspect-[4/3]"
                                                    >
                                                        <Image
                                                            src={
                                                                sub.image.startsWith("http")
                                                                    ? sub.image
                                                                    : `${process.env.NEXT_PUBLIC_API_URL || ""}/${sub.image.replace(/^\/+/, "")}`
                                                            }
                                                            alt={sub.name}
                                                            fill
                                                            className="object-cover opacity-80 hover:opacity-100 transition-all"
                                                            unoptimized
                                                        />
                                                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-2">
                                                            <h3
                                                                className="text-white text-sm sm:text-base font-semibold drop-shadow-md mb-1 leading-snug line-clamp-2"
                                                                title={sub.name}
                                                            >
                                                                {sub.name}
                                                            </h3>
                                                            <Link
                                                                href={`/categories?category=${encodeURIComponent(activeCategory.name)}&subcategory=${encodeURIComponent(sub.name)}`}
                                                            >
                                                                <button className="bg-white/90 text-[#698467] text-xs font-semibold py-1 px-3 rounded-lg shadow hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70">
                                                                    Shop Now
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                    })()}
                                </div>




                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right Column */}
                <div className="md:flex-1 flex flex-col gap-4 h-full">
                    {/* Wide Card */}
                    <AnimatePresence mode="wait">
                        {activeCategory && (
                            <motion.div
                                key={activeCategory.id + "-wide"}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.4 }}
                                className="relative h-[180px] sm:h-[200px] md:h-[220px] rounded-xl overflow-hidden shadow-md flex-shrink-0"

                            >
                                <Image
                                    src={
                                        activeCategory.image?.startsWith("http")
                                            ? activeCategory.image
                                            : `${process.env.NEXT_PUBLIC_API_URL || ""}${activeCategory.image}`
                                    }
                                    alt={activeCategory.name}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-2">
                                    <h3 className="text-base sm:text-lg font-semibold text-white drop-shadow-md">
                                        {activeCategory.name}
                                    </h3>
                                    <Link
                                        href={`/categories?category=${encodeURIComponent(activeCategory.name)}&subcategory=All`}
                                    >
                                        <button className="bg-white/90 text-[#698467] font-semibold py-1 px-6 rounded-lg shadow hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70 text-sm mt-1">
                                            Shop Now
                                        </button>
                                    </Link>

                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {/* Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 flex-1 overflow-auto">
                        {activeCategories.map((cat) => {
                            const isActive = activeCategory?.id === cat.id;

                            return (
                                <div
                                    key={cat.id}
                                    className={`relative h-[90px] sm:h-[130px] md:h-[150px] rounded-xl overflow-hidden shadow-md cursor-pointer border-2 ${isActive ? "border-[#698467]" : "border-transparent"
                                        }`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    <Image
                                        src={
                                            cat.image.startsWith("http")
                                                ? cat.image
                                                : `${process.env.NEXT_PUBLIC_API_URL || ""}${cat.image}`
                                        }
                                        alt={cat.name}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-2">
                                        <h3
                                            className="text-white text-xs sm:text-sm md:text-base font-semibold drop-shadow-md mb-1 leading-snug line-clamp-2"
                                            title={cat.name}
                                        >
                                            {cat.name}
                                        </h3>

                                        <button
                                            className={`font-semibold py-1 px-3 rounded-lg shadow text-[10px] sm:text-xs border border-white/70 transition-all duration-300
                                                ${isActive
                                                    ? "bg-[#698467] text-white"
                                                    : "bg-white/90 text-[#698467] hover:bg-[#698467] hover:text-white"
                                                }`}
                                        >
                                            View
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Page;

