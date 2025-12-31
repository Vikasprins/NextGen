'use client'
import Image from "next/image";
import { useState } from "react";
import LeadPopup from "./LeadPopup";
// import home_vector1 from 'public/home_vector.avif';

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <section className="px-6 md:px-20 py-12 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Next <span className="text-[#FF7300]">Gen <br /></span> Makes Easy <span className="text-[#FF7300]">Learning</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Become a Certified Digital Marketing with PAP or Coding Expert with Practical, Agency-Based Training, Expert Faculty | Internship Opportunities
          </p>
          <div className="mt-6 space-x-4 ">
            <button className="px-6 py-2 bg-white border border-[#FF7300] rounded-md hover:bg-gray-100 cursor-pointer sm: mb-4">
              View Courses
            </button>
             <button
                onClick={() => setOpen(true)}
                className="px-6 py-2 bg-[#FF7300] text-white rounded-md hover:bg-orange-600 cursor-pointer"
              >
                Book Free Demo
              </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <Image
            src="/hero_image.png"
            alt="Hero Illustration"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
     <LeadPopup isOpen={open} onClose={() => setOpen(false)} />
     </>
  );
};

export default Hero;
