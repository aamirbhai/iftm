"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ─── Stats Data ─── */
const stats = [
  { icon: "fa-user-graduate", value: 10000, suffix: "+", label: "Students" },
  { icon: "fa-briefcase", value: 30, suffix: "+", label: "Years of Excellence" },
  { icon: "fa-chart-line", value: 90, suffix: "%+", label: "Placement Rate" },
  { icon: "fa-handshake", value: 100, suffix: "+", label: "Collaborations" },
];

/* ─── Banner Slides ─── */
const bannerSlides = [
  { title: "Admissions Open 2026-27", subtitle: "Apply now for UG, PG & Diploma programmes", color: "from-iftm-primary to-red-900" },
  { title: "90%+ Placement Record", subtitle: "Top recruiters: Google, Microsoft, Amazon, TCS & more", color: "from-green-800 to-emerald-900" },
  { title: "69+ Acres Green Campus", subtitle: "World-class infrastructure with modern facilities", color: "from-amber-700 to-orange-900" },
];

/* ─── HLS Video Component (adaptive streaming) ─── */
function LazyHeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<any>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // IntersectionObserver for lazy loading
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // HLS initialization
  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return;
    const video = videoRef.current;
    video.loop = true;
    video.muted = true;

    const hlsDesktopUrl = "/api/hls/playlist.m3u8";
    const hlsMobileUrl = "/api/hls_mobile/playlist.m3u8";
    const fallbackUrl = "https://4.lfabhawalpur.com/iftm.mp4";

    function loadHls(Hls: any, url: string) {
      const hls = new Hls({
        capLevelToPlayerSize: true,
        autoStartLoad: true,
        maxBufferLength: 4,
        maxMaxBufferLength: 4,
        maxBufferSize: 2 * 1000 * 1000,
      });
      hls.loadSource(url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((e: any) => console.warn("HLS play failed:", e));
      });
      hls.on(Hls.Events.ERROR, (_event: any, data: any) => {
        if (data.fatal) {
          hls.destroy();
          console.error("HLS stream failed, falling back to MP4");
          video.src = fallbackUrl;
          video.play().catch(() => {});
        }
      });
      hlsRef.current = hls;
    }

    function initHls() {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const hlsUrl = isMobile && hlsMobileUrl ? hlsMobileUrl : hlsDesktopUrl;

      if (hlsUrl && typeof window !== "undefined") {
        // Load hls.js from CDN
        if ((window as any).Hls) {
          const Hls = (window as any).Hls;
          if (Hls.isSupported()) {
            loadHls(Hls, hlsUrl);
            return;
          }
        }
        // Dynamic import of hls.js
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/hls.js@1.4.12/dist/hls.min.js";
        script.async = true;
        script.crossOrigin = "anonymous";
        script.onload = () => {
          const Hls = (window as any).Hls;
          if (Hls && Hls.isSupported()) {
            loadHls(Hls, hlsUrl);
          } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            // Safari native HLS
            video.src = hlsUrl;
            video.play().catch(() => {});
          } else {
            // Final fallback to MP4
            video.src = fallbackUrl;
            video.play().catch(() => {});
          }
        };
        script.onerror = () => {
          video.src = fallbackUrl;
          video.play().catch(() => {});
        };
        document.head.appendChild(script);
      } else {
        // No HLS URL configured, use MP4 fallback
        video.src = fallbackUrl;
        video.play().catch(() => {});
      }
    }

    initHls();

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {/* Dark gradient fallback while video loads */}
      <div className="absolute inset-0 bg-gradient-to-br from-iftm-navy via-iftm-dark to-black" />
      {shouldLoad && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          crossOrigin="anonymous"
        />
      )}
    </div>
  );
}

/* ─── Animated Counter ─── */
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 50;
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-[family-name:var(--font-number)] text-2xl md:text-3xl font-bold text-white leading-none">
      {count.toLocaleString()}
    </span>
  );
}

/* ─── Main Component ─── */
export default function HeroSlider() {
  const [bannerCurrent, setBannerCurrent] = useState(0);

  /* Auto-rotate banner slider */
  useEffect(() => {
    const timer = setInterval(() => {
      setBannerCurrent((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO with HLS Video BG
          Stats card overlaps from bottom
          ═══════════════════════════════════════════ */}
      <section className="relative h-[100dvh] md:h-[700px] lg:h-[800px] bg-iftm-dark" style={{ overflow: "visible" }}>
        {/* Video Background - Lazy Loaded */}
        <div className="absolute inset-0 overflow-hidden">
          <LazyHeroVideo />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-iftm-navy/40 to-transparent" />

        {/* 30+ Years of Excellence Badge - Top Right */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 z-20">
          <div className="relative group">
            <div className="w-[88px] h-[88px] md:w-[120px] md:h-[120px] rounded-full border-2 border-iftm-gold/50 flex flex-col items-center justify-center bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md shadow-xl shadow-black/30 group-hover:border-iftm-gold/80 group-hover:shadow-iftm-gold/20 transition-all duration-500">
              <span className="font-[family-name:var(--font-number)] text-3xl md:text-4xl font-black text-iftm-gold leading-none tracking-tight">30+</span>
              <span className="text-iftm-gold/90 text-[8px] md:text-[10px] uppercase tracking-[0.15em] font-bold mt-1 text-center leading-tight">Years of<br/>Excellence</span>
            </div>
            {/* Animated glow ring */}
            <div className="absolute inset-0 rounded-full bg-iftm-gold/10 blur-2xl animate-pulse" />
            {/* Outer ring */}
            <div className="absolute -inset-1 rounded-full border border-iftm-gold/20" />
          </div>
        </div>

        {/* Hero Content - Centered */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 w-full text-center">
            <div className="max-w-[900px] mx-auto animate-fade-in">
                {/* University Name - Attractive styling */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6">
                  <span className="block text-white/90 font-light text-xl md:text-2xl lg:text-3xl tracking-[0.15em] uppercase mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Welcome to
                  </span>
                  <span className="bg-gradient-to-r from-white via-white to-iftm-gold bg-clip-text text-transparent">
                    IFTM
                  </span>{" "}
                  <span className="text-iftm-gold">
                    University
                  </span>
                </h1>

                {/* Decorative line */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-[1px] bg-iftm-gold/50" />
                  <div className="w-2 h-2 rounded-full bg-iftm-gold" />
                  <div className="w-12 h-[1px] bg-iftm-gold/50" />
                </div>

                {/* Slogan - Elegant font */}
                <p className="text-white text-xl md:text-2xl lg:text-3xl mb-4 max-w-[700px] mx-auto font-light tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                  Transforming Minds, <span className="text-iftm-gold font-medium">Empowering Futures</span>
                </p>

                {/* Subtitle */}
                <p className="text-white/55 text-sm md:text-base lg:text-lg max-w-[550px] mx-auto tracking-wide leading-relaxed">
                  Moradabad&apos;s Premier Institution for Pharmacy, Engineering, Management &amp; Law
                </p>
            </div>
          </div>
        </div>

        {/* ─── STATS CARD — overlaps hero bottom (horizontal inline) ─── */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 w-full max-w-[1000px] px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(135deg, rgba(10,14,42,0.92) 0%, rgba(17,22,64,0.95) 100%)", backdropFilter: "blur(16px)" }}>
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-iftm-gold/60 to-transparent" />
            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,193,7,0.05),transparent_70%)]" />

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0 py-5 md:py-6 px-3 md:px-6">
              {stats.map((stat, index) => (
                <div key={index} className="relative group">
                  {/* Vertical divider (desktop) */}
                  {index > 0 && (
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                  )}

                  <div className="flex items-center gap-3 px-3 md:px-4 justify-center">
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-iftm-gold/30 group-hover:bg-iftm-gold/10 transition-all duration-300">
                        <i className={`fas ${stat.icon} text-iftm-gold text-sm md:text-base`} />
                      </div>
                    </div>

                    {/* Count + Label stacked */}
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-0.5">
                        <span className="font-[family-name:var(--font-number)] text-xl md:text-2xl font-bold text-white leading-none">
                          <AnimatedCounter value={stat.value} suffix="" />
                        </span>
                        <span className="text-iftm-gold text-[10px] md:text-xs font-bold">{stat.suffix}</span>
                      </div>
                      <p className="text-white/40 text-[8px] md:text-[9px] uppercase tracking-[0.12em] font-medium mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom gold accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-iftm-gold/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: BANNER SLIDER
          ═══════════════════════════════════════════ */}
      <section className="pt-20 md:pt-24 pb-10 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <div
              key={bannerCurrent}
              className={`bg-gradient-to-r ${bannerSlides[bannerCurrent].color} px-8 md:px-16 py-12 md:py-16 animate-fade-in`}
            >
              <div className="max-w-[600px]">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                  {bannerSlides[bannerCurrent].title}
                </h2>
                <p className="text-white/80 text-sm md:text-base mb-6">
                  {bannerSlides[bannerCurrent].subtitle}
                </p>
                <a
                  href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 bg-white text-iftm-dark font-semibold text-sm uppercase tracking-wider rounded-md hover:bg-iftm-gold hover:text-iftm-dark transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {bannerSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setBannerCurrent(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === bannerCurrent
                      ? "bg-white w-8"
                      : "bg-white/40 w-3 hover:bg-white/60"
                  }`}
                  aria-label={`Banner ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <button
              onClick={() => setBannerCurrent((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Previous banner"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => setBannerCurrent((prev) => (prev + 1) % bannerSlides.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Next banner"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </>
  );
}
