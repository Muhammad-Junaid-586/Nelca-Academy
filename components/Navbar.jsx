"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { courses } from "../app/courses/coursesData"; // adjust path if needed

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Admissions", href: "/admissions" },
    { name: "Faculty", href: "/faculty" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileCoursesOpen(false);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo1.jpeg"
              width={55}
              height={55}
              alt="The Nation English Logo"
              className="rounded-full border"
            />
           <div className="leading-tight">
  {/* Mobile Text */}
  <h1 className="text-[16px] font-semibold text-gray-800 sm:hidden text-outline">
    The NELCA
  </h1>

  {/* Desktop Text */}
  <div className="hidden sm:block">
    <h1 className="text-[17px] font-semibold text-gray-800">
      The Nation English
    </h1>
    <h2 className="text-[15px] font-semibold text-gray-800">
      Language & Computer
    </h2>
    <p className="text-xs text-gray-500">
      Academy Kahi Kacha Pakka
    </p>
  </div>
</div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-2 text-gray-700 font-medium">
            {/* Home & About */}
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.href} className="rounded-md">
                <Link
                  href={link.href}
                  className={`px-3 py-2 hover:text-blue-900 hover:bg-gray-100 transition rounded-md ${
                    isActive(link.href)
                      ? "text-blue-900 font-semibold border-b-2 border-blue-900"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Courses Dropdown */}
            <li className="relative group rounded-md">
              <button
                className={`flex items-center gap-1 px-3 py-2 hover:text-blue-900 hover:bg-gray-100 transition rounded-md ${
                  pathname.startsWith("/courses")
                    ? "text-blue-900 font-semibold border-b-2 border-blue-900"
                    : ""
                }`}
              >
                Courses
              </button>

              <ul className="absolute left-0 top-full mt-2 w-60 bg-white shadow-lg border rounded-md overflow-hidden opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                {courses.map((course) => (
                  <li key={course.slug}>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                    >
                      <course.icon size={18} /> {course.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Remaining Links */}
            {navLinks.slice(2).map((link) => (
              <li key={link.href} className="rounded-md">
                <Link
                  href={link.href}
                  className={`px-3 py-2 hover:text-blue-900 hover:bg-gray-100 transition rounded-md ${
                    isActive(link.href)
                      ? "text-blue-900 font-semibold border-b-2 border-blue-900"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Apply Button (Desktop) */}
          <div className="hidden lg:block">
            <Link
              href="/admissions"
              className="bg-blue-900 text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-800 transition duration-300 shadow-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {mobileOpen ? (
              <span className="text-xl font-bold">✕</span>
            ) : (
              <span className="text-xl font-bold">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-6 gap-2 text-gray-700 font-medium">
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.href} className="rounded-md">
              <Link
                href={link.href}
                onClick={closeMobileMenu}
                className="px-3 py-2 hover:bg-gray-100 rounded-md transition"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Mobile Courses Dropdown */}
          <li className="rounded-md">
            <button
              onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
              className="flex items-center justify-between w-full px-3 py-2 hover:bg-gray-100 rounded-md transition"
            >
              Courses
            </button>

            {mobileCoursesOpen && (
              <ul className="flex flex-col pl-4 mt-2 gap-2">
                {courses.map((course) => (
                  <li
                    key={course.slug}
                    className="flex items-center gap-2 rounded-md hover:bg-gray-100 transition px-2 py-1"
                  >
                    <course.icon size={18} />
                    <Link
                      href={`/courses/${course.slug}`}
                      onClick={closeMobileMenu}
                    >
                      {course.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {navLinks.slice(2).map((link) => (
            <li key={link.href} className="rounded-md">
              <Link
                href={link.href}
                onClick={closeMobileMenu}
                className="px-3 py-2 hover:bg-gray-100 rounded-md transition"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <Link
            href="/admissions"
            onClick={closeMobileMenu}
            className="bg-blue-900 text-white px-6 py-3 rounded-md mt-3 hover:bg-blue-800 transition"
          >
            Apply Now
          </Link>
        </ul>
      </div>
    </nav>
  );
}
