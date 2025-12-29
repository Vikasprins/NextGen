"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Teachings of the great explorer of truth, the master-builder of human happiness, no one rejects, dislikes, or avoids pleasure itself, pleasure itself.",
    name: "Finlay Kirk",
    role: "Web Developer",
    avatar: "/test.png",
  },
  {
    quote:
      "Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    name: "Dannette P. Cervantes",
    role: "Web Design",
    avatar: "/test.png",
  },
  {
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Clara R. Altman",
    role: "UI/UX Design",
    avatar: "/test.png",
  },
  {
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Clara R. Altman",
    role: "UI/UX Design",
    avatar: "/test.png",
  },
  {
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Clara R. Altman",
    role: "UI/UX Design",
    avatar: "/test.png",
  },
  {
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Clara R. Altman",
    role: "UI/UX Design",
    avatar: "/test.png",
  },
];

export default function Testimonial() {
  return (
    <section className="w-full py-12 bg-[#FAFAFF] text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Success Stories / Testimonials
      </h2>
      <p className="text-sm text-gray-500 mb-8">
        Be inspired by real success stories and testimonials from our learners.
      </p>

      <div className="max-w-5xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
           autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-xl shadow-md p-6 text-left min-h-[250px] flex flex-col justify-between  ">
                <p className="text-gray-700 text-sm mb-4">“{item.quote}”</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
