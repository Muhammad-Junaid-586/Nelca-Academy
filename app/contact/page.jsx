"use client";
import { useState } from "react";
import { MapPin, Mail, Phone, MailIcon } from "lucide-react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have questions or want to join our programs? Reach out and our team will respond promptly."
        icon={<MailIcon size={42} />}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <div className="bg-gray-50 min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* ================= Contact Section ================= */}
          <div className="flex flex-col lg:flex-row gap-12 mb-24">
            {/* ---------------- Left side: Contact Info ---------------- */}
            <div className="flex-1 space-y-6">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                  We'd Love to Hear From You
                </p>
              </div>

              {[
                {
                  icon: <MapPin size={28} className="text-red-500" />,
                  title: "Address",
                  content: "Kahi Kacha Pakha, Hangu, Pakistan",
                },
                {
                  icon: <Phone size={28} className="text-green-500" />,
                  title: "Phone",
                  content: "+92-3355100160\n+92-3351952689",
                },
                {
                  icon: <Mail size={28} className="text-purple-500" />,
                  title: "Email",
                  content: "info@nelcaacademy.com\nsupport@nelcaacademy.com",
                },
                {
                  icon: <Phone size={28} className="text-green-600" />,
                  title: "WhatsApp",
                  content: "+92-3355100160",
                },
                {
                  icon: <Mail size={28} className="text-blue-500" />,
                  title: "Follow Us",
                  content: (
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="https://www.facebook.com/share/1aeKP2Nz1n/"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>

                      <a
                        href="https://instagram.com"
                        target="_blank"
                        className="text-pink-500 hover:text-pink-700"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>

                      <a
                        href="https://twitter.com"
                        target="_blank"
                        className="text-blue-400 hover:text-blue-600"
                      >
                        <Twitter className="w-6 h-6" />
                      </a>

                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        className="text-blue-700 hover:text-blue-900"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 p-3 rounded-full bg-gray-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 whitespace-pre-line mt-1">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ---------------- Right side: Contact Form ---------------- */}
            <div className="flex-1 bg-white p-12 rounded-3xl shadow-2xl self-start">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
                  required
                />
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white w-full py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-blue-900 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}