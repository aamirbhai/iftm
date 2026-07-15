import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header solid />
      
      <main className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#080c24] via-[#0a1128] to-[#001055] relative overflow-hidden pt-[70px] md:pt-[90px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-iftm-gold rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-iftm-primary rounded-full blur-[120px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto py-16">
          {/* Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-iftm-gold/20 to-iftm-gold/5 border border-iftm-gold/30 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-iftm-gold"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Coming{" "}
            <span className="bg-gradient-to-r from-iftm-gold to-amber-400 bg-clip-text text-transparent">
              Soon
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-white/60 text-lg md:text-xl mb-2">
            This page is under construction
          </p>
          <p className="text-white/40 text-sm md:text-base mb-10 max-w-md mx-auto">
            We&apos;re working hard to bring you something amazing. Stay tuned for updates!
          </p>

          {/* Progress Bar */}
          <div className="max-w-xs mx-auto mb-10">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-iftm-gold to-amber-400 rounded-full animate-pulse" />
            </div>
            <p className="text-white/30 text-xs mt-2">65% Complete</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3.5 bg-gradient-to-r from-iftm-primary to-red-700 text-white font-semibold text-sm uppercase tracking-wider rounded-xl hover:shadow-lg hover:shadow-iftm-primary/30 transition-all hover:-translate-y-0.5"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-semibold text-sm uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Decorative Line */}
          <div className="mt-16 flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-iftm-gold/30" />
            <div className="w-2 h-2 rounded-full bg-iftm-gold/50" />
            <div className="w-12 h-[1px] bg-iftm-gold/30" />
          </div>

          {/* University Name */}
          <p className="mt-6 text-white/20 text-xs uppercase tracking-[0.3em]">
            IFTM University, Moradabad
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
