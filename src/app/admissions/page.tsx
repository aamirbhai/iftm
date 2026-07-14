"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─── Programmes Data ─── */
const programmeCategories = [
  {
    title: "Engineering & Technology",
    icon: "fa-microchip",
    color: "from-blue-500 to-indigo-600",
    programmes: ["B.Tech (CSE)", "B.Tech (ME)", "B.Tech (CE)", "B.Tech (EE)", "M.Tech"],
  },
  {
    title: "Pharmacy",
    icon: "fa-pills",
    color: "from-green-500 to-emerald-600",
    programmes: ["B.Pharm", "D.Pharm", "M.Pharm"],
  },
  {
    title: "Management & Commerce",
    icon: "fa-chart-line",
    color: "from-iftm-gold to-amber-600",
    programmes: ["MBA", "BBA", "B.Com", "M.Com"],
  },
  {
    title: "Computer Applications",
    icon: "fa-laptop-code",
    color: "from-purple-500 to-violet-600",
    programmes: ["BCA", "MCA"],
  },
  {
    title: "Law",
    icon: "fa-gavel",
    color: "from-iftm-primary to-red-700",
    programmes: ["LLB", "BA-LLB", "LLM"],
  },
  {
    title: "Sciences & Others",
    icon: "fa-flask",
    color: "from-cyan-500 to-blue-600",
    programmes: ["B.Sc (Nursing)", "B.Sc (Agriculture)", "B.Ed", "B.Lib"],
  },
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
  {
    name: "Priya Sharma",
    programme: "B.Tech CSE, 2024",
    text: "IFTM gave me the perfect platform to launch my career. Got placed at TCS with a great package!",
    rating: 5,
  },
  {
    name: "Rahul Kumar",
    programme: "MBA, 2023",
    text: "The faculty support and industry exposure at IFTM is unmatched. Best decision of my life.",
    rating: 5,
  },
  {
    name: "Anjali Singh",
    programme: "B.Pharm, 2024",
    text: "Excellent infrastructure and lab facilities. The placement cell really cares about students.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "What is the admission process?",
    a: "Apply online through our portal, submit required documents, and attend counselling. Merit-based admissions with scholarships available for deserving students.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes! IFTM offers merit scholarships up to 100% tuition fee waiver, sports scholarships, and need-based financial assistance for eligible students.",
  },
  {
    q: "What is the placement record?",
    a: "90%+ placement rate with 500+ recruiting partners including TCS, Infosys, Wipro, Amazon, and more. Highest package: ₹12 LPA.",
  },
  {
    q: "Is hostel facility available?",
    a: "Yes, separate hostel facilities for boys and girls with Wi-Fi, mess, 24/7 security, and recreational facilities within the 69+ acre campus.",
  },
  {
    q: "What approvals does IFTM have?",
    a: "NAAC 'A' Grade, UGC Section 2(f), AICTE, PCI, and BCI approved. Your degree is recognized nationwide and globally.",
  },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  programme: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  programme?: string;
}

/* ─── Main Component ─── */
export default function AdmissionsPage() {
  const [formData, setFormData] = useState<FormData>({ name: "", phone: "", email: "", programme: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  // Floating CTA on scroll
  useEffect(() => {
    const handleScroll = () => setShowFloatingCta(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function validate(): boolean {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.phone.trim()) {
      e.phone = "Phone is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      e.phone = "Enter valid 10-digit number";
    }
    if (!formData.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      e.email = "Enter valid email";
    }
    if (!formData.programme) e.programme = "Select a programme";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field as keyof FormErrors]) setErrors((p) => ({ ...p, [field]: undefined }));
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[380px] md:min-h-[450px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-iftm-navy to-[#1a1040]" />
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-iftm-primary/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full bg-iftm-gold/15 blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 pt-[120px] md:pt-[140px] pb-16 md:pb-20 max-w-[1100px] mx-auto px-4 md:px-6">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-white/50 text-sm">
              <li><a href="/" className="hover:text-iftm-gold transition-colors">Home</a></li>
              <li>/</li>
              <li className="text-iftm-gold">Admissions</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-iftm-primary/90 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-white font-bold text-xs uppercase tracking-widest">Admissions Open 2026-27</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3">
                Your Future <span className="text-iftm-gold">Starts Here</span>
              </h1>
              <p className="text-white/60 text-lg max-w-xl mb-6">
                Join 10,000+ students at Moradabad&apos;s premier university. 130+ programmes, 90%+ placements, 69+ acre green campus.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-iftm-gold text-iftm-dark font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-yellow-400 transition-all hover:-translate-y-0.5 shadow-lg shadow-iftm-gold/30">
                  Apply Now <i className="fas fa-arrow-right ml-2" />
                </a>
                <a href="#enquiry-form" className="px-6 py-3 bg-white/10 text-white border border-white/30 font-semibold text-sm rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm">
                  Enquire Now
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="text-center -rotate-12 hover:rotate-0 transition-transform duration-500">
                  <p className="text-iftm-gold text-2xl font-bold">NAAC</p>
                  <p className="text-white text-xs font-medium">&apos;A&apos; Grade</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full"><path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 28C672 36 768 42 864 40C960 38 1056 28 1152 22C1248 16 1344 14 1392 13L1440 12V60H0Z" fill="white" /></svg>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="relative -mt-1 z-10">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl shadow-xl shadow-black/[0.06] border border-gray-100 p-4 md:p-6 -mt-8 relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-iftm-primary to-iftm-primary-dark flex items-center justify-center shadow-lg shadow-iftm-primary/20">
                    <i className={"fas " + s.icon + " text-white text-sm"} />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-extrabold text-iftm-navy">{s.value}</p>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROGRAMMES GRID ═══ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">130+ Programmes</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">
              Choose Your <span className="text-iftm-gold">Path</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">Explore our diverse range of undergraduate, postgraduate, and diploma programmes across 12 schools.</p>
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
                      <span key={p} className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs rounded-lg border border-gray-100 group-hover:border-iftm-primary/20 transition-colors">{p}</span>
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">
              The IFTM <span className="text-iftm-gold">Advantage</span>
            </h2>
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

      {/* ═══ ENQUIRY FORM + INFO ═══ */}
      <section id="enquiry-form" className="py-16 md:py-20 bg-gradient-to-br from-[#0a0e2a] via-iftm-navy to-[#1a1040] relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-iftm-primary/10 blur-[80px]" />
        <div className="absolute bottom-[-80px] left-[-80px] w-[250px] h-[250px] rounded-full bg-iftm-gold/10 blur-[60px]" />

        <div className="relative max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-gold text-xs font-bold uppercase tracking-[2px] mb-2 block">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Begin Your <span className="text-iftm-gold">Journey</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto">Fill the form below and our admission counsellor will reach out within 24 hours.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Left Info */}
            <div className="lg:col-span-2 space-y-5">
              {/* Contact Cards */}
              {[
                { icon: "fa-phone-alt", color: "from-iftm-primary to-iftm-primary-dark", title: "Admission Helpline", value: "1800-270-1490", sub: "Toll Free • Mon-Sat 9AM-6PM", href: "tel:18002701490" },
                { icon: "fa-whatsapp", color: "from-green-500 to-emerald-600", title: "WhatsApp", value: "+91 9639004077", sub: "Chat with us anytime", href: "https://api.whatsapp.com/send/?phone=919639004077" },
                { icon: "fa-envelope", color: "from-iftm-gold to-amber-600", title: "Email Us", value: "admissions@iftm.ac.in", sub: "Response within 24 hours", href: "mailto:admissions@iftm.ac.in" },
                { icon: "fa-map-marker-alt", color: "from-blue-500 to-indigo-600", title: "Visit Campus", value: "Lodhipur Rajput, Delhi Road", sub: "Moradabad - 244102, UP", href: "https://maps.google.com/?q=IFTM+University+Moradabad" },
              ].map((card) => (
                <a key={card.title} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex items-start gap-4 bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/[0.12] hover:border-white/20 transition-all duration-300">
                  <div className={"w-11 h-11 rounded-xl bg-gradient-to-br " + card.color + " flex items-center justify-center flex-shrink-0 shadow-lg"}>
                    <i className={"fas " + card.icon + " text-white text-sm"} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{card.title}</p>
                    <p className="text-iftm-gold font-semibold text-sm">{card.value}</p>
                    <p className="text-white/40 text-xs">{card.sub}</p>
                  </div>
                </a>
              ))}

              {/* Trust Badges */}
              <div className="bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <p className="text-white/50 text-xs uppercase tracking-wider font-bold mb-3">Approvals & Accreditations</p>
                <div className="flex flex-wrap gap-2">
                  {trustBadges.map((b) => (
                    <span key={b.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.08] rounded-lg text-white/70 text-xs font-medium">
                      <i className={"fas " + b.icon + " text-iftm-gold text-[10px]"} /> {b.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl shadow-green-500/30">
                      <i className="fas fa-check text-white text-3xl" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-iftm-navy mb-3">Thank You!</h3>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto">Your enquiry has been received. Our admission counsellor will contact you within 24 hours.</p>
                    <button onClick={() => { setIsSubmitted(false); setFormData({ name: "", phone: "", email: "", programme: "", message: "" }); }} className="px-8 py-3 bg-gradient-to-r from-iftm-primary to-iftm-primary-dark text-white rounded-xl hover:shadow-lg transition-all font-semibold text-sm">
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] rounded-full bg-iftm-primary/[0.04] blur-[50px]" />
                  <div className="absolute bottom-[-40px] left-[-40px] w-[120px] h-[120px] rounded-full bg-iftm-gold/[0.04] blur-[40px]" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-iftm-primary to-iftm-primary-dark flex items-center justify-center shadow-lg shadow-iftm-primary/20">
                        <i className="fas fa-pen-fancy text-white text-sm" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-iftm-navy">Enquiry Form</h3>
                        <p className="text-gray-400 text-xs">Fields marked * are required</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-iftm-navy uppercase tracking-wider mb-1.5">Full Name <span className="text-iftm-primary">*</span></label>
                          <div className="relative">
                            <i className="fas fa-user absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
                            <input type="text" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Enter full name" className={"w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border " + (errors.name ? "border-red-400 bg-red-50/50" : "border-gray-200") + " focus:outline-none focus:border-iftm-primary focus:bg-white focus:ring-2 focus:ring-iftm-primary/10 transition-all text-sm"} />
                          </div>
                          {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><i className="fas fa-exclamation-circle" />{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-iftm-navy uppercase tracking-wider mb-1.5">Phone Number <span className="text-iftm-primary">*</span></label>
                          <div className="relative">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">+91</span>
                            <input type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))} placeholder="10-digit number" className={"w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border " + (errors.phone ? "border-red-400 bg-red-50/50" : "border-gray-200") + " focus:outline-none focus:border-iftm-primary focus:bg-white focus:ring-2 focus:ring-iftm-primary/10 transition-all text-sm"} />
                          </div>
                          {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><i className="fas fa-exclamation-circle" />{errors.phone}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-iftm-navy uppercase tracking-wider mb-1.5">Email Address <span className="text-iftm-primary">*</span></label>
                        <div className="relative">
                          <i className="fas fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
                          <input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="your.email@example.com" className={"w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border " + (errors.email ? "border-red-400 bg-red-50/50" : "border-gray-200") + " focus:outline-none focus:border-iftm-primary focus:bg-white focus:ring-2 focus:ring-iftm-primary/10 transition-all text-sm"} />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><i className="fas fa-exclamation-circle" />{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-iftm-navy uppercase tracking-wider mb-1.5">Programme of Interest <span className="text-iftm-primary">*</span></label>
                        <div className="relative">
                          <i className="fas fa-graduation-cap absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
                          <select value={formData.programme} onChange={(e) => handleChange("programme", e.target.value)} className={"w-full pl-10 pr-8 py-3 rounded-xl bg-gray-50 border appearance-none " + (errors.programme ? "border-red-400 bg-red-50/50" : "border-gray-200") + " focus:outline-none focus:border-iftm-primary focus:bg-white focus:ring-2 focus:ring-iftm-primary/10 transition-all text-sm"}>
                            <option value="">Select a programme</option>
                            {allProgrammes.map((p) => (<option key={p} value={p}>{p}</option>))}
                          </select>
                          <i className="fas fa-chevron-down absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-300 text-xs pointer-events-none" />
                        </div>
                        {errors.programme && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><i className="fas fa-exclamation-circle" />{errors.programme}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-iftm-navy uppercase tracking-wider mb-1.5">Message <span className="text-gray-400 font-normal">(Optional)</span></label>
                        <textarea value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Any specific questions..." rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-iftm-primary focus:bg-white focus:ring-2 focus:ring-iftm-primary/10 transition-all text-sm resize-none" />
                      </div>

                      <button type="submit" disabled={isSubmitting} className="relative w-full py-4 rounded-xl font-bold text-white text-sm uppercase tracking-wider overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed bg-gradient-to-r from-iftm-primary via-red-700 to-iftm-primary-dark hover:shadow-lg hover:shadow-iftm-primary/30 transition-all">
                        <span className="relative flex items-center justify-center gap-2">
                          {isSubmitting ? (<><i className="fas fa-spinner fa-spin" /> Submitting...</>) : (<>Submit Enquiry <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" /></>)}
                        </span>
                      </button>

                      <p className="text-[11px] text-gray-400 text-center">By submitting, you agree to receive admission-related communication from IFTM University.</p>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Student Stories</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">
              Hear From Our <span className="text-iftm-gold">Students</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <i key={i} className="fas fa-star text-iftm-gold text-sm" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-iftm-primary to-iftm-primary-dark flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
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
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">
              Got <span className="text-iftm-gold">Questions?</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 md:p-5 text-left">
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-iftm-primary to-iftm-primary-dark relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/5 blur-[60px]" />
        <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-iftm-gold/10 blur-[60px]" />

        <div className="relative max-w-[800px] mx-auto px-4 md:px-6 text-center">
          <span className="text-iftm-gold text-xs font-bold uppercase tracking-[2px] mb-2 block">Limited Seats Available</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Don&apos;t Miss Your Chance
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-8 max-w-[500px] mx-auto">
            Secure your seat at IFTM University for the 2026-27 session. Apply now and take the first step towards a successful career.
          </p>
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
          <a href="tel:18002701490" className="flex-1 py-3 bg-white border border-iftm-primary text-iftm-primary font-bold text-sm rounded-xl text-center hover:bg-iftm-primary/5 transition-colors">
            <i className="fas fa-phone-alt mr-1.5" /> Call
          </a>
          <a href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php" target="_blank" rel="noopener noreferrer" className="flex-[2] py-3 bg-gradient-to-r from-iftm-primary to-iftm-primary-dark text-white font-bold text-sm rounded-xl text-center shadow-lg shadow-iftm-primary/30">
            Apply Now <i className="fas fa-arrow-right ml-1.5" />
          </a>
        </div>
      )}

      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "IFTM University",
        "url": "https://iftmuniversity.ac.in",
        "address": { "@type": "PostalAddress", "streetAddress": "Lodhipur Rajput, Delhi Road", "addressLocality": "Moradabad", "addressRegion": "UP", "postalCode": "244102", "addressCountry": "IN" },
        "telephone": "1800-270-1490",
        "email": "admissions@iftm.ac.in",
        "sameAs": ["https://www.facebook.com/iftmuniv", "https://www.instagram.com/iftmuniversity/", "https://www.linkedin.com/in/iftm-university-04006a245/"],
      }) }} />

      <Footer />
    </main>
  );
}
