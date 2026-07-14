"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const criteria = [
  { num: "1", title: "Curricular Aspects", desc: "Curriculum design, flexibility, feedback system, and academic enrichment." },
  { num: "2", title: "Teaching-Learning & Evaluation", desc: "Student-centric learning, faculty quality, and evaluation reforms." },
  { num: "3", title: "Research, Innovation & Extension", desc: "Research promotion, collaboration, and extension activities." },
  { num: "4", title: "Infrastructure & Learning Resources", desc: "Physical facilities, IT infrastructure, and library resources." },
  { num: "5", title: "Student Support & Progression", desc: "Student support mechanisms, progression tracking, and alumni engagement." },
  { num: "6", title: "Governance, Leadership & Management", desc: "Vision, leadership, faculty empowerment, and financial management." },
  { num: "7", title: "Institutional Values & Best Practices", desc: "Gender equity, environmental consciousness, and best practices." },
];

const approvals = [
  { name: "UGC", full: "University Grants Commission", desc: "Recognized under Section 2(f) of UGC Act, 1956", icon: "fa-university" },
  { name: "AICTE", full: "All India Council for Technical Education", desc: "Approved for Engineering & Management programmes", icon: "fa-check-circle" },
  { name: "PCI", full: "Pharmacy Council of India", desc: "Approved for Pharmacy programmes", icon: "fa-check-circle" },
  { name: "BCI", full: "Bar Council of India", desc: "Approved for Law programmes", icon: "fa-check-circle" },
  { name: "NCTE", full: "National Council for Teacher Education", desc: "Approved for B.Ed programme", icon: "fa-check-circle" },
  { name: "INC", full: "Indian Nursing Council", desc: "Approved for Nursing programmes", icon: "fa-check-circle" },
];

export default function NAACPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-iftm-navy to-[#1a1040]" />
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-iftm-gold/20 blur-[100px] animate-pulse" />

        <div className="relative z-10 pt-[120px] md:pt-[130px] pb-16 max-w-[1100px] mx-auto px-4 md:px-6">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-white/50 text-sm">
              <li><a href="/" className="hover:text-iftm-gold transition-colors">Home</a></li>
              <li>/</li>
              <li className="text-iftm-gold">NAAC & Approvals</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-iftm-gold/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-5">
                <i className="fas fa-award text-iftm-gold text-sm" />
                <span className="text-iftm-gold font-bold text-xs uppercase tracking-widest">Accredited</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                NAAC <span className="text-iftm-gold">&apos;A&apos; Grade</span>
              </h1>
              <p className="text-white/60 text-lg max-w-xl mb-6">
                IFTM University is accredited with &apos;A&apos; Grade by the National Assessment and Accreditation Council (NAAC), recognizing excellence in academic quality, infrastructure, and research.
              </p>
            </div>

            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <div className="text-center">
                <p className="text-iftm-gold text-5xl md:text-6xl font-extrabold">A</p>
                <p className="text-white text-xs font-medium mt-1">NAAC Grade</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full"><path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 28C672 36 768 42 864 40C960 38 1056 28 1152 22C1248 16 1344 14 1392 13L1440 12V60H0Z" fill="white" /></svg>
        </div>
      </section>

      {/* NAAC CRITERIA */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Assessment Framework</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">NAAC <span className="text-iftm-gold">Criteria</span></h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">NAAC assesses institutions across 7 key criteria covering all aspects of quality education.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {criteria.map((c) => (
              <div key={c.num} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-iftm-gold to-amber-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">{c.num}</span>
                  </div>
                  <h3 className="font-bold text-iftm-navy text-sm">Criteria {c.num}</h3>
                </div>
                <p className="font-medium text-iftm-navy text-sm mb-1">{c.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROVALS */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Recognized & Approved</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Government <span className="text-iftm-gold">Approvals</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {approvals.map((a) => (
              <div key={a.name} className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-all flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-iftm-primary/10 flex items-center justify-center flex-shrink-0">
                  <i className={"fas " + a.icon + " text-iftm-primary text-lg"} />
                </div>
                <div>
                  <p className="font-bold text-iftm-navy">{a.name}</p>
                  <p className="text-gray-500 text-xs mb-1">{a.full}</p>
                  <p className="text-iftm-primary text-xs font-medium">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NIRF / RANKINGS */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Rankings</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">National <span className="text-iftm-gold">Rankings</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "NAAC Accredited", detail: "'A' Grade", icon: "fa-award", color: "from-iftm-gold to-amber-600" },
              { title: "NIRF Ranked", detail: "Among top universities", icon: "fa-chart-line", color: "from-iftm-primary to-red-700" },
              { title: "Shiksha Ratna", detail: "Excellence in Education", icon: "fa-trophy", color: "from-blue-500 to-indigo-600" },
            ].map((r) => (
              <div key={r.title} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all">
                <div className={"w-14 h-14 rounded-2xl bg-gradient-to-br " + r.color + " flex items-center justify-center mx-auto mb-4 shadow-lg"}>
                  <i className={"fas " + r.icon + " text-white text-xl"} />
                </div>
                <p className="font-bold text-iftm-navy text-lg">{r.title}</p>
                <p className="text-iftm-gold font-semibold">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANTI RAGGING */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-iftm-primary to-iftm-primary-dark relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/5 blur-[60px]" />
        <div className="relative max-w-[800px] mx-auto px-4 md:px-6 text-center">
          <i className="fas fa-shield-alt text-iftm-gold text-4xl mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Anti-Ragging Policy</h2>
          <p className="text-white/70 mb-6 max-w-[500px] mx-auto">
            IFTM University has a zero-tolerance policy towards ragging. Anti-ragging committees are constituted as per UGC regulations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:18002701490" className="px-6 py-3 bg-white/10 text-white border border-white/30 font-semibold text-sm rounded-lg hover:bg-white/20 transition-all">
              <i className="fas fa-phone-alt mr-2" /> Helpline: 1800-270-1490
            </a>
            <a href="https://antiragging.in" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-iftm-gold text-iftm-dark font-bold text-sm rounded-lg hover:bg-yellow-400 transition-all">
              UGC Anti-Ragging Portal
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
