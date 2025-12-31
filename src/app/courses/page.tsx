import React from 'react'
import { 
  Code2, 
  PenTool, 
  Server, 
  Smartphone, 
  Layers, 
  Globe 
} from 'lucide-react';
const page = () => {
  interface Course {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string; // To mimic the different color glows on icons
}
  const courses: Course[] = [
  {
    id: 1,
    title: "Advance Digital Marketing",
    description: "OkkCode offers comprehensive front-end developer courses designed to equip individuals with the skills and expertise needed.",
    icon: Code2,
    gradient: "from-blue-400 to-cyan-300"
  },
  {
    id: 2,
    title: "Digital Marketing for Bussiness",
    description: "OkkCode offers comprehensive UI/UX designing courses designed to equip individuals with the skills and creative logic.",
    icon: PenTool,
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    id: 3,
    title: "Startup Pro",
    description: "OkkCode offers comprehensive back-end development courses that empower individuals with the skills and expertise.",
    icon: Server,
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    id: 4,
    title: "Front End Development",
    description: "Master the Art of App Development with OkkCode. Are you ready to embark on a journey to become a skilled app developer?",
    icon: Code2,
    gradient: "from-indigo-400 to-purple-500"
  },
  {
    id: 5,
    title: "Backend Development",
    description: "Become an unbeatable Full Stack Developer with OkkCode. At OkkCode, we offer comprehensive and immersive courses.",
    icon: Layers,
    gradient: "from-blue-400 to-teal-400"
  },
  {
    id: 6,
    title: "Full Stack Development",
    description: "It's a content management system (CMS) that lets you build websites, from simple blogs to full-fledged online stores.",
    icon: Globe, // Using Globe as a proxy for WordPress
    gradient: "from-blue-600 to-cyan-600"
  }
];
  return (
      <section className="relative w-full min-h-screen bg-[#FF7300] py-20 px-4 overflow-hidden">
      
      {/* Background Ambience (Glow effects) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]  blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Choose According To Your Interest
          </h2>
          <p className="text-white text-sm md:text-base font-medium tracking-wide uppercase opacity-80">
            Our Courses
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="group relative p-6 rounded-2xl bg-white border border-[#FF7300] hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              {/* Card Content */}
              <div className="flex flex-col items-start space-y-4">
                
                {/* Icon Container (Mimicking the glowing 3D icon box) */}
                <div className="relative mb-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity`} />
                  <div className={`relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <course.icon className="w-7 h-7 text-white" />
                    
                    {/* Simulated "shine" on the icon box */}
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-white/20" />
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-semibold text-black group-hover:text-[#FF7300] transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Decorative subtle gradient at bottom of card */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default page