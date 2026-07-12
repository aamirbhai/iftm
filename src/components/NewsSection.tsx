"use client";

import Link from "next/link";

const newsItems = [
  {
    date: "Feb 2026",
    title: "Admissions Open for 2026-27 Session",
    description: "Apply now for UG, PG, and Doctoral programmes. Scholarships available for meritorious students.",
    href: "/admissions",
  },
  {
    date: "Jan 2026",
    title: "NAAC A Grade Re-Accreditation Achieved",
    description: "IFTM University has been re-accredited with NAAC A Grade for excellence in academic quality and infrastructure.",
    href: "/about",
  },
  {
    date: "Dec 2025",
    title: "MoU with Leading Industry Partners",
    description: "New collaborations with TCS, Infosys, and Wipro for student internships and placement opportunities.",
    href: "/mou",
  },
];

export default function NewsSection() {
  return (
    <section className="py-20 bg-iftm-navy">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-iftm-gold text-xs font-bold uppercase tracking-[2px] mb-2 block">
            Latest Updates
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            News & Announcements
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all block group"
            >
              <span className="text-iftm-gold text-xs font-medium">
                {item.date}
              </span>
              <h3 className="text-white font-semibold mt-2 mb-3 group-hover:text-iftm-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
