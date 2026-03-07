"use client";

import {
  Palette,
  GraduationCap,
  Laptop,
  Mic,
  BookOpen,
  Globe,
  Sparkles,
} from "lucide-react";

export default function AnnouncementBar() {
  const announcements = [
    { icon: Laptop, text: "DIT – Diploma in Information Technology" },
    { icon: Palette, text: "Graphic Design & Programming Courses" },
    { icon: Mic, text: "Spoken English Course" },
    { icon: BookOpen, text: "English Grammar & Writing Skills" },
    { icon: Globe, text: "IELTS Preparation Classes" },
    { icon: GraduationCap, text: "Tuition Classes (Grade 1 – 12)" },
    { icon: Laptop, text: "Short Computer Courses – MS Office & Basic Computer" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#1f4e6e] via-[#255f85] to-[#1f4e6e] text-white border-b border-white/10">

      {/* Edge Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#1f4e6e] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#1f4e6e] to-transparent z-10" />

      <div className="flex items-center h-12">

        {/* New Courses Badge */}
        <div className="hidden md:flex items-center gap-2 px-4 ml-4 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-300 text-xs font-semibold animate-pulse z-20">
          <Sparkles size={14} />
          NEW COURSES
        </div>

        {/* Scrolling Area */}
        <div className="flex overflow-hidden whitespace-nowrap ml-6">

          <div className="flex animate-marquee hover:[animation-play-state:paused]">

            {[...announcements, ...announcements].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 mx-8 text-sm font-medium opacity-90 hover:opacity-100 transition"
                >
                  <Icon size={16} className="text-yellow-400" />

                  <span>{item.text}</span>

                  {/* Divider */}
                  <span className="mx-4 text-white/30">•</span>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </div>
  );
}