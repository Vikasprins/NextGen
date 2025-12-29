// import React from "react";
// import Image from "next/image";

// const AboutSection = () => {
//   return (
//     <section className="flex justify-center mt-[100px]">
//       <div
//         className="flex bg-[#F9FAFB] rounded-[8px] shadow-md gap-16"
//         style={{ width: "1155px", height: "448px" }}
//       >
//         {/* Image Section */}
//         <div
//           className="relative flex-shrink-0"
//           style={{ width: "448px", height: "448px" }}
//         >
//           <Image
//             src="/aboutus.jpg" 
//             alt="About NGA"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-l-[8px]"
//           />
//         </div>

//         {/* Text Section */}
//         <div
//           className="flex flex-col justify-center px-8"
//           style={{ width: "579px", height: "418px" }}
//         >
//           {/* Title */}
//           <h2
//             className="font-bold mb-4"
//             style={{
//               fontSize: "35px",
//               fontFamily: "Roboto, sans-serif",
//               lineHeight: "135%",
//               width: "209px",
//               height: "47px",
//             }}
//           >
//             About NGA
//           </h2>

//           {/* Paragraph */}
//           <p
//             className="text-gray-700 mb-6"
//             style={{
//               fontSize: "18px",
//               lineHeight: "151%",
//               fontFamily: "Roboto, sans-serif",
//               fontWeight: "400",
//               width: "579px",
//               height: "270px",
//             }}
//           >
//             Next Gen Academy (NGA) is a leading skill-development institute in Hisar, Haryana, committed to shaping careers in Digital Marketing and Web Development. With a practical and agency-based learning model, we focus on delivering real-time knowledge that prepares students for today’s competitive job market.<br />
//             We don’t just teach—we mentor. Our expert trainers bring 7+ years of industry experience to guide students on the latest trends, tools, and strategies. Every course at NGA is designed to transform beginners into professionals, with a focus on hands-on projects, live campaigns, and performance tracking.
//           </p>

//           {/* Button */}
//           <button
//             className="bg-orange-500 hover:bg-orange-600 text-white font-medium mt-2"
//             style={{
//               width: "166px",
//               height: "45px",
//               borderRadius: "8px",
//             }}
//           >
//             Learn More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="flex justify-center mt-24 px-4">
      <div className="flex flex-col md:flex-row bg-[#F9FAFB] rounded-lg shadow-md w-full max-w-[1155px] overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full md:w-[50%] h-[300px] md:h-auto flex-shrink-0">
          <Image
            src="/aboutus.jpg"
            alt="About NGA"
            fill
            className="object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center px-6 py-6 md:py-8 md:px-10 w-full md:w-[50%]">
          {/* Title */}
          <h2 className="text-2xl md:text-[35px] font-bold mb-4 leading-snug font-['Roboto'] text-black">
            About NGA
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed font-['Roboto']">
            Next Gen Academy (NGA) is a leading skill-development institute in Hisar, Haryana, committed to shaping careers in Digital Marketing and Web Development. With a practical and agency-based learning model, we focus on delivering real-time knowledge that prepares students for today’s competitive job market.
            <br />
            We don’t just teach—we mentor. Our expert trainers bring 7+ years of industry experience to guide students on the latest trends, tools, and strategies. Every course at NGA is designed to transform beginners into professionals, with a focus on hands-on projects, live campaigns, and performance tracking.
          </p>

          {/* Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md px-5 py-2 w-fit">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
