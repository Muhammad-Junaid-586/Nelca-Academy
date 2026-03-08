"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import "aos/dist/aos.css";

const PageHero = ({
  title,
  description,
  breadcrumbs = [],
  icon,
  bgColor = "bg-[#103759]",
}) => {

  

  return (
    <section className={`w-full ${bgColor} text-white py-16 md:py-22`}>
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Icon */}
        {icon && (
          <div
            className="flex justify-center mb-6 text-4xl opacity-90"
            data-aos="fade-down"
          >
            {icon}
          </div>
        )}

        {/* Title */}
        <h1
          className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          data-aos="fade-up"
        >
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p
            className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {description}
          </p>
        )}

        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav
            className="mt-8 flex justify-center text-sm text-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ol className="flex items-center gap-2 flex-wrap">
              {breadcrumbs.map((item, index) => (
                <li key={index} className="flex items-center gap-2">

                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-white transition"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white font-medium">
                      {item.label}
                    </span>
                  )}

                  {index !== breadcrumbs.length - 1 && (
                    <span className="opacity-60">›</span>
                  )}

                </li>
              ))}
            </ol>
          </nav>
        )}

      </div>
    </section>
  );
};

export default PageHero;