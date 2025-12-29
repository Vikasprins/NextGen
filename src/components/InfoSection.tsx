// import React from "react";
// import Image from "next/image";

// const features = [
//   {
//     title: "Learn The Latest Skills",
//     description: "Stay ahead in your career by learning the latest, most in-demand skills.",
//     icon: "/online_test.png",
//   },
//   {
//     title: "Get Ready For a Career",
//     description: "Build a strong foundation, gain practical experience, and prepare for real opportunities.",
//     icon: "/exam.png",
//   },
//   {
//     title: "Earn a Certificate",
//     description: "Validate your skills and boost your professional credibility.",
//     icon: "/certification.png",
//   },
// ];

const InfoSection = () => {
  return (
    <section className="py-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-center font-bold mb-8 ">
        Our  Placement <span className="text-orange-500">Partner</span>
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-16 animate-slide">
            <img src="/nga_logo.png" alt="logo" className="h-20 w-auto" />
            <img src="/nga_logo.png" alt="logo" className="h-20 w-auto" />
            <img src="/nga_logo.png" alt="logo" className="h-20 w-auto" />
            <img src="/nga_logo.png" alt="logo" className="h-20 w-auto" />
            {/* Duplicate for seamless loop */}
            <img src="/nga_logo.png" alt="logo" className="h-20 w-auto" />
            <img src="/nga_logo.png" alt="logo" className="h-20 w-auto" />
            <img src="/nga_logo.png" alt="logo" className="h-20 w-auto" />
            <img src="/nga_logo.png" alt="logo" className="h-20 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;


// "use client";
// import Image from "next/image";

// const companies = [
//   "/logos/intellipaat.png",
//   "/logos/wishup.png",
//   "/logos/tcs.png",
//   "/logos/flipkart.png",
//   "/logos/google.png",
//   "/logos/amazon.png",
// ];

// const HiringSection = () => {
//   return (
//     <section className="w-full overflow-hidden py-6">
//       <h2 className="text-blue-600 text-sm font-medium mb-4 px-4">
//         Prime Hiring Destinations
//       </h2>

//       <div className="relative w-full">
//         <div className="flex gap-10 animate-slide w-max">
//           {[...companies, ...companies].map((logo, i) => (
//             <div key={i} className="relative w-[100px] h-[40px]">
//               <Image src={logo} alt="company" fill className="object-contain" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HiringSection;
