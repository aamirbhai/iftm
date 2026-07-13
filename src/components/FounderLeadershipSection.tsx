"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

/* ─── Founder Data ─── */
const founder = {
  name: "Shri Onkar Saran Kothiwal",
  role: "Founder & Visionary",
  quote: "Keep pace with the time for Strong and Dynamic nation...",
  description: "Our benevolent founder, (Late) Shri Onkar Saran Kothiwal, philosopher, philanthropist, legislature and believer of guiding principles of \"Trust Based Management\"",
  image: "/images/leadership/founder.png",
};

/* ─── Leadership Data ─── */
const leaders = [
  {
    name: "Rajiv Kothiwal",
    role: "Chancellor",
    message: "The fast-changing world of tomorrow will be an exciting and a challenging place to live, where only the people who adopt themselves to the situation, keep pace with upcoming technologies and have the ability to align their ideas will succeed.",
    image: "/images/leadership/chancellor.png",
  },
  {
    name: "Abhinav Kothiwal",
    role: "Pro Chancellor",
    message: "At IFTM University, Moradabad, we believe in providing a truly value based education to develop good professionals, ready to excel in any career, they wish to pursue.",
    image: "/images/leadership/prochancellor.png",
  },
  {
    name: "Prof. M. P. Pandey",
    role: "Vice Chancellor",
    message: "Education is the driving force that brings change in a person, community, society, and nation. It breaks the barriers of caste, creed, ethnicity and religion.",
    image: "/images/leadership/vicechancellor.png",
  },
  {
    name: "Prof. Sanjeev Agarwal",
    role: "Registrar",
    message: "Global education scenario is in transition state to transform it to job-oriented education, which is the need of the hour.",
    image: "/images/leadership/registrar.png",
  },
];

export default function FounderLeadershipSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const SLIDE_INTERVAL = 6000;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % leaders.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* ═══ LEFT: Founder (Light BG with decorative elements) ═══ */}
        <div className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-iftm-primary/5 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] rounded-full bg-iftm-gold/5 blur-2xl" />
          <div className="absolute top-1/2 right-1/4 w-[150px] h-[150px] rounded-full border border-iftm-primary/10" />
          <div className="absolute top-1/4 left-1/3 w-[100px] h-[100px] rounded-full border border-iftm-gold/10" />

          <div className="relative z-10 max-w-[600px] mx-auto lg:mx-0">
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-10 bg-iftm-primary" />
              <span className="text-iftm-primary text-xs font-bold uppercase tracking-[3px]">
                In Loving Memory
              </span>
              <div className="h-[2px] w-10 bg-iftm-primary" />
            </div>

            <div className="flex flex-col items-center gap-10">
              {/* Founder Image with Fancy Frame */}
              <div className="relative group">
                {/* Outer glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-iftm-primary/20 via-iftm-gold/20 to-iftm-primary/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-50" />

                {/* Image container */}
                <div className="relative">
                  {/* Corner decorations */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-iftm-gold rounded-tl-lg" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-iftm-gold rounded-tr-lg" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-iftm-gold rounded-bl-lg" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-iftm-gold rounded-br-lg" />

                  <div className="w-[220px] h-[270px] rounded-2xl overflow-hidden border-2 border-iftm-gold/40 shadow-2xl shadow-iftm-primary/20">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={220}
                      height={270}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>

                  {/* Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-iftm-primary to-iftm-primary-dark text-white text-[10px] font-bold uppercase tracking-[2px] px-5 py-2 rounded-full shadow-lg shadow-iftm-primary/30">
                      In Loving Memory
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Quote */}
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="currentColor" className="text-iftm-primary/10 mx-auto mb-4">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <blockquote className="text-iftm-dark text-xl md:text-2xl font-semibold italic leading-relaxed mb-6">
                  &ldquo;{founder.quote}&rdquo;
                </blockquote>

                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-iftm-primary/40" />
                  <p className="text-iftm-primary font-bold text-sm tracking-wide">
                    — {founder.name}
                  </p>
                  <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-iftm-primary/40" />
                </div>

                <p className="text-iftm-text text-sm leading-relaxed max-w-md mx-auto">
                  {founder.description}
                </p>

                <p className="text-iftm-text-light text-xs italic mt-6 flex items-center justify-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-gold">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  Forever in our hearts. His legacy continues to inspire.
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-gold">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ RIGHT: Leadership Carousel (Dark Red BG) ═══ */}
        <div
          className="py-20 px-6 md:px-12 bg-gradient-to-br from-red-950 via-red-900 to-red-800 relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/3 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-iftm-gold/5 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] rounded-full border border-white/5" />

          <div className="relative z-10 max-w-[600px] mx-auto lg:mx-0">
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-10 bg-iftm-gold" />
              <span className="text-iftm-gold text-xs font-bold uppercase tracking-[3px]">
                University Leadership
              </span>
              <div className="h-[2px] w-10 bg-iftm-gold" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Message from <span className="text-iftm-gold">Leadership</span>
            </h2>

            {/* Leadership Card */}
            <div className="relative">
              {/* Card glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-iftm-gold/20 via-transparent to-iftm-gold/20 rounded-3xl blur-sm" />

              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 overflow-hidden">
                <div key={activeIndex} className="animate-fade-in">
                  <div className="p-8">
                    {/* Quote icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="currentColor" className="text-iftm-gold/30 mb-4">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    {/* Message */}
                    <p className="text-white/90 text-base leading-relaxed mb-8 min-h-[80px]">
                      {leaders[activeIndex].message}
                    </p>

                    {/* Divider */}
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

                    {/* Leader Info */}
                    <div className="flex items-center gap-5">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-iftm-gold to-iftm-primary rounded-full opacity-50" />
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
                          <Image
                            src={leaders[activeIndex].image}
                            alt={leaders[activeIndex].name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">{leaders[activeIndex].name}</p>
                        <p className="text-iftm-gold text-sm font-medium">{leaders[activeIndex].role}</p>
                        <p className="text-white/50 text-xs mt-0.5">IFTM University</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Thumbnails */}
              <div className="flex gap-3">
                {leaders.map((leader, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ${
                      index === activeIndex
                        ? "scale-110 ring-2 ring-iftm-gold ring-offset-2 ring-offset-red-900"
                        : "opacity-50 hover:opacity-80 grayscale hover:grayscale-0"
                    }`}
                  >
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  aria-label="Previous"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  aria-label="Next"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {leaders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-iftm-gold w-8"
                      : "bg-white/20 w-3 hover:bg-white/40"
                  }`}
                  aria-label={`Leader ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
