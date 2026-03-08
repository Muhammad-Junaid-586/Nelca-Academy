"use client";

import {
  GraduationCap,
  FileText,
  Lightbulb,
  School,
  Calendar,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    desc: "All trainers hold industry-recognized qualifications and bring real-world professional experience to the classroom.",
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
  {
    icon: FileText,
    title: "Tuition Classes (1st – 12th)",
    desc: "Comprehensive tuition classes from Grade 1 to 12 with experienced teachers, concept-based learning, and strong preparation for school and board exams.",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    icon: Lightbulb,
    title: "Practical Training",
    desc: "Hands-on lab sessions, language practice rooms, and live project work ensure job-ready skills.",
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    icon: School,
    title: "Modern Facilities",
    desc: "Well-equipped computer labs, language labs, and training centers with up-to-date tools and software.",
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    icon: Calendar,
    title: "Flexible Schedules",
    desc: "Morning, evening, and weekend batches available for students, working professionals, and job seekers.",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Fees",
    desc: "Quality education at fair prices. Installment plans available to make learning accessible to everyone.",
    color: "text-green-600",
    bg: "bg-green-100",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
            Why Choose NELCA?
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Pakistan's Trusted Training Institute
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We combine qualified instructors, modern curriculum, and real-world
            training to help every student succeed.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 150} // stagger animation
                data-aos-once="true"
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-lg ${item.bg} ${item.color}`}
                >
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}