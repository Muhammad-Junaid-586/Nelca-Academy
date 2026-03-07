"use client";

import {
  Laptop,
  Users,
  Palette,
  Code,
  Clock,
  Award,
} from "lucide-react";
import Link from "next/link";

const courses = [
  {
    slug: "dit-diploma-in-it",
    icon: Laptop,
    title: "DIT – Diploma in IT",
    category: "Computer Courses",
    desc: "Comprehensive computer skills including MS Office, internet, and basic programming.",
    duration: "12 Months",
    tag: "Certification",
    badge: "Popular",
    bg: "from-blue-500 to-indigo-600",
  },
  {
    slug: "spoken-english",
    icon: Users,
    title: "Spoken English – All Levels",
    category: "English Language",
    desc: "Build fluency and confidence with structured levels from beginner to advanced.",
    duration: "3–6 Months",
    tag: "All Levels",
    badge: "Trending",
    bg: "from-green-500 to-emerald-600",
  },
  {
    slug: "graphic-design",
    icon: Palette,
    title: "Graphic Design",
    category: "Computer Courses",
    desc: "Master Photoshop, Illustrator, and CorelDRAW for professional design careers.",
    duration: "3 Months",
    tag: "Creative",
    badge: "Creative",
    bg: "from-purple-500 to-pink-600",
  },
  {
    slug: "tuition-classes",
    icon: Users,
    title: "Tuition Classes",
    category: "Academic Support",
    desc: "Personalized tuition classes for school and college students focusing on strong concepts and exam preparation.",
    duration: "Flexible",
    tag: "Academic",
    badge: "Recommended",
    bg: "from-emerald-500 to-green-600",
  },
  {
    slug: "computer-networking",
    icon: Code,
    title: "Computer Networking",
    category: "IT & Technology",
    desc: "Learn networking fundamentals including LAN, WAN, routing, switching, and network security.",
    duration: "3–6 Months",
    tag: "Technical",
    badge: "In Demand",
    bg: "from-indigo-500 to-blue-600",
  },
  {
    slug: "web-design-programming",
    icon: Code,
    title: "Web Design & Programming",
    category: "Computer Courses",
    desc: "Learn HTML, CSS, JavaScript, Python, and PHP to build modern responsive websites.",
    duration: "6 Months",
    tag: "Technical",
    badge: "Hot",
    bg: "from-indigo-500 to-purple-600",
  },
];

export default function CoursesSection() {
  return (
    <section className="bg-gray-50 py-24" id="courses">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-amber-600 font-semibold uppercase">
            Academic Programs
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Explore Our Courses
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose from our professional programs designed for modern careers.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
              >
                {/* TOP SECTION */}
                <div
                  className={`relative h-36 flex items-center justify-center bg-gradient-to-r ${course.bg}`}
                >
                  {/* Badge */}
                  <span className="absolute top-4 right-4 text-xs bg-white text-gray-800 font-semibold px-3 py-1 rounded-full shadow">
                    {course.badge}
                  </span>

                  {/* Icon */}
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl">
                    <Icon size={36} className="text-white" />
                  </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="p-7">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {course.title}
                  </h3>

                  <p className="text-xs uppercase text-gray-500 mt-1">
                    {course.category}
                  </p>

                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {course.desc}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-6 mt-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {course.duration}
                    </div>

                    <div className="flex items-center gap-1">
                      <Award size={14} />
                      {course.tag}
                    </div>
                  </div>

                  <Link href={`/courses/${course.slug}`}>
                    <button className="mt-6 w-full bg-blue-900 hover:bg-blue-800 text-white py-2.5 rounded-lg text-sm font-medium transition">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}