"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const portals = [
  { title: "ERP Login", desc: "Access student ERP for attendance, fees, results, and academic records", icon: "fa-desktop", href: "/erp", color: "from-iftm-primary to-red-700" },
  { title: "LMS Portal", desc: "Learning Management System for online classes, assignments, and study material", icon: "fa-book-open", href: "/lms", color: "from-blue-500 to-indigo-600" },
  { title: "Exam Results", desc: "Check semester exam results, re-evaluation, and marksheets", icon: "fa-file-alt", href: "/results", color: "from-green-500 to-emerald-600" },
  { title: "Online Fee Payment", desc: "Pay tuition, hostel, and exam fees online via net banking, UPI, or cards", icon: "fa-credit-card", href: "/online-fee", color: "from-iftm-gold to-amber-600" },
  { title: "Academic Calendar", desc: "View semester schedule, exam dates, holidays, and important events", icon: "fa-calendar-alt", href: "/academic-calendar", color: "from-purple-500 to-violet-600" },
  { title: "ABC / NAD", desc: "Academic Bank of Credits and National Academic Depository", icon: "fa-id-card", href: "/abc-nad", color: "from-cyan-500 to-blue-600" },
  { title: "Admission Portal", desc: "Apply for admission, track application status, and download offer letter", icon: "fa-user-graduate", href: "https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php", color: "from-pink-500 to-rose-600" },
  { title: "Library Portal", desc: "Search catalogue, check availability, access e-journals and digital resources", icon: "fa-book", href: "/library", color: "from-orange-500 to-red-600" },
];

const quickLinks = [
  { label: "Download Prospectus", icon: "fa-download", href: "#" },
  { label: "Exam Schedule", icon: "fa-clock", href: "/academic-calendar" },
  { label: "Holiday List", icon: "fa-calendar", href: "/academic-calendar" },
  { label: "Anti-Ragging Undertaking", icon: "fa-shield-alt", href: "/naac" },
  { label: "Grievance Portal", icon: "fa-exclamation-circle", href: "/grievance" },
  { label: "Feedback Form", icon: "fa-comment", href: "/feedback" },
  { label: "Transport Routes", icon: "fa-bus", href: "#" },
  { label: "Hostel Application", icon: "fa-bed", href: "#" },
];

export default function StudentPortalPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-iftm-navy to-[#1a1040]" />
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-iftm-primary/20 blur-[100px] animate-pulse" />

        <div className="relative z-10 pt-[120px] md:pt-[130px] pb-16 max-w-[1100px] mx-auto px-4 md:px-6">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-white/50 text-sm">
              <li><a href="/" className="hover:text-iftm-gold transition-colors">Home</a></li>
              <li>/</li>
              <li className="text-iftm-gold">Student Portal</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Student <span className="text-iftm-gold">Portal</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            All student services in one place. Access ERP, LMS, results, fee payment, and more.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full"><path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 28C672 36 768 42 864 40C960 38 1056 28 1152 22C1248 16 1344 14 1392 13L1440 12V60H0Z" fill="white" /></svg>
        </div>
      </section>

      {/* PORTALS GRID */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Quick Access</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Student <span className="text-iftm-gold">Services</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portals.map((p) => (
              <a key={p.title} href={p.href} target={p.href.startsWith("http") ? "_blank" : undefined} rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={"w-12 h-12 rounded-xl bg-gradient-to-br " + p.color + " flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform"}>
                  <i className={"fas " + p.icon + " text-white text-lg"} />
                </div>
                <h3 className="font-bold text-iftm-navy mb-1 group-hover:text-iftm-primary transition-colors">{p.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">More Links</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Quick <span className="text-iftm-gold">Links</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {quickLinks.map((l) => (
              <a key={l.label} href={l.href} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md hover:border-iftm-primary/20 transition-all">
                <i className={"fas " + l.icon + " text-iftm-primary text-sm"} />
                <span className="text-iftm-navy text-sm font-medium">{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HELPLINE */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-iftm-primary to-iftm-primary-dark">
        <div className="max-w-[800px] mx-auto px-4 md:px-6 text-center">
          <i className="fas fa-headset text-iftm-gold text-4xl mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Need Help?</h2>
          <p className="text-white/70 mb-8 max-w-[500px] mx-auto">Facing issues with ERP, LMS, or any student service? Contact our IT helpdesk.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:18002701490" className="px-8 py-3.5 bg-iftm-gold text-iftm-dark font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-yellow-400 transition-all">
              <i className="fas fa-phone-alt mr-2" /> 1800-270-1490
            </a>
            <a href="mailto:info@iftm.ac.in" className="px-8 py-3.5 bg-white/10 text-white border-2 border-white font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-white hover:text-iftm-primary transition-all">
              <i className="fas fa-envelope mr-2" /> Email Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
