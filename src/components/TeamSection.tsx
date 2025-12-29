'use client';

import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
};

const team: TeamMember[] = [
  {
    name: 'Amit',
    role: 'CEO & Mentor',
    image: '/aboutSection.png',
    description:
      'Amit is a Digital Markter and Youtuber, known for his Digtal Markter & mentoring. He has 1M+ subscribers and mentored 500k+ students.'
  },
   {
    name: 'Vikas Prins',
    role: 'CTO & Mentor',
    image: '/vikas1.png', 
    description:
      'Vikas Prins is a Software Engineer and Youtuber, known for his coding & mentoring. He has 1M+ subscribers and mentored 500k+ students. MCA From GJU, worked at  SISC',
  },
    {
    name: 'Sapna',
    role: 'Manager & Mentor',
    image: '/sapna.jpeg', 
    description:
      'Sapna is a creear consular and Youtuber,  She has 1M+ subscribers and mentored 500k+ students.',
  },
  // Add more team members here
];

export default function TeamSlider() {
   const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: { perView: 1, spacing: 15 },
  });
   useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 6000); // Change every 3s
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="bg-white text-black py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
      <div ref={sliderRef} className="keen-slider">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex justify-center items-center"
          >
            <div className="border border-orange-500 rounded-[20px] p-6 flex flex-col md:flex-row items-center max-w-4xl shadow-lg">
              <div className="w-64 h-64 relative flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="mt-6 md:mt-0 md:ml-8 max-w-xl">
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                <p className="text-md text-gray-400 mt-4">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
