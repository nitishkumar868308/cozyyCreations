"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const rightCards = [
    {
        title: "Premium Plan",
        text: "Perfect for growing businesses looking for reliable solutions.",
        img: "/image/download3.jpg",
        price: 100,
        moreDetails: "Includes basic support, 5 projects, and analytics features."
    },
    {
        title: "Enterprise Plan",
        text: "Advanced features and priority support for large teams.",
        img: "/image/download3.jpg",
        price: 200,
        moreDetails: "All Premium features + dedicated support, unlimited projects, advanced analytics."
    }
];


const PriceSectionHomePage = () => {
    const [expandedIndex, setExpandedIndex] = React.useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="bg-white py-12">
            <div className=" mx-auto px-4 sm:px-6 lg:px-10">
                {/* ================== Section Heading ================== */}
                <motion.h2
                    className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#4b5c46] tracking-wide relative inline-block mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Our Pricing
                    <motion.span
                        className="absolute left-0 -bottom-2 w-full h-1.5 bg-[#698467] rounded-full origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    />
                </motion.h2>

                {/* ================== Cards ================== */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-10">
                    {/* Left Tall Card */}
                    <motion.div
                        className="relative w-full md:w-1/2 h-[350px] sm:h-[400px] md:h-[800px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 group cursor-pointer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <Image
                            src="/image/download3.jpg"
                            alt="Nature Harmony"
                            fill
                            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                        <motion.div
                            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 sm:p-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ staggerChildren: 0.2 }}
                            variants={{ hidden: {}, visible: {} }}
                        >
                            <motion.h3
                                className="text-2xl sm:text-3xl font-bold mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
                                variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            >
                                Nature’s Harmony
                            </motion.h3>
                            <motion.p
                                className="text-gray-100 mb-6 text-sm sm:text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] max-w-md"
                                variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                            >
                                Calm, elegant, and minimal — perfectly balanced with right cards.
                            </motion.p>
                            <motion.button
                                className="bg-[#ffffffee] text-[#698467] font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70"
                                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            >
                                Shop Now
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - 2 Wide Cards */}
                    {/* <div className="w-full md:w-1/2 flex flex-col justify-between gap-6 md:gap-8">
                        {rightCards.map((card, index) => (
                            <motion.div
                                key={index}
                                className="relative h-[220px] sm:h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-md group cursor-pointer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.3 }}
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                />
                                <motion.div
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ staggerChildren: 0.2 }}
                                    variants={{ hidden: {}, visible: {} }}
                                >
                                    <motion.h3
                                        className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]"
                                        variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                                    >
                                        {card.title}
                                    </motion.h3>
                                    <motion.p
                                        className="text-gray-100 mb-4 text-xs sm:text-sm md:text-base max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                                        variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                                    >
                                        {card.text}
                                    </motion.p>
                                    <p className="text-2xl font-bold mb-2">₹{card.price}</p>

                                </motion.div>
                                <motion.button
                                    className="bg-[#ffffffee] text-[#698467] font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70"
                                    variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                                >
                                    Shop Now
                                </motion.button>
                            </motion.div>

                        ))}
                    </div> */}

                    <div className="w-full md:w-1/2 flex flex-col justify-between gap-6 md:gap-8">
                        {rightCards.map((card, index) => (
                            <motion.div
                                key={index}
                                className="relative h-[220px] sm:h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-md group cursor-pointer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.3 }}
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <motion.div
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6 bg-black/30"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ staggerChildren: 0.2 }}
                                    variants={{ hidden: {}, visible: {} }}
                                >
                                    <motion.h3
                                        className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 drop-shadow-lg"
                                        variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                                    >
                                        {card.title}
                                    </motion.h3>
                                    <motion.p
                                        className="text-gray-100 mb-4 text-xs sm:text-sm md:text-base max-w-xl drop-shadow-lg"
                                        variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                                    >
                                        {card.text}
                                    </motion.p>
                                    <motion.p
                                        className="text-2xl font-bold mb-4 drop-shadow-lg"
                                        variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                                    >
                                        ₹{card.price}
                                    </motion.p>

                                    {/* Button */}
                                    <motion.button
                                        className="mt-2 bg-white/90 text-[#698467] font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:bg-[#698467] hover:text-white transition-all duration-300 border border-white/70 z-10"
                                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                                    >
                                        Shop Now
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </div >
    );
};

export default PriceSectionHomePage;
