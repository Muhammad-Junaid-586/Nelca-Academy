"use client";

import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function AdmissionCTA() {
  return (
    <section className="relative py-20 bg-[#1f4f6b] text-white overflow-hidden">

      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] [background-size:35px_35px]" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Ready to Transform Your Career?
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
          Join thousands of successful graduates who have built their careers
          through our professional courses. Admissions are open —
          <span className="font-semibold text-white"> limited seats available.</span>
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          {/* Apply Button */}
          <Link href="/admissions" className="group bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-yellow-300 transition flex items-center justify-center gap-2">

            Apply for Admission

            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>

          {/* Contact Button */}
          <Link href="/contact" className="group border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1f4f6b] transition flex items-center justify-center gap-2">

            <Phone className="w-5 h-5" />

            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}