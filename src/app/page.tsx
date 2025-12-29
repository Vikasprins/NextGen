import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Testimonial from "@/components/Testimonial";
import WhyChooseSection from "@/components/WhyChooseSection";


export default function Home() {
  return (
    <>
    {/* <Header /> */}
    {/* <Navbar /> */}
    <Hero />
    <InfoSection />
    <AboutSection />
    {/* <CoursesSection /> */}
    <WhyChooseSection />
    <Testimonial />
    <TeamSection />
    </>
  );
}
