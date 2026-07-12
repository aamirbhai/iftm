"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-iftm-primary to-iftm-primary-dark">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <span className="text-iftm-gold text-xs font-bold uppercase tracking-[2px] mb-2 block">
          Admissions Open 2026-27
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-8 max-w-[600px] mx-auto">
          Join IFTM University and unlock your potential with world-class education, 
          experienced faculty, and excellent placement opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-iftm-gold text-iftm-dark font-semibold text-sm uppercase tracking-wider rounded-md hover:bg-yellow-400 transition-all hover:-translate-y-0.5"
          >
            Apply Now
          </a>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white/10 text-white border-2 border-white font-semibold text-sm uppercase tracking-wider rounded-md hover:bg-white hover:text-iftm-primary transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
