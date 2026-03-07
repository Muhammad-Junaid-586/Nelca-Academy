"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Institute", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Our Faculty", path: "/faculty" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const courses = [
    { name: "Computer Courses", slug: "dit-diploma-in-it" },
    { name: "English Language", slug: "spoken-english" },
    { name: "Tuition Classes", slug: "tuition-classes"  },
    { name: "Professional Skills", slug:  "web-design-programming" },
    { name: "Short Courses", slug:  "short-courses"  },
  ];

  const studentLinks = [
    "How to Apply",
    "Fee Structure",
    "Contact Admissions",
    "Campus Life",
  ];

  return (
    <footer className="bg-[#0b2a3c] text-gray-300 pt-20 pb-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-5">

        {/* ================= Institute Info ================= */}
        <div className="lg:col-span-2">

          <div className="flex items-start gap-3 mb-4">
            <Image
              src="/logo2.jpeg"
              alt="Institute Logo"
              width={50}
              height={50}
              className="rounded"
            />

            <div>
              <h3 className="text-white font-semibold text-lg leading-snug">
                The Nation English
                <br />
                Language & Computer Academy
              </h3>

              <p className="text-sm text-gray-400">
                Established 2015
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mt-4">
            Empowering students and professionals with world-class
            language, technology, and safety training since 2000.
          </p>

          {/* Contact */}
          <div className="mt-6 space-y-3 text-sm">

            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-400" />
              <span>Main Chowk Kacha Pakka Hangu</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-400" />
              <span>+92-3355100160, +92-3351952689</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" />
              <span>info@nelcaacademy.com</span>
            </div>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            <a
              href="https://facebook.com"
              target="_blank"
              className="bg-[#12364d] p-3 rounded-lg hover:bg-blue-600 transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://wa.me/923355100160"
              target="_blank"
              className="bg-[#12364d] p-3 rounded-lg hover:bg-green-600 transition"
            >
              <Phone size={18} />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              className="bg-[#12364d] p-3 rounded-lg hover:bg-red-600 transition"
            >
              <Youtube size={18} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="bg-[#12364d] p-3 rounded-lg hover:bg-blue-500 transition"
            >
              <Linkedin size={18} />
            </a>

          </div>
        </div>

        {/* ================= Quick Links ================= */}
        <div>

          <h4 className="text-white font-semibold text-lg mb-6">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">

            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="hover:text-yellow-400 transition flex items-center gap-2"
                >
                  <span className="text-yellow-400">›</span>
                  {link.name}
                </Link>
              </li>
            ))}

          </ul>
        </div>

        {/* ================= Courses ================= */}
        <div>

          <h4 className="text-white font-semibold text-lg mb-6">
            Our Courses
          </h4>

          <ul className="space-y-3 text-sm">

            {courses.map((course) => (
              <li key={course.slug}>
                <Link
                  href={`/courses/${course.slug}`}
                  className="hover:text-yellow-400 transition flex items-center gap-2"
                >
                  <span className="text-yellow-400">›</span>
                  {course.name}
                </Link>
              </li>
            ))}

          </ul>
        </div>

        {/* ================= Students ================= */}
        <div>

          <h4 className="text-white font-semibold text-lg mb-6">
            For Students
          </h4>

          <ul className="space-y-3 text-sm">

            {studentLinks.map((item) => (
              <li key={item}>
                <Link
                  href="/admissions"
                  className="hover:text-yellow-400 transition flex items-center gap-2"
                >
                  <span className="text-yellow-400">›</span>
                  {item}
                </Link>
              </li>
            ))}

          </ul>

        </div>

      </div>

      {/* ================= Bottom Bar ================= */}
      <div className="border-t border-gray-700 mt-14 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} The Nation English Language & Computer Academy. All rights reserved.
      </div>

    </footer>
  );
}