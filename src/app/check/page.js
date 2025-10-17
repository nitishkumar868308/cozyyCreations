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


"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cardsTop = [
    { title: "Elegant View", text: "Balanced design with smooth transitions." },
    { title: "Calm Spaces", text: "Compact and adaptive layout on all screens." },
];

const Page = () => {
    return (
        <div className="bg-white">
            {/* ================== Heading ================== */}
            <div className="py-6">
                <motion.h1
                    className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#4b5c46] tracking-wide relative inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Our Products
                    {/* Animated underline */}
                    <motion.span
                        className="absolute left-0 -bottom-2 w-full h-1.5 bg-[#698467] rounded-full origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    />
                </motion.h1>
            </div>

            {/* ================== Main Cards ================== */}
            <div className="flex flex-col md:flex-row gap-6 p-4 sm:p-6 lg:p-10">
                {/* Left Tall Card */}
                <motion.div
                    className="relative w-full md:w-1/2 h-[350px] sm:h-[400px] md:h-[800px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Image
                        src="/image/download3.jpg"
                        alt="Left Card"
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        priority
                    />
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ staggerChildren: 0.2 }}
                        variants={{
                            hidden: {},
                            visible: {},
                        }}
                    >
                        <motion.h2
                            className="text-2xl sm:text-3xl font-bold mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
                            variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        >
                            Nature’s Harmony
                        </motion.h2>
                        <motion.p
                            className="text-gray-100 text-sm sm:text-base leading-relaxed max-w-md mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                            variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                        >
                            Calm, elegant, and minimal — this left card matches the height of the right section.
                        </motion.p>
                        <motion.button
                            className="bg-[#ffffffee] text-[#698467] font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70"
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        >
                            Shop Now
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Right Cards */}
                <div className="w-full md:w-1/2 flex flex-col justify-between gap-5">
                    {/* Top Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
                        {cardsTop.map((card, index) => (
                            <motion.div
                                key={index}
                                className="relative h-[180px] sm:h-auto rounded-2xl overflow-hidden shadow-md"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.3 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Image
                                    src="/image/download3.jpg"
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <motion.div
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.15 }}
                                    variants={{ hidden: {}, visible: {} }}
                                >
                                    <motion.h3
                                        className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                                        variants={{ hidden: { y: -15, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                                    >
                                        {card.title}
                                    </motion.h3>
                                    <motion.p
                                        className="text-gray-100 text-xs sm:text-sm mb-6 max-w-[90%] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                                        variants={{ hidden: { x: -15, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                                    >
                                        {card.text}
                                    </motion.p>
                                    <motion.button
                                        className="bg-[#ffffffee] text-[#698467] font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70"
                                        variants={{ hidden: { y: 15, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                                    >
                                        Shop Now
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Wide Card */}
                    <motion.div
                        className="relative h-[180px] sm:h-[200px] md:h-[250px] rounded-2xl overflow-hidden shadow-md"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <Image
                            src="/image/download3.jpg"
                            alt="Discover Serenity"
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <motion.div
                            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ staggerChildren: 0.2 }}
                            variants={{ hidden: {}, visible: {} }}
                        >
                            <motion.h3
                                className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]"
                                variants={{ hidden: { y: -15, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            >
                                Discover Serenity
                            </motion.h3>
                            <motion.p
                                className="text-gray-100 mb-6 text-xs sm:text-sm md:text-base max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                                variants={{ hidden: { x: -15, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                            >
                                Clean, wide layout — perfectly balanced with left card height.
                            </motion.p>
                            <motion.button
                                className="bg-[#ffffffee] text-[#698467] font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70"
                                variants={{ hidden: { y: 15, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            >
                                Shop Now
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Page;
