"use client";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { GraduationCap } from "lucide-react";

import "aos/dist/aos.css";

export default function Faculty() {
  

  const facultyMembers = [
    {
      name: "Rizwan Ullah",
      designation: "Software Engineer & Web Developer",
      experience: "6 years teaching experience in IT",
      type: "Government Teacher",
      bio: "Expert in web development and IT technologies, passionate about teaching programming and networking.",
      img: "/teacher1.jpeg",
      linkedin: "#",
      email: "rizwan@example.com",
    },
    {
      name: "M Farooq",
      designation: "M.Phil Computer Science",
      experience: "12 years teaching experience",
      type: "Government Teacher",
      bio: "Experienced Computer Science educator with a focus on database systems and programming.",
      img: "/videos/teacher2.jpeg",
      linkedin: "#",
      email: "mfarooq@example.com",
    },
    {
      name: "Israr Ahmad",
      designation: "M.Phil English Instructor",
      experience: "Expert English Instructor",
      type: "Government Teacher",
      bio: "Specializes in advanced English language skills, academic writing, and communication.",
      img: "/teacher3.jpeg",
      linkedin: "#",
      email: "israr@example.com",
    },
    {
      name: "M Ijaz",
      designation: "English Trainer",
      experience: "Professional English Trainer",
      type: "English Instructor",
      bio: "Focused on spoken English, grammar enhancement, and practical language skills.",
      img: "/teacher4.jpeg",
      linkedin: "#",
      email: "mijaz@example.com",
    },
    {
      name: "M Abbas",
      designation: "Tuition Trainer",
      experience: "Specialized in Academic Support",
      type: "Tuition Trainer",
      bio: "Provides personalized tuition for school and college students with strong conceptual understanding.",
      img: "/teacher5.jpeg",
      linkedin: "#",
      email: "mabas@example.com",
    },
  ];

  return (
    <>
      {/* ================= Hero Section ================= */}
      <PageHero
        title="Our Faculty & Trainers"
        description="Meet the professional and experienced educators behind our academic excellence at The Nation English Language & Computer Academy."
        icon={<GraduationCap size={40} />}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Faculty" },
        ]}
      />

      <section className="bg-gray-50 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= Faculty Grid ================= */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {facultyMembers.map((faculty, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100} // stagger animation
                data-aos-once="true"
              >
                {/* Faculty Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={faculty.img}
                    alt={faculty.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4">
                    <p className="text-white text-sm">{faculty.bio}</p>
                    <div className="flex gap-4 mt-3 text-white text-xl">
                      <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                      </a>
                      <a href={`mailto:${faculty.email}`}>
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Faculty Info */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faculty.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{faculty.designation}</p>
                  <p className="text-xs text-gray-400 mt-1">{faculty.type}</p>
                  <p className="text-sm text-gray-600 mt-2">{faculty.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}