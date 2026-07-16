"use client";

import { useState, FormEvent } from "react";

const programmeCategories = [
  { title: "Engineering & Technology", icon: "fa-microchip", color: "from-blue-500 to-indigo-600", programmes: ["B.Tech (CSE)", "B.Tech (ME)", "B.Tech (CE)", "B.Tech (EE)", "M.Tech"] },
  { title: "Pharmacy", icon: "fa-pills", color: "from-green-500 to-emerald-600", programmes: ["B.Pharm", "D.Pharm", "M.Pharm"] },
  { title: "Management & Commerce", icon: "fa-chart-line", color: "from-iftm-gold to-amber-600", programmes: ["MBA", "BBA", "B.Com", "M.Com"] },
  { title: "Computer Applications", icon: "fa-laptop-code", color: "from-purple-500 to-violet-600", programmes: ["BCA", "MCA"] },
  { title: "Law", icon: "fa-gavel", color: "from-iftm-primary to-red-700", programmes: ["LLB", "BA-LLB", "LLM"] },
  { title: "Sciences & Others", icon: "fa-flask", color: "from-cyan-500 to-blue-600", programmes: ["B.Sc (Nursing)", "B.Sc (Agriculture)", "B.Ed", "B.Lib"] },
];

const allProgrammes = programmeCategories.flatMap((c) => c.programmes);

interface FormData { name: string; phone: string; email: string; programme: string; message: string; }
interface FormErrors { name?: string; phone?: string; email?: string; programme?: string; }

export default function AdmissionsEnquiryForm() {
  const [formData, setFormData] = useState<FormData>({ name: "", phone: "", email: "", programme: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  if (isSubmitted) {
    return (
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
    );
  }

  return (
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
  );
}

export { programmeCategories };
