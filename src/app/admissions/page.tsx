"use client";

import { useState, useEffect, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─── Data ─── */
const programmeCategories = [
  { title: "Engineering & Technology", icon: "fa-microchip", color: "from-blue-500 to-indigo-600", programmes: ["B.Tech (CSE)", "B.Tech (ME)", "B.Tech (CE)", "B.Tech (EE)", "M.Tech"] },
  { title: "Pharmacy", icon: "fa-pills", color: "from-green-500 to-emerald-600", programmes: ["B.Pharm", "D.Pharm", "M.Pharm"] },
  { title: "Management & Commerce", icon: "fa-chart-line", color: "from-iftm-gold to-amber-600", programmes: ["MBA", "BBA", "B.Com", "M.Com"] },
  { title: "Computer Applications", icon: "fa-laptop-code", color: "from-purple-500 to-violet-600", programmes: ["BCA", "MCA"] },
  { title: "Law", icon: "fa-gavel", color: "from-iftm-primary to-red-700", programmes: ["LLB", "BA-LLB", "LLM"] },
  { title: "Sciences & Others", icon: "fa-flask", color: "from-cyan-500 to-blue-600", programmes: ["B.Sc (Nursing)", "B.Sc (Agriculture)", "B.Ed", "B.Lib"] },
];

const allProgrammes = programmeCategories.flatMap((c) => c.programmes);

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

const faqs = [
  { q: "What is the admission process?", a: "Apply online through our portal, submit required documents, and attend counselling. Merit-based admissions with scholarships available for deserving students." },
  { q: "Are scholarships available?", a: "Yes! IFTM offers merit scholarships up to 100% tuition fee waiver, sports scholarships, and need-based financial assistance for eligible students." },
  { q: "What is the placement record?", a: "90%+ placement rate with 500+ recruiting partners including TCS, Infosys, Wipro, Amazon, and more. Highest package: ₹12 LPA." },
  { q: "Is hostel facility available?", a: "Yes, separate hostel facilities for boys and girls with Wi-Fi, mess, 24/7 security, and recreational facilities within the 69+ acre campus." },
  { q: "What approvals does IFTM have?", a: "NAAC 'A' Grade, UGC Section 2(f), AICTE, PCI, and BCI approved. Your degree is recognized nationwide and globally." },
];

interface FormData { name: string; phone: string; email: string; programme: string; message: string; }
interface FormErrors { name?: string; phone?: string; email?: string; programme?: string; }

/* ─── Main Component ─── */
export default function AdmissionsPage() {
  const [formData, setFormData] = useState<FormData>({ name: "", phone: "", email: "", programme: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const h = () => setShowFloatingCta(window.scrollY > 600);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  function validate(): boolean {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.phone.trim()) { e.phone = "Phone is required"; } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) { e.phone = "Enter valid 10-digit number"; }
    if (!formData.email.trim()) { e.email = "Email is required"; } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) { e.email = "Enter valid email"; }
    if (!formData.programme) e.programme = "Select a programme";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); }, 1500);
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field as keyof FormErrors]) setErrors((p) => ({ ...p, [field]: undefined }));
  }

  const inputCls = (err?: string) =>
    "w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border " +
    (err ? "border-red-400" : "border-white/20") +
    " text-white placeholder-white/40 focus:outline-none focus:border-iftm-gold focus:bg-white/15 focus:ring-2 focus:ring-iftm-gold/20 transition-all text-sm";

  return (
    <main className="min-h-screen">
      <Header />

      {/* ═══ HERO + ENQUIRY FORM ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-iftm-navy to-[#1a1040]" />
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-iftm-primary/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full bg-iftm-gold/15 blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* ─── Vertical Side Badge (mobile only) ─── */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 md:hidden">
          <div className="bg-iftm-primary/95 backdrop-blur-sm px-2 py-4 rounded-l-xl shadow-lg flex flex-col items-center gap-2 writing-mode-vertical">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em] whitespace-nowrap" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>Admissions Open 2026-27</span>
          </div>
        </div>

        <div className="relative z-10 pt-[120px] md:pt-[130px] pb-12 md:pb-16 max-w-[1200px] mx-auto px-4 md:px-6 pr-14 md:pr-6">
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
              {/* Desktop badge - hidden on mobile */}
              <div className="hidden md:inline-flex items-center gap-2 bg-iftm-primary/90 backdrop-blur-sm px-4 py-1.5 rounded-full mb-5">
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
              {isSubmitted ? (
                <div className="bg-white rounded-3xl p-8 md:p-10 text-center shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl shadow-green-500/30">
                      <i className="fas fa-check text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-iftm-navy mb-2">Thank You!</h3>
                    <p className="text-gray-500 mb-6 text-sm">Your enquiry has been received. Our counsellor will contact you within 24 hours.</p>
                    <button onClick={() => { setIsSubmitted(false); setFormData({ name: "", phone: "", email: "", programme: "", message: "" }); }} className="px-6 py-2.5 bg-gradient-to-r from-iftm-primary to-iftm-primary-dark text-white rounded-xl hover:shadow-lg transition-all font-semibold text-sm">
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-[-40px] right-[-40px] w-[120px] h-[120px] rounded-full bg-iftm-gold/10 blur-[40px]" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-iftm-gold/20 flex items-center justify-center">
                        <i className="fas fa-pen-fancy text-iftm-gold text-sm" />
                      </div>
                      <div>
                        <h3 className="text-lg font-extrabold text-white">Quick Enquiry</h3>
                        <p className="text-white/40 text-xs">Get a callback within 24 hours</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1">Full Name *</label>
                          <div className="relative">
                            <i className="fas fa-user absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 text-sm" />
                            <input type="text" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Your name" className={inputCls(errors.name)} />
                          </div>
                          {errors.name && <p className="text-red-400 text-[11px] mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1">Phone *</label>
                          <div className="relative">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 text-sm">+91</span>
                            <input type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))} placeholder="10-digit number" className={"w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border " + (errors.phone ? "border-red-400" : "border-white/20") + " text-white placeholder-white/40 focus:outline-none focus:border-iftm-gold focus:bg-white/15 focus:ring-2 focus:ring-iftm-gold/20 transition-all text-sm"} />
                          </div>
                          {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1">Email *</label>
                        <div className="relative">
                          <i className="fas fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 text-sm" />
                          <input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="your.email@example.com" className={inputCls(errors.email)} />
                        </div>
                        {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1">Programme *</label>
                        <div className="relative">
                          <i className="fas fa-graduation-cap absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 text-sm" />
                          <select value={formData.programme} onChange={(e) => handleChange("programme", e.target.value)} className={"w-full pl-10 pr-8 py-3 rounded-xl bg-white/10 border appearance-none " + (errors.programme ? "border-red-400" : "border-white/20") + " text-white focus:outline-none focus:border-iftm-gold focus:bg-white/15 focus:ring-2 focus:ring-iftm-gold/20 transition-all text-sm"}>
                            <option value="" className="text-gray-900">Select a programme</option>
                            {allProgrammes.map((p) => (<option key={p} value={p} className="text-gray-900">{p}</option>))}
                          </select>
                          <i className="fas fa-chevron-down absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 text-xs pointer-events-none" />
                        </div>
                        {errors.programme && <p className="text-red-400 text-[11px] mt-1">{errors.programme}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1">Message <span className="font-normal opacity-60">(Optional)</span></label>
                        <textarea value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Any questions..." rows={2} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-iftm-gold focus:bg-white/15 focus:ring-2 focus:ring-iftm-gold/20 transition-all text-sm resize-none" />
                      </div>

                      <button type="submit" disabled={isSubmitting} className="w-full py-3.5 bg-iftm-gold text-iftm-dark font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-yellow-400 transition-all hover:shadow-lg hover:shadow-iftm-gold/30 disabled:opacity-60 disabled:cursor-not-allowed">
                        {isSubmitting ? (<><i className="fas fa-spinner fa-spin mr-2" />Submitting...</>) : (<>Submit Enquiry <i className="fas fa-arrow-right ml-2" /></>)}
                      </button>

                      <div className="flex items-center justify-center gap-4 pt-1">
                        <a href="tel:18002701490" className="text-white/50 text-xs hover:text-iftm-gold transition-colors">
                          <i className="fas fa-phone-alt mr-1" /> 1800-270-1490
                        </a>
                        <span className="text-white/20">|</span>
                        <a href="https://api.whatsapp.com/send/?phone=919639004077" target="_blank" rel="noopener noreferrer" className="text-white/50 text-xs hover:text-green-400 transition-colors">
                          <i className="fab fa-whatsapp mr-1" /> WhatsApp
                        </a>
                      </div>

                      <p className="text-[10px] text-white/30 text-center">By submitting, you agree to receive admission-related communication from IFTM University.</p>
                    </form>
                  </div>
                </div>
              )}
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
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-gray-100/50 transition-colors">
                  <span className="font-bold text-iftm-navy text-sm md:text-base pr-4">{faq.q}</span>
                  <i className={"fas fa-chevron-down text-iftm-primary text-xs transition-transform duration-300 flex-shrink-0 " + (openFaq === i ? "rotate-180" : "")} />
                </button>
                <div className={"overflow-hidden transition-all duration-300 " + (openFaq === i ? "max-h-40" : "max-h-0")}>
                  <p className="px-4 md:px-5 pb-4 md:pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
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

      {/* ═══ FLOATING CTA (Mobile) ═══ */}
      {showFloatingCta && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-3 flex gap-2">
          <a href="tel:18002701490" className="flex-1 py-3 bg-white border border-iftm-primary text-iftm-primary font-bold text-sm rounded-xl text-center">
            <i className="fas fa-phone-alt mr-1.5" /> Call
          </a>
          <a href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php" target="_blank" rel="noopener noreferrer" className="flex-[2] py-3 bg-gradient-to-r from-iftm-primary to-iftm-primary-dark text-white font-bold text-sm rounded-xl text-center shadow-lg shadow-iftm-primary/30">
            Apply Now <i className="fas fa-arrow-right ml-1.5" />
          </a>
        </div>
      )}

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
