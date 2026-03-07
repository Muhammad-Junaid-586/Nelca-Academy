import Image from "next/image";
import { CheckCircle, Monitor, Award } from "lucide-react";
import Link from "next/link";

export default function AboutInstitute() {
  return (
    <section className="w-full bg-gray-50 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE SECTION */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/nelca.jpeg"
              alt="Institute"
              width={700}
              height={500}
              className="object-cover w-full h-full hover:scale-105 transition duration-500"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-10 right-10 bg-white shadow-xl rounded-xl px-8 py-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600">11</h3>
            <p className="text-gray-600 text-sm">Years of Excellence</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="uppercase tracking-widest text-sm text-amber-600 font-semibold mb-2">
            About Our Institute
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Building Bright Futures Since 2000
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            The Nation English Language and Computer Academy was
            founded in 2015 with a clear mission: to provide accessible,
            high-quality education that prepares students for real-world
            challenges.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            We specialize in English language training, computer skills,
             and professional development — all under one
            roof. Our graduates are working across Pakistan and abroad.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full">
              Recognized Certifications
            </span>

            <span className="bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full">
              International Courses
            </span>

            <span className="bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              Career Support
            </span>
          </div>

          {/* FEATURES */}
          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <CheckCircle className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Qualified and Experienced Instructors
                </h4>
                <p className="text-gray-600 text-sm">
                  All faculty hold relevant degrees and industry experience to
                  deliver practical, results-driven training.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Monitor className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  State-of-the-Art Computer & Language Labs
                </h4>
                <p className="text-gray-600 text-sm">
                  Modern, well-maintained facilities equipped with the latest
                  software and technology.
                </p>
              </div>
            </div>

          </div>

          {/* BUTTON */}
          <div className="mt-6">
            <Link href="/about" className="mt-12 bg-blue-900 text-white px-7 py-3 rounded-lg shadow-md hover:bg-blue-800 transition duration-300">
            Learn More About Us →
          </Link>
          </div>

        </div>
      </div>
    </section>
  );
}