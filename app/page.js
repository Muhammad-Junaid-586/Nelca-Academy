import AboutInstitute from "@/components/AboutInstitute";
import AdmissionCTA from "@/components/AdmissionCTA";
import AnnouncementBar from "@/components/AnnouncementBar";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StatsSection from "@/components/StatsSection";
import StudentStories from "@/components/StudentStories";
import WhyChooseSection from "@/components/WhyChooseSection";


export default function Home() {
  return (
    <>
      {/* Navbar */}
      
      <Hero />
      <AnnouncementBar />
      <WhyChooseSection />
      <StatsSection />
      <CoursesSection />
      <AboutInstitute />
      <StudentStories />
      <AdmissionCTA />
      

      
    </>
  );
}