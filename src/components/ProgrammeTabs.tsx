"use client";

import { useState, useEffect } from "react";

interface Tab {
  id: string;
  label: string;
}

interface Props {
  tabs: Tab[];
}

export default function ProgrammeTabs({ tabs }: Props) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);

      for (const tab of tabs) {
        const el = document.getElementById(tab.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveTab(tab.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabs]);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isSticky
          ? "fixed top-[72px] left-0 right-0 z-40 bg-iftm-navy/95 backdrop-blur-md shadow-lg"
          : "relative"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <nav className="flex gap-1 overflow-x-auto scrollbar-hide py-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab.id
                  ? "text-iftm-gold border-iftm-gold"
                  : "text-white/60 border-transparent hover:text-white hover:border-white/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
