"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CountUp({ end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const step = end / (duration / 20);

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    {
      value: 5000,
      suffix: "+",
      label: "Graduates Produced",
    },
    {
      value: 10,
      suffix: "+",
      label: "Years of Excellence",
    },
    {
      value: 15,
      suffix: "+",
      label: "Courses Available",
    },
    {
      value: 95,
      suffix: "%",
      label: "Student Success Rate",
    },
  ];

  return (
    <section className="relative py-20 bg-[#1f4f6b] text-white overflow-hidden">

      {/* pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] [background-size:35px_35px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </h3>

              <p className="mt-3 text-gray-200 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}