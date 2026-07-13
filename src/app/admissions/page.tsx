"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const programmes = [
  "B.Tech (Computer Science)",
  "B.Tech (Mechanical)",
  "B.Tech (Civil)",
  "B.Tech (Electrical)",
  "B.Pharm",
  "D.Pharm",
  "MBA",
  "BBA",
  "BCA",
  "MCA",
  "LLB",
  "BA-LLB",
  "B.Sc (Nursing)",
  "B.Sc (Agriculture)",
  "B.Ed",
  "M.Tech",
  "M.Pharm",
  "Other",
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

export default function AdmissionsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    programme: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.programme) newErrors.programme = "Please select a programme";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* ═══════════════════════════════════════════
          HERO - Full gradient with floating blobs
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[320px] md:min-h-[400px] overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-iftm-navy to-[#1a1040]" />

        {/* Animated blobs */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-iftm-primary/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full bg-iftm-gold/15 blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[50%] left-[50%] w-[200px] h-[200px] rounded-full bg-blue-500/10 blur-[60px] animate-pulse" style={{ animationDelay: "2s" }} />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Content */}
        <div className="relative z-10 pt-[120px] md:pt-[140px] pb-12 md:pb-16 max-w-[1100px] mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-white/50 text-sm">
              <li><a href="/" className="hover:text-iftm-gold transition-colors">Home</a></li>
              <li>/</li>
              <li className="text-iftm-gold">Admissions</li>
            </ol>
          </nav>

          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="inline-block mb-4">
                <div className="bg-iftm-primary/90 backdrop-blur-sm px-5 py-1.5 inline-block" style={{ transform: "skewX(-12deg)" }}>
                  <span className="text-white font-bold text-xs uppercase tracking-widest" style={{ transform: "skewX(12deg)", display: "inline-block" }}>
                    Session 2026-27
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3">
                Admissions <span className="text-iftm-gold">Open</span>
              </h1>
              <p className="text-white/60 text-lg max-w-xl">
                Apply now for UG, PG & Diploma programmes at IFTM University, Moradabad
              </p>
            </div>

            {/* Floating badge */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center -rotate-12 hover:rotate-0 transition-transform duration-500">
                    <p className="text-iftm-gold text-2xl font-bold">NAAC</p>
                    <p className="text-white text-xs font-medium">&apos;A&apos; Grade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 28C672 36 768 42 864 40C960 38 1056 28 1152 22C1248 16 1344 14 1392 13L1440 12V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FORM SECTION - Glassmorphism
          ═══════════════════════════════════════════ */}
      <section className="relative -mt-1 pb-16 md:pb-24">
        {/* Background blobs */}
        <div className="absolute top-[200px] left-[-150px] w-[300px] h-[300px] rounded-full bg-iftm-primary/5 blur-[80px]" />
        <div className="absolute bottom-[100px] right-[-100px] w-[250px] h-[250px] rounded-full bg-iftm-gold/5 blur-[60px]" />

        <div className="relative max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">

            {/* ─── Left Info Panel ─── */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="group relative bg-white/80 backdrop-blur-xl border border-white/90 rounded-2xl p-5 shadow-lg shadow-black/[0.03] hover:shadow-xl hover:shadow-iftm-primary/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-iftm-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-iftm-primary to-iftm-primary-dark flex items-center justify-center flex-shrink-0 shadow-lg shadow-iftm-primary/30">
                      <i className="fas fa-phone-alt text-white text-sm" />
                    </div>
                    <div>
                      <p className="font-bold text-iftm-navy text-sm mb-0.5">Admission Helpline</p>
                      <p className="text-iftm-primary font-semibold text-lg">1800-270-1490</p>
                      <p className="text-iftm-text-light text-xs">Toll Free • Mon-Sat 9AM-6PM</p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white/80 backdrop-blur-xl border border-white/90 rounded-2xl p-5 shadow-lg shadow-black/[0.03] hover:shadow-xl hover:shadow-iftm-primary/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-iftm-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-iftm-gold to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-iftm-gold/30">
                      <i className="fas fa-envelope text-white text-sm" />
                    </div>
                    <div>
                      <p className="font-bold text-iftm-navy text-sm mb-0.5">Email Us</p>
                      <p className="text-iftm-navy font-medium text-sm">admissions@iftm.ac.in</p>
                      <p className="text-iftm-text-light text-xs">Response within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white/80 backdrop-blur-xl border border-white/90 rounded-2xl p-5 shadow-lg shadow-black/[0.03] hover:shadow-xl hover:shadow-iftm-primary/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30">
                      <i className="fas fa-map-marker-alt text-white text-sm" />
                    </div>
                    <div>
                      <p className="font-bold text-iftm-navy text-sm mb-0.5">Visit Campus</p>
                      <p className="text-iftm-navy text-sm">Lodhipur Rajput, Delhi Road</p>
                      <p className="text-iftm-text-light text-xs">Moradabad - 244102, UP</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "130+", label: "Programmes", icon: "fa-graduation-cap", color: "from-iftm-primary to-red-700" },
                  { value: "90%+", label: "Placement Rate", icon: "fa-chart-line", color: "from-iftm-gold to-amber-600" },
                  { value: "10K+", label: "Students", icon: "fa-users", color: "from-blue-500 to-indigo-600" },
                  { value: "69+", label: "Acres Campus", icon: "fa-tree", color: "from-green-500 to-emerald-600" },
                ].map((stat) => (
                  <div key={stat.label} className="relative bg-white/80 backdrop-blur-xl border border-white/90 rounded-2xl p-4 text-center shadow-lg shadow-black/[0.03] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.05] transition-opacity`} />
                    <div className="relative">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-2 shadow-lg`}>
                        <i className={`fas ${stat.icon} text-white text-sm`} />
                      </div>
                      <p className="text-2xl font-extrabold text-iftm-navy">{stat.value}</p>
                      <p className="text-[11px] text-iftm-text-light uppercase tracking-wider font-medium">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ─── Right Form Panel ─── */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                /* Success State */
                <div className="relative bg-white/80 backdrop-blur-xl border border-white/90 rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-green-500/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
                  <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] rounded-full bg-green-500/10 blur-[40px]" />
                  <div className="absolute bottom-[-30px] left-[-30px] w-[100px] h-[100px] rounded-full bg-emerald-500/10 blur-[30px]" />

                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl shadow-green-500/30">
                      <i className="fas fa-check text-white text-3xl" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-iftm-navy mb-3">Thank You!</h3>
                    <p className="text-iftm-text-light mb-8 max-w-md mx-auto">
                      Your enquiry has been received successfully. Our admission counsellor will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", phone: "", email: "", programme: "", message: "" });
                      }}
                      className="px-8 py-3 bg-gradient-to-r from-iftm-primary to-iftm-primary-dark text-white rounded-xl hover:shadow-lg hover:shadow-iftm-primary/30 transition-all hover:-translate-y-0.5 font-semibold text-sm"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Form */
                <div className="relative bg-white/80 backdrop-blur-xl border border-white/90 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl shadow-black/[0.06] overflow-hidden">
                  {/* Form background accents */}
                  <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] rounded-full bg-iftm-primary/[0.06] blur-[50px]" />
                  <div className="absolute bottom-[-40px] left-[-40px] w-[120px] h-[120px] rounded-full bg-iftm-gold/[0.06] blur-[40px]" />

                  <div className="relative">
                    {/* Form Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-iftm-primary to-iftm-primary-dark flex items-center justify-center shadow-lg shadow-iftm-primary/30">
                          <i className="fas fa-pen-fancy text-white text-sm" />
                        </div>
                        <div>
                          <h3 className="text-xl font-extrabold text-iftm-navy">Enquiry Form</h3>
                          <p className="text-iftm-text-light text-xs">Fields marked * are required</p>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name & Phone Row */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-iftm-navy uppercase tracking-wider mb-2">
                            Full Name <span className="text-iftm-primary">*</span>
                          </label>
                          <div className="relative group">
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-iftm-primary/20 to-iftm-gold/20 opacity-0 group-focus-within:opacity-100 transition-opacity blur-sm" />
                            <div className="relative flex items-center">
                              <i className="fas fa-user absolute left-4 text-iftm-text-light/50 text-sm group-focus-within:text-iftm-primary transition-colors" />
                              <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                placeholder="Enter your full name"
                                className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/60 backdrop-blur-sm border ${
                                  errors.name ? "border-red-400 bg-red-50/50" : "border-iftm-border/60"
                                } focus:outline-none focus:border-iftm-primary focus:bg-white focus:ring-2 focus:ring-iftm-primary/10 transition-all text-sm`}
                              />
                            </div>
                          </div>
                          {errors.name && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><i className="fas fa-exclamation-circle" />{errors.name}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-iftm-navy uppercase tracking-wider mb-2">
                            Phone Number <span className="text-iftm-primary">*</span>
                          </label>
                          <div className="relative group">
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-iftm-primary/20 to-iftm-gold/20 opacity-0 group-focus-within:opacity-100 transition-opacity blur-sm" />
                            <div className="relative flex items-center">
                              <span className="absolute left-4 text-iftm-text-light/50 text-sm font-medium group-focus-within:text-iftm-primary transition-colors">+91</span>
                              <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                                placeholder="10-digit number"
                                className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/60 backdrop-blur-sm border ${
                                  errors.phone ? "border-red-400 bg-red-50/50" : "border-iftm-border/60"
                                } focus:outline-none focus:border-iftm-primary focus:bg-white focus:ring-2 focus:ring-iftm-primary/10 transition-all text-sm`}
                              />
                            </div>
                          </div>
                          {errors.phone && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><i className="fas fa-exclamation-circle" />{errors.phone}</p>}
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-iftm-navy uppercase tracking-wider mb-2">
                          Email Address <span className="text-iftm-primary">*</span>
                        </label>
                        <div className="relative group">
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-iftm-primary/20 to-iftm-gold/20 opacity-0 group-focus-within:opacity-100 transition-opacity blur-sm" />
                          <div className="relative flex items-center">
                            <i className="fas fa-envelope absolute left-4 text-iftm-text-light/50 text-sm group-focus-within:text-iftm-primary transition-colors" />
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleChange("email", e.target.value)}
                              placeholder="your.email@example.com"
                              className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/60 backdrop-blur-sm border ${
                                errors.email ? "border-red-400 bg-red-50/50" : "border-iftm-border/60"
                              } focus:outline-none focus:border-iftm-primary focus:bg-white focus:ring-2 focus:ring-iftm-primary/10 transition-all text-sm`}
                            />
                          </div>
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><i className="fas fa-exclamation-circle" />{errors.email}</p>}
                      </div>

                      {/* Programme */}
                      <div>
                        <label className="block text-xs font-bold text-iftm-navy uppercase tracking-wider mb-2">
                          Programme of Interest <span className="text-iftm-primary">*</span>
                        </label>
                        <div className="relative group">
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-iftm-primary/20 to-iftm-gold/20 opacity-0 group-focus-within:opacity-100 transition-opacity blur-sm" />
                          <div className="relative flex items-center">
                            <i className="fas fa-graduation-cap absolute left-4 text-iftm-text-light/50 text-sm group-focus-within:text-iftm-primary transition-colors" />
                            <select
                              value={formData.programme}
                              onChange={(e) => handleChange("programme", e.target.value)}
                              className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/60 backdrop-blur-sm border appearance-none ${
                                errors.programme ? "border-red-400 bg-red-50/50" : "border-iftm-border/60"
                              } focus:outline-none focus:border-iftm-primary focus:bg-white focus:ring-2 focus:ring-iftm-primary/10 transition-all text-sm`}
                            >
                              <option value="">Select a programme</option>
                              {programmes.map((p) => (
                                <option key={p} value={p}>{p}</option>
                              ))}
                            </select>
                            <i className="fas fa-chevron-down absolute right-4 text-iftm-text-light/40 text-xs pointer-events-none" />
                          </div>
                        </div>
                        {errors.programme && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><i className="fas fa-exclamation-circle" />{errors.programme}</p>}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold text-iftm-navy uppercase tracking-wider mb-2">
                          Message <span className="text-iftm-text-light font-normal">(Optional)</span>
                        </label>
                        <div className="relative group">
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-iftm-primary/20 to-iftm-gold/20 opacity-0 group-focus-within:opacity-100 transition-opacity blur-sm" />
                          <textarea
                            value={formData.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            placeholder="Any specific questions or requirements..."
                            rows={3}
                            className="relative w-full px-4 py-3.5 rounded-xl bg-white/60 backdrop-blur-sm border border-iftm-border/60 focus:outline-none focus:border-iftm-primary focus:bg-white focus:ring-2 focus:ring-iftm-primary/10 transition-all text-sm resize-none"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full py-4 rounded-xl font-bold text-white text-sm uppercase tracking-wider overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-iftm-primary via-red-700 to-iftm-primary-dark" />
                        <div className="absolute inset-0 bg-gradient-to-r from-iftm-gold via-amber-500 to-iftm-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity" style={{
                          backgroundImage: "linear-gradient(90deg, transparent, white, transparent)",
                          animation: "none",
                        }} />
                        <span className="relative flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <i className="fas fa-spinner fa-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Enquiry
                              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </span>
                      </button>

                      <p className="text-[11px] text-iftm-text-light/70 text-center">
                        By submitting, you agree to receive admission-related communication from IFTM University.
                      </p>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
