"use client";
import Image from "next/image";
import { BookOpen, Users, Laptop, Globe, Award, Info, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function About() {
  const facilities = [
    {
      icon: Laptop,
      title: "Computer Labs",
      desc: "Fully equipped computer labs for hands-on learning and modern technology exposure.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: BookOpen,
      title: "Library",
      desc: "Extensive collection of books and digital resources to enhance knowledge and research skills.",
      color: "from-amber-500 to-yellow-600",
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      desc: "Our teachers bring years of experience and expertise to guide students towards success.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Globe,
      title: "Language Lab",
      desc: "Interactive English language lab to improve communication and fluency for all levels.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Award,
      title: "Certifications",
      desc: "Certified programs for computer courses, English language, and tuition classes.",
      color: "from-indigo-500 to-blue-600",
    },
  ];

  return (
    <>
     <PageHero
      title="About Our Institute"
      description="Our history, mission, values, and the team behind The Nation English Language & Computer Academy's legacy of excellence."
      icon={<Info size={42} />}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About Us" }
      ]}
    />
    <section className="bg-gray-50">
      

     {/* ================= Our Story ================= */}
<div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
  {/* Text Content */}
  <div>
    <p className="text-blue-600 font-semibold uppercase tracking-wider mb-2">
     Our Story 
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
       Founded with a Vision to Serve
    </h2>
    <p className="text-gray-600 mb-4 leading-relaxed">
      Established with the vision to empower students from grade 1 to 12, The Nation English Language & Computer Academy Kahi Kacha Pakha combines modern teaching methodologies with practical skills development. 
    </p>
    <p className="text-gray-600 leading-relaxed">
      We focus on computer literacy, English language proficiency, and academic support, ensuring that our students excel both in education and in their future careers. Our commitment is to provide a safe, nurturing, and inspiring environment for learning.
    </p>
    <div className="mt-6 flex gap-4">
      <Link
  href="/admissions"
  className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
>
  Join Our Institute
  <ArrowRight size={18} />
</Link>
      
    </div>
  </div>

  {/* Image Content */}
  <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
    <Image
      src="/nelca.jpeg"
      alt="Our Institute Story"
      fill
      className="object-cover"
    />
  </div>
</div>

      {/* ================= Our Foundation - Mission, Vision, Values ================= */}
<div className="max-w-7xl mx-auto px-6 py-20 text-center">
  {/* Section Title */}
  <p className="text-blue-600 font-semibold uppercase tracking-wider mb-2">
    Our Foundation
  </p>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
    Mission, Vision & Values
  </h2>

  {/* Cards */}
  <div className="grid md:grid-cols-3 gap-10">
    {/* Mission */}
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition relative">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 text-2xl mb-4 mx-auto">
        {/* Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3.31 0-6 2.69-6 6 0 1.74.89 3.28 2.22 4.22M12 8c3.31 0 6 2.69 6 6 0 1.74-.89 3.28-2.22 4.22M12 8v10" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
      <p className="text-gray-600 leading-relaxed">
        To provide quality education and skill development that prepares students for academic and professional success.
      </p>
    </div>

    {/* Vision */}
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition relative">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600 text-2xl mb-4 mx-auto">
        {/* Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
      <p className="text-gray-600 leading-relaxed">
        To be the premier educational institute in Hangu, recognized for excellence, innovation, and student success.
      </p>
    </div>

    {/* Values */}
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition relative">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 text-yellow-600 text-2xl mb-4 mx-auto">
        {/* Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
      <p className="text-gray-600 leading-relaxed">
        Integrity, commitment, inclusivity, and innovation guide everything we do at our institute.
      </p>
    </div>
  </div>
</div>

      {/* ================= Our Facilities ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Facilities</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {facilities.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition group"
              >
                <div
                  className={`w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-r ${facility.color} mb-4`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {facility.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}