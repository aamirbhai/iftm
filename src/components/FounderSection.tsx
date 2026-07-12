"use client";

import Image from "next/image";

function FlowerSVG({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className} fill="currentColor">
      <g opacity="0.6">
        {/* Petals */}
        <ellipse cx="50" cy="25" rx="12" ry="20" transform="rotate(0 50 50)" />
        <ellipse cx="50" cy="25" rx="12" ry="20" transform="rotate(45 50 50)" />
        <ellipse cx="50" cy="25" rx="12" ry="20" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="25" rx="12" ry="20" transform="rotate(135 50 50)" />
        <ellipse cx="50" cy="25" rx="12" ry="20" transform="rotate(180 50 50)" />
        <ellipse cx="50" cy="25" rx="12" ry="20" transform="rotate(225 50 50)" />
        <ellipse cx="50" cy="25" rx="12" ry="20" transform="rotate(270 50 50)" />
        <ellipse cx="50" cy="25" rx="12" ry="20" transform="rotate(315 50 50)" />
        {/* Center */}
        <circle cx="50" cy="50" r="10" />
      </g>
    </svg>
  );
}

function SmallFlower({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className={className} fill="currentColor">
      <g opacity="0.5">
        <ellipse cx="30" cy="15" rx="8" ry="12" transform="rotate(0 30 30)" />
        <ellipse cx="30" cy="15" rx="8" ry="12" transform="rotate(60 30 30)" />
        <ellipse cx="30" cy="15" rx="8" ry="12" transform="rotate(120 30 30)" />
        <ellipse cx="30" cy="15" rx="8" ry="12" transform="rotate(180 30 30)" />
        <ellipse cx="30" cy="15" rx="8" ry="12" transform="rotate(240 30 30)" />
        <ellipse cx="30" cy="15" rx="8" ry="12" transform="rotate(300 30 30)" />
        <circle cx="30" cy="30" r="6" />
      </g>
    </svg>
  );
}

function LeafSVG({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 80" className={className} fill="currentColor">
      <path d="M20 0 C30 20, 35 40, 20 80 C5 40, 10 20, 20 0Z" opacity="0.4" />
      <line x1="20" y1="10" x2="20" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

export default function FounderSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-iftm-navy via-iftm-navy to-iftm-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-iftm-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-iftm-gold/5 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left - Founder Image with Floral Tribute */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              {/* Flowers - Top Left */}
              <FlowerSVG className="absolute -top-8 -left-8 w-14 h-14 text-iftm-gold/50 rotate-[-15deg]" />
              <SmallFlower className="absolute -top-4 left-4 w-8 h-8 text-yellow-300/40 rotate-[20deg]" />
              <LeafSVG className="absolute -top-6 left-12 w-6 h-12 text-green-400/30 rotate-[-30deg]" />

              {/* Flowers - Top Right */}
              <FlowerSVG className="absolute -top-6 -right-6 w-12 h-12 text-iftm-gold/40 rotate-[30deg]" />
              <SmallFlower className="absolute top-2 -right-2 w-7 h-7 text-yellow-200/40 rotate-[-10deg]" />
              <LeafSVG className="absolute -top-2 right-8 w-5 h-10 text-green-400/25 rotate-[25deg]" />

              {/* Flowers - Bottom Left */}
              <FlowerSVG className="absolute -bottom-8 -left-6 w-12 h-12 text-iftm-gold/45 rotate-[45deg]" />
              <SmallFlower className="absolute -bottom-3 left-6 w-7 h-7 text-yellow-300/35 rotate-[-25deg]" />
              <LeafSVG className="absolute -bottom-6 left-14 w-5 h-10 text-green-400/30 rotate-[15deg]" />

              {/* Flowers - Bottom Right */}
              <FlowerSVG className="absolute -bottom-6 -right-8 w-14 h-14 text-iftm-gold/50 rotate-[-30deg]" />
              <SmallFlower className="absolute -bottom-4 right-4 w-8 h-8 text-yellow-200/40 rotate-[40deg]" />
              <LeafSVG className="absolute -bottom-8 right-12 w-6 h-12 text-green-400/25 rotate-[-20deg]" />

              {/* Flowers - Left Side */}
              <SmallFlower className="absolute top-1/2 -left-10 w-8 h-8 text-iftm-gold/35 rotate-[60deg] -translate-y-1/2" />
              <LeafSVG className="absolute top-1/3 -left-7 w-5 h-10 text-green-400/20 rotate-[45deg]" />

              {/* Flowers - Right Side */}
              <SmallFlower className="absolute top-1/3 -right-8 w-7 h-7 text-iftm-gold/30 rotate-[-45deg]" />
              <LeafSVG className="absolute top-2/3 -right-6 w-5 h-10 text-green-400/20 rotate-[-35deg]" />

              {/* Image Frame */}
              <div className="w-[280px] h-[340px] rounded-2xl overflow-hidden border-2 border-iftm-gold/30 shadow-2xl shadow-black/30">
                <Image
                  src="/images/leadership/founder.png"
                  alt="Shri Onkar Saran Kothiwal - Founder"
                  width={280}
                  height={340}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative border accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-iftm-gold/20 rounded-2xl -z-10" />

              {/* In Loving Memory Badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-iftm-gold/90 text-iftm-dark text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                In Loving Memory
              </div>
            </div>
          </div>

          {/* Right - Quote */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Large quote mark */}
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="currentColor" className="text-iftm-gold/20 absolute -top-6 -left-4">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="text-iftm-gold text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed mb-6 pl-2">
                Keep pace with the time for Strong and Dynamic nation...
              </blockquote>

              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-16 bg-iftm-gold/40" />
                <p className="text-iftm-gold font-bold text-base tracking-wide">
                  — Shri Onkar Saran Kothiwal
                </p>
              </div>

              <div className="border-l-4 border-iftm-gold/30 pl-6 py-2">
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  Our benevolent founder, (Late) Shri Onkar Saran Kothiwal, philosopher, philanthropist, 
                  legislature and believer of guiding principles of &ldquo;Trust Based Management&rdquo;
                </p>
              </div>

              {/* Tribute line */}
              <div className="mt-6 flex items-center gap-3">
                <SmallFlower className="w-5 h-5 text-iftm-gold/40" />
                <p className="text-white/40 text-xs italic">
                  Forever in our hearts. His legacy continues to inspire.
                </p>
                <SmallFlower className="w-5 h-5 text-iftm-gold/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
