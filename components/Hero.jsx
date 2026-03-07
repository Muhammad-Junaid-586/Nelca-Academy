"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaBook, FaHardHat } from "react-icons/fa";
import { Trophy, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1e4f6f] via-[#255d7f] to-[#1e4f6f] text-white">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:35px_35px]" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-yellow-400/40 px-6 py-2 rounded-full text-yellow-300 text-sm shadow">
            <Star size={16} />
            Established 2000 · Trusted by 5,000+ Students
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Empowering Futures <br />
            Through{" "}
            <span className="text-yellow-400">
              Quality Education
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 max-w-xl text-lg leading-relaxed">
            Pakistan's premier institute for English Language, Computer
            Technology, and Short courses. Build real skills, earn recognized
            certificates, and transform your career.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 md:pt-4">

            <Link href="/admissions"  className="bg-yellow-500 hover:bg-yellow-400 text-black px-7 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-1">
              Apply Now →
            </Link>

            <Link href="#courses" className="border border-white px-7 py-3 rounded-lg hover:bg-white hover:text-black transition transform hover:-translate-y-1">
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
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 w-full max-w-md text-center shadow-2xl"
          >

            {/* Animated New Batch Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-6 right-10 bg-white text-gray-800 px-5 py-2 rounded-xl shadow-md text-sm font-medium"
            >
              <span className="text-green-600 mr-2">●</span>
              New Batch Starting Soon!
            </motion.div>

            {/* Icons */}
            <div className="flex justify-center gap-8 text-4xl mb-6 text-yellow-300">

              <motion.div
                whileHover={{ scale: 1.2 }}
                className="bg-white/10 p-4 rounded-xl"
              >
                <FaLaptopCode />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2 }}
                className="bg-white/10 p-4 rounded-xl"
              >
                <FaBook />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2 }}
                className="bg-white/10 p-4 rounded-xl"
              >
                <FaHardHat />
              </motion.div>

            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Computer · English · Safety
            </h3>

            <p className="text-gray-200 text-sm">
              Professional certification programs designed for the modern world
            </p>

          </motion.div>

          {/* Trophy Badge */}
          <motion.div
            animate={{ x: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-4 left-0 bg-white text-gray-800 px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 font-medium"
          >
            <Trophy className="text-yellow-500" />
            Internationally Recognized
          </motion.div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 w-full h-24 bg-gray-100 rounded-t-[100%]" />

    </section>
  );
}