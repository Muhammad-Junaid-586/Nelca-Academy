"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Muhammad Junaid",
    department: "DIT Student",
    image: "/junaid.jpg",
    rating: 5,
    review:
      "The institute helped me gain real practical computer skills. The teachers are very supportive and the learning environment is excellent.",
  },
  {
    id: 2,
    name: "Ijaz Ahmad",
    department: "English Language Student",
    image: "/ijaz.jpg",
    rating: 5,
    review:
      "My communication skills improved a lot. The instructors focus on practical learning and confidence building.",
  },
  {
    id: 3,
    name: "Muhammad Mudasir",
    department: "DIT Student",
    image: "/mudasir.jpeg",
    rating: 4,
    review:
      "Modern labs, experienced teachers, and a great learning environment. This institute helped me start my professional career.",
  },
];

export default function StudentStories() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 font-semibold uppercase tracking-widest">
            Student Stories
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            What Our Students Say
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover how our students achieved their goals through our
            professional courses and dedicated instructors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 p-8 relative border border-gray-100 hover:-translate-y-2"
            >

              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-gray-200 w-10 h-10 group-hover:text-blue-100 transition" />

              {/* Stars */}
              <div className="flex mb-5">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                "{item.review}"
              </p>

              {/* Student Info */}
              <div className="flex items-center gap-4 border-t pt-6">

                <div className="relative w-12 h-12">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {item.name}
                  </h4>

                  <p className="text-sm text-blue-600 font-medium">
                    {item.department}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}