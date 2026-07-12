"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    value: 25,
    suffix: "+",
    label: "Years in Excellence",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    value: 54,
    suffix: "+",
    label: "Programmes Offered",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    ),
    value: 10,
    suffix: "+",
    label: "On-Campus Schools",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: 10000,
    suffix: "+",
    label: "Students across India",
  },
];

const statsRow2: StatItem[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    value: 500,
    suffix: "+",
    label: "Faculty Strength",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    value: 69,
    suffix: "+",
    label: "Acres Campus",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      </svg>
    ),
    value: 98950,
    suffix: "+",
    label: "sq. mtr. built-up area",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    value: 500,
    suffix: "+",
    label: "Hostel Accommodation",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2500;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-[family-name:var(--font-number)] text-5xl font-bold text-iftm-dark leading-none">
      {count.toLocaleString()}
      <sup className="text-3xl">{suffix}</sup>
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
            Highlights
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
            United in Vision. Unmatched in Excellence
          </h2>
        </div>

        {/* Stats Row 1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-iftm-primary mb-3 flex justify-center">{stat.icon}</div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-iftm-text-light text-xs font-medium uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <hr className="border-iftm-border my-8" />

        {/* Stats Row 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsRow2.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-iftm-primary mb-3 flex justify-center">{stat.icon}</div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-iftm-text-light text-xs font-medium uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
