"use client";

import Link from "next/link";

export default function StickySidebar() {
  return (
    <>
      {/* ─── Left Sidebar: 360° + WhatsApp (Circles) - Desktop Only ─── */}
      <div className="fixed left-4 bottom-28 z-[999] hidden md:flex flex-col items-center gap-3">
        {/* 360° View - Circle */}
        <Link
          href="/360-view"
          className="w-14 h-14 rounded-full bg-iftm-navy/90 backdrop-blur-sm flex items-center justify-center text-white shadow-lg shadow-iftm-navy/30 hover:bg-iftm-primary hover:scale-110 transition-all duration-300 border border-white/10"
          title="360° Campus View"
        >
          <span className="text-sm font-extrabold leading-none">360°</span>
        </Link>

        {/* WhatsApp - Circle */}
        <a
          href="https://api.whatsapp.com/send/?phone=919639004077&text=Hello%20IFTM%2C%20I%20am%20seeking%20admission-related%20information.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-600/90 backdrop-blur-sm flex items-center justify-center text-white shadow-lg shadow-green-600/30 hover:bg-green-700 hover:scale-110 transition-all duration-300 border border-white/10"
          title="WhatsApp Chat"
        >
          <i className="fab fa-whatsapp text-2xl" />
        </a>
      </div>

      {/* ─── Right Sidebar: Admissions Open (vertical - ALL screens) ─── */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[999]">
        <Link
          href="/admissions"
          className="group flex items-center bg-iftm-primary hover:bg-iftm-primary-dark transition-colors duration-300 shadow-lg shadow-iftm-primary/30"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] px-1.5 md:px-3 py-3 md:py-5">
            Admissions Open
          </span>
          <div className="bg-iftm-gold text-iftm-dark px-1.5 md:px-2 py-1.5 md:py-2">
            <i className="fas fa-arrow-right text-[10px] md:text-xs rotate-90" />
          </div>
        </Link>
      </div>
    </>
  );
}
