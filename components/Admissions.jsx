"use client";

import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Online Application",
    description:
      "Fill out the online admission form with your basic details, contact information, and selected course. Make sure all information is complete and accurate.",
  },
  {
    id: 2,
    title: "Submit Documents",
    description:
      "Upload clear scans or photos of your ID, academic certificates, and a recent passport-size photograph through the portal.",
  },
  {
    id: 3,
    title: "Application Review",
    description:
      "The admissions committee will review your application and documents. If needed, you may be invited for a short online or phone interview.",
  },
  {
    id: 4,
    title: "Fee Payment",
    description:
      "Once your application is approved, you will receive fee details and payment instructions. The fee must be paid within the given deadline.",
  },
  {
    id: 5,
    title: "Enrollment Confirmation",
    description:
      "After the payment is received, you will get a confirmation of enrollment along with your class schedule and joining instructions by email or WhatsApp.",
  },
];

const courseConfig = {
  DIT: {
    label: "Diploma in Information Technology (DIT)",
    eligibility: [
      "Minimum qualification: Matric / 10th grade or equivalent from a recognized board.",
      "Basic understanding of computers is preferred but not mandatory.",
      "Ability to read and understand basic English for technical terms.",
    ],
    requirements: [
      "Copy of Matric / 10th grade mark sheet or equivalent certificate.",
      "Copy of national ID card or B-form (for under 18).",
      "2 recent passport-size photographs.",
      "Course application form duly filled and signed.",
    ],
  },
  HIFZ: {
    label: "Hifz‑ul‑Quran Program",
    eligibility: [
      "Basic ability to read Qur'an with correct pronunciation (Nazra).",
      "Age typically between 10 to 25 years (flexible as per institute policy).",
      "Strong commitment to daily memorization and revision.",
    ],
    requirements: [
      "Copy of birth certificate or national ID / B‑form.",
      "Character certificate from previous school / madrasa (if applicable).",
      "2 recent passport-size photographs.",
      "Parent/guardian consent form (for minors).",
    ],
  },
};

const defaultCourseConfig = {
  label: "General Course",
  eligibility: [
    "Applicant should meet the minimum educational requirement specified for the selected course.",
    "Applicant should agree to follow the institute’s code of conduct and academic policies.",
  ],
  requirements: [
    "Copy of a valid national ID card or equivalent.",
    "Copy of latest academic certificate or transcript.",
    "Recent passport-size photograph.",
  ],
};

export default function AdmissionsPage() {
  const courseKey = "DIT"; // change to "HIFZ" or any other
  const course = courseConfig[courseKey] || defaultCourseConfig;

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="w-full py-12 px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div
          className="max-w-4xl mx-auto mb-10 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Admissions & Enrollment Process
          </h1>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg">
            Below is a 5‑step overview of our admission process, followed by
            eligibility and required documents for the selected course.
          </p>
        </div>

        {/* Course badge */}
        <div
          className="max-w-3xl mx-auto mb-8 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-5 py-1.5 text-sm font-medium text-emerald-700 border border-emerald-100">
            Course: {course.label}
          </span>
        </div>

        {/* 5-step process */}
        <div className="max-w-5xl mx-auto grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.id}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 150}
              data-aos-once="true"
              className="flex flex-col items-center lg:items-start bg-white rounded-xl shadow-md border border-slate-200 p-5 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-600 text-white font-semibold mb-3 text-sm sm:text-lg">
                {step.id}
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-slate-800 mb-1.5 text-center lg:text-left">
                {step.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-center lg:text-left">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="max-w-4xl mx-auto my-10 border-t border-dashed border-slate-300"
          data-aos="fade-up"
          data-aos-duration="800"
        />

        {/* Eligibility & Requirements */}
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
          {/* Eligibility */}
          <div
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4">
              Eligibility Criteria
            </h2>
            <ul className="space-y-3">
              {course.eligibility.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-1 w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4">
              Required Documents
            </h2>
            <ul className="space-y-3">
              {course.requirements.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-1 w-5 h-5 text-sky-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div
          className="max-w-4xl mx-auto mt-12 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            If you have any questions about the admission process or
            course‑specific requirements, please contact our admissions office
            before applying.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
          >
            Start Admission Form
          </Link>
        </div>
      </section>
    </main>
  );
}