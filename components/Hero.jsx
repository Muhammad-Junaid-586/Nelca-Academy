"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaBook, FaHardHat } from "react-icons/fa";
import { Trophy, Star } from "lucide-react";
import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full bg-gradient-to-br from-[#1e4f6f] via-[#255d7f] to-[#1e4f6f] text-white">

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:35px_35px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-20 sm:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-yellow-400/40 px-4 sm:px-6 py-2 rounded-full text-yellow-300 text-xs sm:text-sm shadow">
            <Star size={16} />
            Established 2000 · Trusted by 5,000+ Students
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words">
            Empowering Futures <br />
            Through{" "}
            <span className="text-yellow-400">
              Quality Education
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 max-w-xl text-base sm:text-lg leading-relaxed">
            Pakistan's premier institute for English Language, Computer
            Technology, and Short courses. Build real skills, earn recognized
            certificates, and transform your career.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2 sm:pt-4">

            <Button />

            <Link
              href="#courses"
              className="inline-block border border-white px-6 sm:px-7 py-3 rounded-lg hover:bg-white hover:text-black transition transform hover:-translate-y-1"
            >
              Explore Courses
            </Link>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-10 w-full max-w-md text-center shadow-2xl"
          >

            {/* Animated Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-6 right-6 sm:right-10 bg-white text-gray-800 px-4 sm:px-5 py-2 rounded-xl shadow-md text-xs sm:text-sm font-medium"
            >
              <span className="text-green-600 mr-2">●</span>
              New Batch Starting Soon!
            </motion.div>

            {/* Icons */}
            <div className="flex justify-center gap-6 sm:gap-8 text-3xl sm:text-4xl mb-6 text-yellow-300">

              <motion.div whileHover={{ scale: 1.2 }} className="bg-white/10 p-3 sm:p-4 rounded-xl">
                <FaLaptopCode />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} className="bg-white/10 p-3 sm:p-4 rounded-xl">
                <FaBook />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} className="bg-white/10 p-3 sm:p-4 rounded-xl">
                <FaHardHat />
              </motion.div>

            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Computer · English · Tuition
            </h3>

            <p className="text-gray-200 text-sm">
              Professional certification programs designed for the modern world
            </p>

          </motion.div>

          {/* Trophy Badge */}
          <motion.div
            animate={{ x: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-2 sm:bottom-4 left-0 bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium"
          >
            <Trophy className="text-yellow-500" size={18} />
            Internationally Recognized
          </motion.div>

        </div>

      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 w-full h-20 sm:h-24 bg-gray-100 rounded-t-[100%]" />

    </section>
  );
}
