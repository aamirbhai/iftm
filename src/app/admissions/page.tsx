import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdmissionsEnquiryForm from "@/components/AdmissionsEnquiryForm";
import { programmeCategories } from "@/data/programmeCategories";
import AdmissionsFAQ from "@/components/AdmissionsFAQ";

export const metadata: Metadata = {
  title: "Admissions 2026-27 - IFTM University Moradabad",
  description: "Apply for admission at IFTM University Moradabad for 2026-27 session. 130+ programmes including B.Tech, B.Pharm, MBA, BBA, BCA, LLB. Merit scholarships up to 100% fee waiver. NAAC 'A' Grade university.",
  alternates: {
    canonical: "https://iftmuniversity.ac.in/admissions",
  },
  openGraph: {
    title: "Admissions 2026-27 - IFTM University Moradabad",
    description: "Apply for admission at IFTM University Moradabad. 130+ programmes, 90%+ placements, merit scholarships available.",
    url: "https://iftmuniversity.ac.in/admissions",
  },
};

const stats = [
  { value: "130+", label: "Programmes", icon: "fa-graduation-cap" },
  { value: "90%+", label: "Placement", icon: "fa-briefcase" },
  { value: "10K+", label: "Students", icon: "fa-users" },
  { value: "500+", label: "Recruiters", icon: "fa-handshake" },
];

const trustBadges = [
  { label: "NAAC 'A' Grade", icon: "fa-award" },
  { label: "UGC Recognized", icon: "fa-university" },
  { label: "AICTE Approved", icon: "fa-check-circle" },
  { label: "PCI Approved", icon: "fa-check-circle" },
  { label: "BCI Approved", icon: "fa-check-circle" },
];

const testimonials = [
  { name: "Priya Sharma", programme: "B.Tech CSE, 2024", text: "IFTM gave me the perfect platform to launch my career. Got placed at TCS with a great package!", rating: 5 },
  { name: "Rahul Kumar", programme: "MBA, 2023", text: "The faculty support and industry exposure at IFTM is unmatched. Best decision of my life.", rating: 5 },
  { name: "Anjali Singh", programme: "B.Pharm, 2024", text: "Excellent infrastructure and lab facilities. The placement cell really cares about students.", rating: 5 },
];

/* ─── Main Component ─── */
export default function AdmissionsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* ═══ HERO + ENQUIRY FORM ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-iftm-navy to-[#1a1040]" />
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-iftm-primary/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full bg-iftm-gold/15 blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 pt-[120px] md:pt-[130px] pb-12 md:pb-16 max-w-[1200px] mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-white/50 text-sm">
              <li><a href="/" className="hover:text-iftm-gold transition-colors">Home</a></li>
              <li>/</li>
              <li className="text-iftm-gold">Admissions</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* ─── Left: Content ─── */}
            <div>
              <div className="inline-flex items-center gap-2 bg-iftm-primary/90 backdrop-blur-sm px-4 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-white font-bold text-xs uppercase tracking-widest">Admissions Open 2026-27</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Your Future <span className="text-iftm-gold">Starts Here</span>
              </h1>

              <p className="text-white/60 text-base md:text-lg max-w-md mb-6">
                Join 10,000+ students at Moradabad&apos;s premier university. 130+ programmes, 90%+ placements, 69+ acre green campus.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-center gap-3 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
                    <div className="w-9 h-9 rounded-lg bg-iftm-gold/20 flex items-center justify-center">
                      <i className={"fas " + s.icon + " text-iftm-gold text-sm"} />
                    </div>
                    <div>
                      <p className="text-white font-extrabold text-lg leading-none">{s.value}</p>
                      <p className="text-white/40 text-[10px] uppercase tracking-wider">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2">
                {trustBadges.map((b) => (
                  <span key={b.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] border border-white/10 rounded-lg text-white/60 text-xs font-medium">
                    <i className={"fas " + b.icon + " text-iftm-gold text-[10px]"} /> {b.label}
                  </span>
                ))}
              </div>
            </div>

            {/* ─── Right: Enquiry Form ─── */}
            <div>
              <AdmissionsEnquiryForm />
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full"><path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 28C672 36 768 42 864 40C960 38 1056 28 1152 22C1248 16 1344 14 1392 13L1440 12V60H0Z" fill="white" /></svg>
        </div>
      </section>

      {/* ═══ PROGRAMMES GRID ═══ */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">130+ Programmes</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Choose Your <span className="text-iftm-gold">Path</span></h2>
            <p className="text-gray-500 max-w-lg mx-auto">Explore our diverse range of UG, PG, and diploma programmes across 12 schools.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {programmeCategories.map((cat) => (
              <div key={cat.title} className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-lg shadow-black/[0.03] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                <div className={"absolute inset-0 bg-gradient-to-br " + cat.color + " opacity-0 group-hover:opacity-[0.04] transition-opacity"} />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={"w-10 h-10 rounded-xl bg-gradient-to-br " + cat.color + " flex items-center justify-center shadow-lg"}>
                      <i className={"fas " + cat.icon + " text-white text-sm"} />
                    </div>
                    <h3 className="font-bold text-iftm-navy text-sm">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.programmes.map((p) => (
                      <span key={p} className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs rounded-lg border border-gray-100">{p}</span>
                    ))}
                  </div>
                  <a href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-iftm-primary text-xs font-bold uppercase tracking-wider group-hover:gap-2.5 transition-all">
                    Apply Now <i className="fas fa-arrow-right text-[10px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY IFTM ═══ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">The IFTM <span className="text-iftm-gold">Advantage</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { icon: "fa-shield-alt", title: "NAAC 'A' Grade", desc: "Nationally accredited for academic excellence and infrastructure quality.", color: "from-iftm-primary to-red-700" },
              { icon: "fa-briefcase", title: "90%+ Placements", desc: "500+ recruiting partners including TCS, Infosys, Amazon, Wipro.", color: "from-iftm-gold to-amber-600" },
              { icon: "fa-tree", title: "69+ Acre Campus", desc: "Green campus with modern labs, library, sports complex, and hostels.", color: "from-green-500 to-emerald-600" },
              { icon: "fa-rupee-sign", title: "Scholarships", desc: "Merit scholarships up to 100% fee waiver for deserving students.", color: "from-blue-500 to-indigo-600" },
            ].map((item) => (
              <div key={item.title} className="group text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className={"w-14 h-14 rounded-2xl bg-gradient-to-br " + item.color + " flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform"}>
                  <i className={"fas " + item.icon + " text-white text-lg"} />
                </div>
                <h3 className="font-bold text-iftm-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Student Stories</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Hear From Our <span className="text-iftm-gold">Students</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (<i key={i} className="fas fa-star text-iftm-gold text-sm" />))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-iftm-primary to-iftm-primary-dark flex items-center justify-center text-white font-bold text-sm">{t.name[0]}</div>
                  <div>
                    <p className="font-bold text-iftm-navy text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.programme}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Got <span className="text-iftm-gold">Questions?</span></h2>
          </div>
          <AdmissionsFAQ />
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-iftm-primary to-iftm-primary-dark relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/5 blur-[60px]" />
        <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-iftm-gold/10 blur-[60px]" />
        <div className="relative max-w-[800px] mx-auto px-4 md:px-6 text-center">
          <span className="text-iftm-gold text-xs font-bold uppercase tracking-[2px] mb-2 block">Limited Seats Available</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Don&apos;t Miss Your Chance</h2>
          <p className="text-white/70 text-base md:text-lg mb-8 max-w-[500px] mx-auto">Secure your seat at IFTM University for the 2026-27 session. Apply now and take the first step towards a successful career.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-iftm-gold text-iftm-dark font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-yellow-400 transition-all hover:-translate-y-0.5 shadow-lg shadow-iftm-gold/30">
              Apply Now <i className="fas fa-arrow-right ml-2" />
            </a>
            <a href="tel:18002701490" className="px-8 py-3.5 bg-white/10 text-white border-2 border-white font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-white hover:text-iftm-primary transition-all">
              <i className="fas fa-phone-alt mr-2" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "IFTM University",
        "url": "https://iftmuniversity.ac.in",
        "address": { "@type": "PostalAddress", "streetAddress": "Lodhipur Rajput, Delhi Road", "addressLocality": "Moradabad", "addressRegion": "UP", "postalCode": "244102", "addressCountry": "IN" },
        "telephone": "1800-270-1490",
      }) }} />

      <Footer />
    </main>
  );
}
