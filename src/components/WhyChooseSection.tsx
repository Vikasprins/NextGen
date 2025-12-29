// import Image from "next/image";

// const WhyChooseSection = () => {
//   return (
//     <section className="w-full h-[602px] bg-[#FFF8F4] flex flex-col items-center pt-[47px]">
//       <h2
//         className="text-[36.81px] font-semibold leading-[140%] capitalize text-black"
//         style={{ fontFamily: "Roboto" }}
//       > 
//         Why Choose <span className="text-[#FF6A00] border-b-[2px] border-[#FF6A00]">NGA?</span>
//       </h2>
//       <div className="mt-[70px] w-[1131px] h-[330px] flex justify-between rounded-[28px]">
//         <div className="w-[517px] h-[222px] space-y-6 pt-4 " style={{ fontFamily: "Roboto" }}>
//           <div className="flex">
//                 <div>
//             <h4 className="font-bold text-[16px] text-[#1900FF]">
//               1. Live Training
//             </h4>
//             <p className="text-[14px] text-gray-700">
//               Experience hands-on learning with our live training sessions.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-bold text-[16px] text-[#00A600]">
//               2. Internships
//             </h4>
//             <p className="text-[14px] text-gray-700">
//               Apply your skills in a professional setting, build your portfolio, and gain confidence in moving toward your future career.
//             </p>
//           </div>
//           </div>

//           <div className="flex">
//                 <div>
//             <h4 className="font-bold text-[16px] text-[#FF2D2D]">
//               3. Expert Trainers
//             </h4>
//             <p className="text-[14px] text-gray-700">
//               Learn from expert trainers with relevant experience and deep industry knowledge.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-bold text-[16px] text-[#0095FF]">
//               4. Certifications
//             </h4>
//             <p className="text-[14px] text-gray-700">
//               Showcase your achievement, enhance your resume, and open doors to new career opportunities with a verified certificate.
//             </p>
//           </div>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="w-[495px] h-[330px] rounded-[28px] overflow-hidden">
//           <Image
//             src="/whychoose.png"
//             alt="Teamwork"
//             width={495}
//             height={330}
//             className="rounded-[28px] object-cover w-full h-full"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseSection;

import Image from "next/image";

const WhyChooseSection = () => {
    const features = [
  {
    number: "1.",
    title: "Live Training",
    description: "Experience hands-on learning with our live training sessions.",
    color: "text-black",
  },
  {
    number: "2.",
    title: "Internships",
    description: "Apply your skills in a professional setting, build your portfolio, and take a confident step toward your future career.",
    color: "text-black",
  },
  {
    number: "3.",
    title: "Expert Trainers",
    description: "Learn from expert trainers with real-world experience and deep industry knowledge.",
    color: "text-black",
  },
  {
    number: "4.",
    title: "Certifications",
    description: "Showcase your achievement, enhance your resume, and open doors to new career opportunities with a verified credential.",
    color: "text-black",
  },
];
  return (
    <section className="w-full bg-[#FFF8F4] py-12 px-4 md:px-12">
      <h2
        className="text-3xl md:text-[36.81px] font-semibold leading-[140%] capitalize text-black text-center"
        style={{ fontFamily: "Roboto" }}
      >
        Why Choose{"   "}
        <span className="text-[#FF6A00] border-b-2 border-[#FF6A00]">
          NGA?
        </span>
      </h2>

      <div className="w-full bg-[#FFF8F4] py-12 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left Features Section */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 ">
        {features.map((item, index) => (
          <div key={index}>
            <h3 className={`text-xl font-semibold ${item.color}`}>
              {item.number} {item.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
          </div>
        ))}
      </div>

        {/* Right Image */}
        <div className="flex-1">
        <Image
          src="/whychoose.png" // Replace with your image path in public folder
          alt="Teamwork"
          width={400}
          height={400}
          className="rounded-xl w-full object-cover"
        />
      </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;


