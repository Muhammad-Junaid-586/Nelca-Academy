import { courses } from "../coursesData";
import {
  Clock,
  Award,
  CheckCircle,
  BookOpen,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function CourseDetails({ params }) {
  const { slug } = await params;

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const Icon = course.icon;

  return (
    <div className="bg-gray-50 min-h-screen pb-24">

      {/* ================= HERO ================= */}

      <div
        className={`relative overflow-hidden bg-gradient-to-r ${course.bg} text-white py-20`}
        data-aos="fade-down"
      >
        {/* Decorative circles */}
        <div className="absolute w-96 h-96 bg-white/20 blur-3xl rounded-full top-0 -right-16 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-white/10 blur-3xl rounded-full bottom-0 -left-16 animate-pulse-slow"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

          <span
            className="absolute top-6 right-6 inline-block bg-white text-gray-900 text-xs font-semibold px-5 py-2 rounded-full shadow-md"
            data-aos="fade-left"
          >
            {course.badge}
          </span>

          <div className="flex justify-center mb-6" data-aos="zoom-in">
            <div className="bg-white/20 backdrop-blur-lg p-6 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300">
              <Icon size={48} className="text-white" />
            </div>
          </div>

          <h1
            className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
            data-aos="fade-up"
          >
            {course.title}
          </h1>

          <p
            className="mt-3 text-sm opacity-90 uppercase tracking-wide"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {course.category}
          </p>

          <p
            className="mt-6 text-white/90 max-w-3xl mx-auto text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {course.overview}
          </p>

          <div
            className="flex justify-center gap-10 mt-8 text-sm text-white/90"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-white" />
              <span>{course.duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <Award size={18} className="text-white" />
              <span>{course.tag}</span>
            </div>
          </div>

        </div>
      </div>

      {/* ================= MAIN ================= */}

      <div className="max-w-6xl mx-auto px-6 mt-14 grid lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}

        <div className="lg:col-span-2 space-y-10">

          {/* WHAT YOU WILL LEARN */}

          {course.whatYouLearn && (
            <div
              className="bg-white p-8 rounded-2xl shadow-sm"
              data-aos="fade-right"
            >

              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Sparkles size={20} className="text-yellow-500" />
                What You Will Learn
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                {course.whatYouLearn.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                  >
                    <CheckCircle
                      size={18}
                      className="text-green-600 mt-1"
                    />

                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}

              </div>

            </div>
          )}

          {/* CURRICULUM */}

          {course.levels && (
            <div
              className="bg-white p-8 rounded-2xl shadow-sm"
              data-aos="fade-right"
            >

              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen size={20} />
                Course Curriculum
              </h2>

              <div className="space-y-4">

                {course.levels.map((level, i) => (
                  <details
                    key={i}
                    className="border rounded-xl p-5 group"
                  >

                    <summary className="cursor-pointer font-semibold text-gray-800 flex justify-between items-center">
                      {level.title}
                      <span className="text-sm text-gray-500 group-open:rotate-180 transition">
                        ▼
                      </span>
                    </summary>

                    <ul className="mt-4 list-disc ml-6 text-gray-600 space-y-1">
                      {level.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>

                  </details>
                ))}

              </div>

            </div>
          )}

          {/* CAREER */}

          {course.career && (
            <div
              className="bg-white p-8 rounded-2xl shadow-sm"
              data-aos="fade-right"
            >

              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap size={20} />
                Career Opportunities
              </h2>

              <ul className="grid md:grid-cols-2 gap-3">

                {course.career.map((job, i) => (
                  <li
                    key={i}
                    className="bg-gray-50 border rounded-lg p-3 text-gray-700"
                  >
                    {job}
                  </li>
                ))}

              </ul>

            </div>
          )}

        </div>

        {/* SIDEBAR */}

        <div
          className="space-y-6"
          data-aos="fade-left"
        >

          <div className="bg-white p-6 rounded-2xl shadow-md sticky top-24">

            <h3 className="text-lg font-semibold mb-4">
              Course Information
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Duration</span>
                <span className="font-medium">{course.duration}</span>
              </div>

              <div className="flex justify-between">
                <span>Category</span>
                <span className="font-medium">{course.category}</span>
              </div>

              <div className="flex justify-between">
                <span>Level</span>
                <span className="font-medium">{course.tag}</span>
              </div>
            </div>

            <Link
              href="/admissions"
              className="block w-full mt-6 bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-medium text-center transition"
            >
              Enroll Now
            </Link>

            <Link href="/contact">
              <button className="w-full mt-3 border border-blue-900 text-blue-900 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white transition">
                Ask a Question
              </button>
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}