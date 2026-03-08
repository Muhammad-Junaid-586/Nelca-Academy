"use client";
import { useState } from "react";
import Image from "next/image";
import { Images, Play } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function Gallery() {
  const mediaItems = [
    { type: "image", src: "/test1.jpeg", caption: "Interactive Classroom Session" },
    { type: "image", src: "/topper1.jpeg", caption: "2nd Position (Board)" },
    { type: "image", src: "/topper2.jpeg", caption: "2nd Position (Board)" },
    { type: "image", src: "/eng1.jpeg", caption: "English Language Session" },
    { type: "image", src: "/img7.jpg", caption: "Home Work" },
    { type: "image", src: "/design1.jpeg", caption: "Home Work" },
    { type: "image", src: "/design2.jpeg", caption: "Home Work" },
    { type: "image", src: "/design3.jpeg", caption: "Home Work" },
    { type: "image", src: "/img1.jpeg", caption: "Teaching staff standing together" },
    { type: "image", src: "/adv1.jpeg", caption: "Student Activities" },
    { type: "image", src: "/pro1.jpeg", caption: "Student Activities" },
    { type: "video", src: "/videos/video1.mp4", caption: "Student Workshop Highlights" },
    { type: "video", src: "/videos/video3.mp4", caption: "ScholarShip Announcement" },
    { type: "video", src: "/videos/video6.mp4", caption: "ScholarShip Test" },
  ];

  const [videoModal, setVideoModal] = useState(null);

  return (
    <>
      <PageHero
        title="Gallery"
        description="Explore our classrooms, activities, and events that showcase the learning environment at Nelca Academy."
        icon={<Images size={40} />}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />

      <section className="bg-gray-50 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center mb-12" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Life at Nelca Academy
            </h2>
            <p className="mt-3 text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
              Explore our vibrant learning environment, interactive classrooms, extracurricular activities, student events, and the overall experience of being part of Nelca Academy.
            </p>
          </div>

          {/* ================= Media Grid ================= */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mediaItems.map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100} // stagger effect
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.caption}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div
                    className="relative w-full h-64 bg-black flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                    onClick={() => setVideoModal(item.src)}
                  >
                    <div className="absolute w-full h-full bg-black/40"></div>
                    <Play size={48} className="text-white z-10" />
                  </div>
                )}

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 bg-black/50 text-white px-4 py-2 text-sm">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Video Modal ================= */}
        {videoModal && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setVideoModal(null)}
          >
            <div className="relative w-full max-w-3xl h-96 md:h-[500px]">
              <video
                src={videoModal}
                controls
                autoPlay
                className="w-full h-full rounded-2xl shadow-lg object-cover"
              />
              <button
                onClick={() => setVideoModal(null)}
                className="absolute top-4 right-4 text-white text-2xl font-bold"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}