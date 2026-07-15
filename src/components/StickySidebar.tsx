"use client";

import Link from "next/link";

export default function StickySidebar() {
  return (
    <>
      {/* ─── Left Sidebar: 360° + WhatsApp (Circles) - ALL screens ─── */}
      <div className="fixed left-2 md:left-4 bottom-20 md:bottom-28 z-[999] flex flex-col items-center gap-2 md:gap-3">
        {/* 360° View - Circle */}
        <Link
          href="/360-view"
          className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-iftm-navy/90 backdrop-blur-sm flex items-center justify-center text-white shadow-lg shadow-iftm-navy/30 hover:bg-iftm-primary hover:scale-110 transition-all duration-300 border border-white/10"
          title="360° Campus View"
        >
          <span className="text-[10px] md:text-sm font-extrabold leading-none">360°</span>
        </Link>

        {/* WhatsApp - Circle */}
        <a
          href="https://api.whatsapp.com/send/?phone=919639004077&text=Hello%20IFTM%2C%20I%20am%20seeking%20admission-related%20information.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-green-600/90 backdrop-blur-sm flex items-center justify-center text-white shadow-lg shadow-green-600/30 hover:bg-green-700 hover:scale-110 transition-all duration-300 border border-white/10"
          title="WhatsApp Chat"
        >
          <i className="fab fa-whatsapp text-lg md:text-2xl" />
        </a>
      </div>

      {/* ─── Right Sidebar: Admissions Open (vertical - Desktop only) ─── */}
      <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-[999]">
        <Link
          href="/admissions"
          className="group flex items-center bg-iftm-primary hover:bg-iftm-primary-dark transition-colors duration-300 shadow-lg shadow-iftm-primary/30"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="text-white font-bold text-xs uppercase tracking-[0.2em] px-3 py-5">
            Admissions Open
          </span>
          <div className="bg-iftm-gold text-iftm-dark px-2 py-2">
            <i className="fas fa-arrow-right text-xs rotate-90" />
          </div>
        </Link>
      </div>

      {/* ─── Mobile Bottom Bar: Admissions Open ─── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[999]">
        <Link
          href="/admissions"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-iftm-primary to-red-700 text-white py-3 px-4 shadow-lg shadow-iftm-primary/40 font-bold text-sm uppercase tracking-wider"
        >
          <i className="fas fa-graduation-cap text-base" />
          <span>Admissions Open 2025-26</span>
          <i className="fas fa-arrow-right text-xs" />
        </Link>
      </div>
    </>
  );
}
