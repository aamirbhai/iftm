"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.loop = true;
    video.muted = true;

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
      hls.attachMedia(video!);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video!.play().catch(() => {});
        setLoaded(true);
      });
      hls.on(Hls.Events.ERROR, () => {
        hls.destroy();
        video!.src = fallbackUrl;
        video!.play().catch(() => {});
        setLoaded(true);
      });
    }

    function initHls() {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const hlsUrl = isMobile ? "/api/hls_mobile/playlist.m3u8" : "/api/hls/playlist.m3u8";

      if ((window as any).Hls) {
        const Hls = (window as any).Hls;
        if (Hls.isSupported()) {
          loadHls(Hls, hlsUrl);
          return;
        }
      }

      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/hls.js@1.4.12/dist/hls.min.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        const Hls = (window as any).Hls;
        if (Hls && Hls.isSupported()) {
          loadHls(Hls, hlsUrl);
        } else if (video!.canPlayType("application/vnd.apple.mpegurl")) {
          video!.src = hlsUrl;
          video!.play().catch(() => {});
          setLoaded(true);
        } else {
          video!.src = fallbackUrl;
          video!.play().catch(() => {});
          setLoaded(true);
        }
      };
      script.onerror = () => {
        video!.src = fallbackUrl;
        video!.play().catch(() => {});
        setLoaded(true);
      };
      document.head.appendChild(script);
    }

    initHls();
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-iftm-navy via-iftm-dark to-black" />
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        crossOrigin="anonymous"
      />
    </div>
  );
}

export default function NotFound() {
  return (
    <>
      <Header solid />
      
      <main className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-[70px] md:pt-[90px]">
        {/* Video Background */}
        <HeroVideo />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-iftm-navy/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto py-16">
          {/* Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-iftm-gold/20 to-iftm-gold/5 border border-iftm-gold/30 flex items-center justify-center backdrop-blur-sm">
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
            404
          </h1>

          {/* Subtext */}
          <p className="text-white/70 text-lg md:text-xl mb-2">
            Page Not Found
          </p>
          <p className="text-white/50 text-sm md:text-base mb-10 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved. Please check the URL or navigate back to the homepage.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3.5 bg-gradient-to-r from-iftm-primary to-red-700 text-white font-semibold text-sm uppercase tracking-wider rounded-xl hover:shadow-lg hover:shadow-iftm-primary/30 transition-all hover:-translate-y-0.5"
            >
              Back to Home
            </Link>
            <Link
              href="/admissions"
              className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm uppercase tracking-wider rounded-xl hover:bg-white/20 transition-all"
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
          <p className="mt-6 text-white/30 text-xs uppercase tracking-[0.3em]">
            IFTM University, Moradabad
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
