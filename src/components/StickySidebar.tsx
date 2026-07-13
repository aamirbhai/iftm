"use client";

import Link from "next/link";

export default function StickySidebar() {
  return (
    <>
      {/* ─── Left Sidebar: 360° View + WhatsApp ─── */}
      <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-[999] hidden md:flex flex-col gap-0">
        {/* 360° View */}
        <Link
          href="/360-view"
          className="group flex items-center gap-0 bg-iftm-navy/90 backdrop-blur-sm hover:bg-iftm-primary transition-colors duration-300"
        >
          <div className="flex flex-col items-center justify-center w-[60px] h-[60px] text-white">
            <span className="text-lg font-extrabold leading-none">360°</span>
            <span className="text-[8px] uppercase tracking-wider mt-0.5">View</span>
          </div>
          <div className="w-0 group-hover:w-[100px] overflow-hidden transition-all duration-300">
            <span className="text-white text-xs font-medium whitespace-nowrap pr-3">Campus Tour</span>
          </div>
        </Link>

        {/* WhatsApp */}
        <a
          href="https://api.whatsapp.com/send/?phone=919639004077&text=Hello%20IFTM%2C%20I%20am%20seeking%20admission-related%20information.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-0 bg-green-600/90 backdrop-blur-sm hover:bg-green-700 transition-colors duration-300"
        >
          <div className="flex flex-col items-center justify-center w-[60px] h-[60px] text-white">
            <i className="fab fa-whatsapp text-xl" />
            <span className="text-[8px] uppercase tracking-wider mt-0.5">Chat</span>
          </div>
          <div className="w-0 group-hover:w-[100px] overflow-hidden transition-all duration-300">
            <span className="text-white text-xs font-medium whitespace-nowrap pr-3">WhatsApp</span>
          </div>
        </a>
      </nav>

      {/* ─── Right Sidebar: Admissions Open (TMU-style vertical) ─── */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[999] hidden md:block">
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

      {/* ─── Mobile Bottom Bar ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-[999] md:hidden bg-white/95 backdrop-blur-lg border-t border-iftm-border/50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 gap-0">
          {/* 360° View */}
          <Link
            href="/360-view"
            className="flex flex-col items-center justify-center py-3 text-iftm-navy hover:bg-iftm-light transition-colors"
          >
            <span className="text-base font-extrabold leading-none">360°</span>
            <span className="text-[9px] uppercase tracking-wider mt-0.5 text-iftm-text-light">View</span>
          </Link>

          {/* Admission */}
          <Link
            href="/admissions"
            className="flex flex-col items-center justify-center py-3 bg-iftm-primary text-white"
          >
            <i className="fas fa-graduation-cap text-base mb-0.5" />
            <span className="text-[9px] uppercase tracking-wider font-bold">Admission</span>
          </Link>

          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send/?phone=919639004077&text=Hello%20IFTM%2C%20I%20am%20seeking%20admission-related%20information.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 text-green-600 hover:bg-green-50 transition-colors"
          >
            <i className="fab fa-whatsapp text-xl mb-0.5" />
            <span className="text-[9px] uppercase tracking-wider text-iftm-text-light">Chat</span>
          </a>
        </div>
      </div>
    </>
  );
}
