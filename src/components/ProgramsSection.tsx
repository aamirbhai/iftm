"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Programme {
  name: string;
  href: string;
  level: "Diploma" | "UG" | "PG" | "Ph.D.";
  duration: string;
  image?: string;
}

interface College {
  id: string;
  name: string;
  programmes: Programme[];
}

const colleges: College[] = [
  {
    id: "sbm",
    name: "Business Management",
    programmes: [
      { name: "BBA (Hons. with Research)", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "B.Com. (Hons. with Research)", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "MBA", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Com.", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Ph.D. in Management", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Commerce", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "sps",
    name: "Pharmaceutical Sciences",
    programmes: [
      { name: "D.Pharm.", href: "/diploma", level: "Diploma", duration: "2 Years" },
      { name: "B.Pharm.", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "M.Pharm (Pharmaceutics)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Pharm (Pharmacology)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Ph.D. in Pharmacy", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "sca",
    name: "Computer Science & IT",
    programmes: [
      { name: "BCA (Hons. with Research)", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "B.Sc. Computer Science", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "MCA", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Ph.D. in Computer Science", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "set",
    name: "Engineering & Technology",
    programmes: [
      { name: "Diploma (Civil)", href: "/diploma", level: "Diploma", duration: "3 Years" },
      { name: "Diploma (Computer Science)", href: "/diploma", level: "Diploma", duration: "3 Years" },
      { name: "Diploma (Electronics & Communication)", href: "/diploma", level: "Diploma", duration: "3 Years" },
      { name: "Diploma (Electrical)", href: "/diploma", level: "Diploma", duration: "3 Years" },
      { name: "Diploma (Mechanical)", href: "/diploma", level: "Diploma", duration: "3 Years" },
      { name: "Diploma (Production Engg.)", href: "/diploma", level: "Diploma", duration: "3 Years" },
      { name: "Diploma (AI)", href: "/diploma", level: "Diploma", duration: "3 Years" },
      { name: "B.Tech (Civil Engineering)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "B.Tech (Computer Science)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "B.Tech (Mechanical Engineering)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "B.Tech (Electrical Engineering)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "M.Tech (Civil Engineering)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Tech (Computer Science)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Ph.D. in Civil Engineering", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Computer Science", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "sos",
    name: "Sciences",
    programmes: [
      { name: "B.Sc. (Hons.) Physics", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "B.Sc. (Hons.) Chemistry", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "B.Sc. (Hons.) Mathematics", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "M.Sc. (Physics)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "M.Sc. (Chemistry)", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Ph.D. in Physics", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Chemistry", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Mathematics", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Botany", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
      { name: "Ph.D. in Zoology", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "sol",
    name: "Law",
    programmes: [
      { name: "LLB", href: "/ug", level: "UG", duration: "3 Years" },
      { name: "BA-LLB (Integrated)", href: "/ug", level: "UG", duration: "5 Years" },
      { name: "LLM", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Ph.D. in Law", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "edu",
    name: "Education",
    programmes: [
      { name: "B.Ed.", href: "/ug", level: "UG", duration: "2 Years" },
      { name: "BA-B.Ed. (Integrated)", href: "/ug", level: "UG", duration: "4 Years" },
      { name: "M.Ed.", href: "/pg", level: "PG", duration: "2 Years" },
      { name: "Ph.D. in Education", href: "/doctoral", level: "Ph.D.", duration: "3-5 Years" },
    ],
  },
  {
    id: "other",
    name: "Other Programmes",
    programmes: [
      { name: "Diploma (Hotel Mgmt)", href: "/diploma", level: "Diploma", duration: "2 Years" },
      { name: "B.Lib. & Information Science", href: "/ug", level: "UG", duration: "1 Year" },
      { name: "MA (English)", href: "/pg", level: "PG", duration: "2 Years" },
    ],
  },
];

const levelColors: Record<string, string> = {
  Diploma: "#FF7900",
  UG: "#FF7900",
  PG: "#1b1f52",
  "Ph.D.": "#950000",
};

export default function ProgramsSection() {
  const [selectedCollege, setSelectedCollege] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCount, setShowCount] = useState(12);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const allProgrammes = useMemo(() => {
    return colleges.flatMap((c) =>
      c.programmes.map((p) => ({ ...p, college: c.name, collegeId: c.id }))
    );
  }, []);

  const filtered = useMemo(() => {
    let list = allProgrammes;
    if (selectedCollege !== "all") {
      list = list.filter((p) => p.collegeId === selectedCollege);
    }
    if (selectedLevel !== "All") {
      list = list.filter((p) => p.level === selectedLevel);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.college.toLowerCase().includes(q)
      );
    }
    return list;
  }, [selectedCollege, selectedLevel, searchQuery, allProgrammes]);

  const visibleProgrammes = filtered.slice(0, showCount);

  const filteredColleges = useMemo(() => {
    if (selectedCollege !== "all") {
      return colleges.filter((c) => c.id === selectedCollege);
    }
    return colleges;
  }, [selectedCollege]);

  const getCollegeProgrammeCount = (college: College) => {
    let list = college.programmes;
    if (selectedLevel !== "All") {
      list = list.filter((p) => p.level === selectedLevel);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }
    return list.length;
  };

  const selectedCollegeName =
    selectedCollege === "all"
      ? "All Colleges"
      : colleges.find((c) => c.id === selectedCollege)?.name || "All Colleges";

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-iftm-navy via-[#0f1235] to-[#1a1040]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-iftm-primary blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-iftm-navy-light blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Programmes <span className="text-iftm-gold">Offered</span>
          </h2>
          {/* Mobile count + filters */}
          <div className="mt-4 lg:hidden">
            <p className="text-white/60 text-sm mb-3">
              <span className="text-white font-bold text-lg">{filtered.length}</span>{" "}
              Programmes
            </p>
            <div className="flex flex-wrap gap-2">
              {["All", "Diploma", "UG", "PG"].map((level) => (
                <button
                  key={level}
                  onClick={() => {
                    setSelectedLevel(level);
                    setShowCount(12);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase transition-all ${
                    selectedLevel === level
                      ? "bg-iftm-primary text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Controls Row */}
        <div className="hidden lg:flex items-center gap-4 mb-6">
          {/* College Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white hover:bg-white/15 transition-colors min-w-[260px]"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-iftm-gold"
              >
                <path d="M2 20h20" />
                <path d="M12 3L3 8h18L12 3z" />
                <line x1="5" y1="8" x2="5" y2="20" />
                <line x1="9" y1="8" x2="9" y2="20" />
                <line x1="15" y1="8" x2="15" y2="20" />
                <line x1="19" y1="8" x2="19" y2="20" />
              </svg>
              <div className="text-left">
                <span className="text-[10px] text-white/50 block">Browse by College</span>
                <span className="text-sm font-semibold">{selectedCollegeName}</span>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`ml-auto transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {dropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setDropdownOpen(false)}
                />
                <div className="absolute top-full left-0 mt-2 z-50 bg-[#1a1f4f] border border-white/10 rounded-xl shadow-2xl p-3 w-[340px] max-h-[400px] overflow-y-auto">
                  <button
                    onClick={() => {
                      setSelectedCollege("all");
                      setDropdownOpen(false);
                      setShowCount(12);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors mb-1 ${
                      selectedCollege === "all"
                        ? "bg-iftm-primary text-white"
                        : "text-white/70 hover:bg-white/10"
                    }`}
                  >
                    All Colleges — {allProgrammes.length} Programmes
                  </button>
                  {colleges.map((c) => {
                    const count = getCollegeProgrammeCount(c);
                    return (
                      <button
                        key={c.id}
                        onClick={() => {
                          setSelectedCollege(c.id);
                          setDropdownOpen(false);
                          setShowCount(12);
                        }}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                          selectedCollege === c.id
                            ? "bg-iftm-primary text-white"
                            : "text-white/70 hover:bg-white/10"
                        }`}
                      >
                        {c.name}{" "}
                        <span className="text-white/40">— {count} Programmes</span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Level Pills */}
          <div className="flex gap-2">
            {["All", "Diploma", "UG", "PG"].map((level) => (
              <button
                key={level}
                onClick={() => {
                  setSelectedLevel(level);
                  setShowCount(12);
                }}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold uppercase transition-all ${
                  selectedLevel === level
                    ? "bg-iftm-primary text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="ml-auto relative">
            <input
              type="text"
              placeholder="Search programmes…"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowCount(12);
              }}
              className="bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-iftm-gold/50 w-[220px]"
            />
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:block">
          <p className="text-white/40 text-xs mb-4">
            Showing <strong className="text-white">{visibleProgrammes.length}</strong> of{" "}
            {filtered.length} programmes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {visibleProgrammes.map((programme, index) => (
              <Link
                key={index}
                href={programme.href}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-iftm-gold/30 hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <div className="relative h-36 bg-gradient-to-br from-iftm-navy to-iftm-navy-light flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-white/20"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  <span
                    className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase text-white"
                    style={{ backgroundColor: levelColors[programme.level] }}
                  >
                    {programme.level}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white/40 text-[10px] bg-white/10 px-2 py-0.5 rounded">
                      {programme.duration}
                    </span>
                  </div>
                  <h3 className="text-white text-sm font-semibold leading-tight mb-3 line-clamp-2 group-hover:text-iftm-gold transition-colors">
                    {programme.name}
                  </h3>
                  <div className="flex items-center text-iftm-gold text-xs font-semibold group-hover:gap-2 transition-all">
                    Explore
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="ml-1 group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          {showCount < filtered.length && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowCount((prev) => prev + 12)}
                className="px-6 py-3 bg-white/10 border border-white/10 rounded-lg text-white text-sm font-semibold hover:bg-white/20 transition-colors inline-flex items-center gap-2"
              >
                Load More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Mobile: Accordion by College */}
        <div className="lg:hidden space-y-3">
          {filteredColleges.map((college) => {
            const programmes = college.programmes.filter((p) => {
              if (selectedLevel !== "All" && p.level !== selectedLevel) return false;
              if (searchQuery.trim()) {
                const q = searchQuery.toLowerCase();
                if (!p.name.toLowerCase().includes(q)) return false;
              }
              return true;
            });

            if (programmes.length === 0) return null;

            const isExpanded = expandedAccordion === college.id;

            return (
              <div
                key={college.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedAccordion(isExpanded ? null : college.id)
                  }
                  className="w-full flex items-center justify-between px-4 py-3.5"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      className="text-iftm-gold"
                    >
                      <path d="M2 20h20" />
                      <path d="M12 3L3 8h18L12 3z" />
                      <line x1="5" y1="8" x2="5" y2="20" />
                      <line x1="9" y1="8" x2="9" y2="20" />
                      <line x1="15" y1="8" x2="15" y2="20" />
                      <line x1="19" y1="8" x2="19" y2="20" />
                    </svg>
                    <div className="text-left">
                      <span className="text-white text-sm font-semibold block">
                        {college.name}
                      </span>
                      <span className="text-white/40 text-[11px]">
                        {programmes.length} Programmes
                      </span>
                    </div>
                  </div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`text-white/60 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4">
                    <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
                      {programmes.map((p, i) => (
                        <Link
                          key={i}
                          href={p.href}
                          className="flex-shrink-0 w-[200px] snap-start bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-iftm-gold/30 transition-colors"
                        >
                          <div className="relative h-28 bg-gradient-to-br from-iftm-navy to-iftm-navy-light flex items-center justify-center">
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              className="text-white/20"
                            >
                              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                              <path d="M6 12v5c3 3 9 3 12 0v-5" />
                            </svg>
                            <span
                              className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase text-white"
                              style={{ backgroundColor: levelColors[p.level] }}
                            >
                              {p.level}
                            </span>
                          </div>
                          <div className="p-3">
                            <span className="text-white/40 text-[10px] block mb-1">
                              {p.duration}
                            </span>
                            <h4 className="text-white text-xs font-semibold leading-tight line-clamp-2 mb-2">
                              {p.name}
                            </h4>
                            <div className="flex items-center text-iftm-gold text-[11px] font-semibold">
                              Explore
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                className="ml-1"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
