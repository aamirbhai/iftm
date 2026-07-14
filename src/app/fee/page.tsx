"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const feeData = [
  {
    school: "Engineering & Technology",
    icon: "fa-microchip",
    programmes: [
      { name: "B.Tech (CSE/ME/CE/EE)", duration: "4 Years", fee: "₹85,000", perYear: "Per Year" },
      { name: "M.Tech", duration: "2 Years", fee: "₹90,000", perYear: "Per Year" },
    ],
  },
  {
    school: "Pharmacy",
    icon: "fa-pills",
    programmes: [
      { name: "B.Pharm", duration: "4 Years", fee: "₹80,000", perYear: "Per Year" },
      { name: "D.Pharm", duration: "2 Years", fee: "₹70,000", perYear: "Per Year" },
      { name: "M.Pharm", duration: "2 Years", fee: "₹90,000", perYear: "Per Year" },
    ],
  },
  {
    school: "Management & Commerce",
    icon: "fa-chart-line",
    programmes: [
      { name: "MBA", duration: "2 Years", fee: "₹1,20,000", perYear: "Per Year" },
      { name: "BBA", duration: "3 Years", fee: "₹60,000", perYear: "Per Year" },
      { name: "B.Com (Hons)", duration: "3 Years", fee: "₹40,000", perYear: "Per Year" },
    ],
  },
  {
    school: "Computer Applications",
    icon: "fa-laptop-code",
    programmes: [
      { name: "BCA", duration: "3 Years", fee: "₹65,000", perYear: "Per Year" },
      { name: "MCA", duration: "2 Years", fee: "₹85,000", perYear: "Per Year" },
    ],
  },
  {
    school: "Law",
    icon: "fa-gavel",
    programmes: [
      { name: "LLB", duration: "3 Years", fee: "₹50,000", perYear: "Per Year" },
      { name: "BA-LLB", duration: "5 Years", fee: "₹60,000", perYear: "Per Year" },
      { name: "LLM", duration: "1 Year", fee: "₹80,000", perYear: "Per Year" },
    ],
  },
  {
    school: "Sciences & Others",
    icon: "fa-flask",
    programmes: [
      { name: "B.Sc (Nursing)", duration: "4 Years", fee: "₹90,000", perYear: "Per Year" },
      { name: "B.Sc (Agriculture)", duration: "4 Years", fee: "₹70,000", perYear: "Per Year" },
      { name: "B.Ed", duration: "2 Years", fee: "₹55,000", perYear: "Per Year" },
    ],
  },
];

const scholarships = [
  { name: "Merit Scholarship", desc: "Up to 100% tuition fee waiver for students with 90%+ in qualifying exam", icon: "fa-star", color: "from-iftm-gold to-amber-600" },
  { name: "Sports Scholarship", desc: "Up to 50% fee waiver for national/state level sportspersons", icon: "fa-futbol", color: "from-green-500 to-emerald-600" },
  { name: "Need-Based Aid", desc: "Financial assistance for economically weaker sections", icon: "fa-hand-holding-heart", color: "from-iftm-primary to-red-700" },
  { name: "Defiance Scholarship", desc: "Special fee concession for wards of defence personnel", icon: "fa-shield-alt", color: "from-blue-500 to-indigo-600" },
];

export default function FeePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-iftm-navy to-[#1a1040]" />
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-iftm-gold/15 blur-[100px] animate-pulse" />

        <div className="relative z-10 pt-[120px] md:pt-[130px] pb-16 max-w-[1100px] mx-auto px-4 md:px-6">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-white/50 text-sm">
              <li><a href="/" className="hover:text-iftm-gold transition-colors">Home</a></li>
              <li>/</li>
              <li className="text-iftm-gold">Fee Structure</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Fee <span className="text-iftm-gold">Structure</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mb-6">
            Transparent and affordable fee structure. Scholarships available for meritorious students.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="tel:18002701490" className="px-5 py-2.5 bg-iftm-gold text-iftm-dark font-bold text-sm rounded-lg hover:bg-yellow-400 transition-all">
              <i className="fas fa-phone-alt mr-2" /> 1800-270-1490 (Toll Free)
            </a>
            <a href="mailto:admissions@iftm.ac.in" className="px-5 py-2.5 bg-white/10 text-white border border-white/30 font-semibold text-sm rounded-lg hover:bg-white/20 transition-all">
              <i className="fas fa-envelope mr-2" /> admissions@iftm.ac.in
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full"><path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 28C672 36 768 42 864 40C960 38 1056 28 1152 22C1248 16 1344 14 1392 13L1440 12V60H0Z" fill="white" /></svg>
        </div>
      </section>

      {/* FEE TABLES */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Session 2026-27</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Programme <span className="text-iftm-gold">Fees</span></h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">* Fees shown are approximate. Contact admission office for exact details.</p>
          </div>

          <div className="space-y-6">
            {feeData.map((school) => (
              <div key={school.school} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                <div className="bg-iftm-navy/5 px-6 py-4 flex items-center gap-3 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-iftm-primary to-iftm-primary-dark flex items-center justify-center shadow-lg">
                    <i className={"fas " + school.icon + " text-white text-sm"} />
                  </div>
                  <h3 className="font-bold text-iftm-navy text-lg">{school.school}</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Programme</th>
                        <th className="text-left px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Duration</th>
                        <th className="text-right px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Annual Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {school.programmes.map((p) => (
                        <tr key={p.name} className="border-b border-gray-50 hover:bg-white/50 transition-colors">
                          <td className="px-6 py-3.5 text-sm font-medium text-iftm-navy">{p.name}</td>
                          <td className="px-6 py-3.5 text-sm text-gray-500">{p.duration}</td>
                          <td className="px-6 py-3.5 text-sm font-bold text-iftm-primary text-right">{p.fee} <span className="text-gray-400 font-normal text-xs">/ {p.perYear}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-iftm-gold/10 border border-iftm-gold/20 rounded-2xl p-5 flex items-start gap-3">
            <i className="fas fa-info-circle text-iftm-gold text-lg mt-0.5" />
            <div>
              <p className="font-bold text-iftm-navy text-sm mb-1">Note:</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Fees are subject to revision by the University</li>
                <li>• One-time admission fee and examination fee are additional</li>
                <li>• Hostel and transport charges are separate</li>
                <li>• Scholarships are available for eligible students</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOLARSHIPS */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Financial Support</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Scholarships & <span className="text-iftm-gold">Aid</span></h2>
            <p className="text-gray-500 max-w-lg mx-auto">We believe financial constraints should not stop your education.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {scholarships.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                <div className={"w-12 h-12 rounded-xl bg-gradient-to-br " + s.color + " flex items-center justify-center mb-4 shadow-lg"}>
                  <i className={"fas " + s.icon + " text-white text-lg"} />
                </div>
                <h3 className="font-bold text-iftm-navy mb-2">{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="tel:18002701490" className="inline-flex items-center gap-2 px-6 py-3 bg-iftm-primary text-white font-bold text-sm rounded-lg hover:bg-iftm-primary-dark transition-all">
              <i className="fas fa-phone-alt" /> Contact for Scholarship Details
            </a>
          </div>
        </div>
      </section>

      {/* PAYMENT OPTIONS */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Easy Payment</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Payment <span className="text-iftm-gold">Options</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "fa-globe", title: "Online Payment", desc: "Pay via net banking, UPI, cards through ERP portal" },
              { icon: "fa-university", title: "Bank Transfer", desc: "Direct NEFT/RTGS to university bank account" },
              { icon: "fa-money-check-alt", title: "DD/Cheque", desc: "Demand Draft or cheque in favour of IFTM University" },
              { icon: "fa-hand-holding-usd", title: "Installments", desc: "Fee can be paid in semester-wise installments" },
            ].map((m) => (
              <div key={m.title} className="bg-gray-50 rounded-2xl p-5 text-center hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-iftm-primary/10 flex items-center justify-center mx-auto mb-3">
                  <i className={"fas " + m.icon + " text-iftm-primary text-lg"} />
                </div>
                <h3 className="font-bold text-iftm-navy text-sm mb-1">{m.title}</h3>
                <p className="text-gray-500 text-xs">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-iftm-primary to-iftm-primary-dark relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/5 blur-[60px]" />
        <div className="relative max-w-[800px] mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Have Questions About Fees?</h2>
          <p className="text-white/70 mb-8 max-w-[500px] mx-auto">Our admission counsellors are here to help. Call us for detailed fee information and scholarship eligibility.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:18002701490" className="px-8 py-3.5 bg-iftm-gold text-iftm-dark font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-yellow-400 transition-all">
              <i className="fas fa-phone-alt mr-2" /> Call Now
            </a>
            <a href="/admissions" className="px-8 py-3.5 bg-white/10 text-white border-2 border-white font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-white hover:text-iftm-primary transition-all">
              Enquire Online
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
