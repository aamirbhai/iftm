import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Placements - IFTM University Moradabad",
  description: "90%+ placement rate with 500+ recruiting partners at IFTM University. Top companies like Google, Microsoft, Amazon, TCS, Infosys visit our campus. Average package 4.5 LPA.",
  alternates: {
    canonical: "https://iftmuniversity.ac.in/placements",
  },
  openGraph: {
    title: "Placements - IFTM University Moradabad",
    description: "90%+ placement rate with 500+ recruiting partners. Top companies visit our campus every year.",
    url: "https://iftmuniversity.ac.in/placements",
  },
};

const stats = [
  { value: "90%+", label: "Placement Rate", icon: "fa-chart-line" },
  { value: "500+", label: "Recruiters", icon: "fa-handshake" },
  { value: "12", label: "Highest LPA", icon: "fa-indian-rupee-sign" },
  { value: "4.5", label: "Average LPA", icon: "fa-chart-bar" },
];

const topRecruiters = [
  "TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra", "Cognizant",
  "IBM", "Capgemini", "Accenture", "Amazon", "Google", "Microsoft",
  "BYJU'S", "WNS", "Hexaware", "Mphasis", "L&T Infotech", "Mindtree",
  "Deloitte", "KPMG", "EY", "PwC", "ICICI Bank", "HDFC Bank",
];

const placementStories = [
  { name: "Amit Verma", role: "Software Engineer @ Google", package: "₹12 LPA", programme: "B.Tech CSE", year: "2024", img: "/images/alumni/45.webp" },
  { name: "Neha Gupta", role: "Data Analyst @ Amazon", package: "₹10 LPA", programme: "B.Tech CSE", year: "2024", img: "/images/alumni/46.webp" },
  { name: "Rohit Sharma", role: "Associate @ Deloitte", package: "₹8 LPA", programme: "MBA", year: "2023", img: "/images/alumni/47.webp" },
  { name: "Priya Singh", role: "Developer @ TCS", package: "₹7 LPA", programme: "B.Tech IT", year: "2024", img: "/images/alumni/48.webp" },
  { name: "Karan Patel", role: "Analyst @ Wipro", package: "₹6.5 LPA", programme: "BCA", year: "2023", img: "/images/alumni/49.webp" },
  { name: "Sneha Yadav", role: "Executive @ Infosys", package: "₹6 LPA", programme: "MBA", year: "2024", img: "/images/alumni/50.webp" },
];

const departments = [
  { name: "Engineering & Technology", rate: "92%", highest: "12 LPA", avg: "5.5 LPA", recruiters: 200 },
  { name: "Management (MBA/BBA)", rate: "88%", highest: "10 LPA", avg: "4.5 LPA", recruiters: 150 },
  { name: "Computer Applications", rate: "90%", highest: "9 LPA", avg: "4 LPA", recruiters: 120 },
  { name: "Pharmacy", rate: "85%", highest: "6 LPA", avg: "3.5 LPA", recruiters: 80 },
  { name: "Law", rate: "82%", highest: "8 LPA", avg: "4 LPA", recruiters: 60 },
  { name: "Sciences", rate: "80%", highest: "5 LPA", avg: "3 LPA", recruiters: 50 },
];

const process = [
  { step: "1", title: "Registration", desc: "Students register with the Training & Placement Cell", icon: "fa-user-plus" },
  { step: "2", title: "Training", desc: "Aptitude, soft skills, and technical training sessions", icon: "fa-chalkboard-teacher" },
  { step: "3", title: "Pre-Placement Talk", desc: "Companies present their profile and opportunities", icon: "fa-building" },
  { step: "4", title: "Aptitude Test", desc: "Online/offline aptitude and technical tests", icon: "fa-file-alt" },
  { step: "5", title: "Interview", desc: "Technical + HR interview rounds", icon: "fa-comments" },
  { step: "6", title: "Offer Letter", desc: "Selected students receive offer letters", icon: "fa-file-contract" },
];

export default function PlacementsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-iftm-navy to-[#1a1040]" />
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-iftm-gold/15 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full bg-iftm-primary/15 blur-[80px] animate-pulse" />

        <div className="relative z-10 pt-[120px] md:pt-[130px] pb-16 md:pb-20 max-w-[1100px] mx-auto px-4 md:px-6">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-white/50 text-sm">
              <li><a href="/" className="hover:text-iftm-gold transition-colors">Home</a></li>
              <li>/</li>
              <li className="text-iftm-gold">Placements</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 bg-iftm-gold/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-iftm-gold animate-pulse" />
            <span className="text-iftm-gold font-bold text-xs uppercase tracking-widest">Campus Placements</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Your Career <span className="text-iftm-gold">Begins Here</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mb-8">
            90%+ placement rate with 500+ recruiting partners. Top companies visit our campus every year.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
                <div className="w-12 h-12 rounded-xl bg-iftm-gold/20 flex items-center justify-center mx-auto mb-3">
                  <i className={"fas " + s.icon + " text-iftm-gold text-lg"} />
                </div>
                <p className="text-3xl font-extrabold text-white">{s.value}</p>
                <p className="text-white/40 text-xs uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full"><path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 28C672 36 768 42 864 40C960 38 1056 28 1152 22C1248 16 1344 14 1392 13L1440 12V60H0Z" fill="white" /></svg>
        </div>
      </section>

      {/* TOP RECRUITERS */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Our Recruiters</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Top <span className="text-iftm-gold">Companies</span> Trust Us</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {topRecruiters.map((r) => (
              <div key={r} className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-center justify-center hover:shadow-md hover:border-iftm-primary/20 transition-all">
                <span className="text-iftm-navy font-bold text-sm text-center">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTMENT WISE */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Department Wise</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Placement <span className="text-iftm-gold">Statistics</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((d) => (
              <div key={d.name} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                <h3 className="font-bold text-iftm-navy mb-4">{d.name}</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-2xl font-extrabold text-iftm-primary">{d.rate}</p>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider">Placement Rate</p>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-iftm-gold">₹{d.highest}</p>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider">Highest Package</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-iftm-navy">₹{d.avg}</p>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider">Average Package</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-iftm-navy">{d.recruiters}+</p>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider">Recruiters</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLACEMENT PROCESS */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Placement <span className="text-iftm-gold">Process</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {process.map((p) => (
              <div key={p.step} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-iftm-primary to-iftm-primary-dark flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-sm">{p.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-iftm-navy mb-1">{p.title}</h3>
                  <p className="text-gray-500 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Our <span className="text-iftm-gold">Achievers</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {placementStories.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-iftm-primary to-iftm-primary-dark flex items-center justify-center text-white font-bold">{s.name[0]}</div>
                  <div>
                    <p className="font-bold text-iftm-navy">{s.name}</p>
                    <p className="text-iftm-primary text-xs font-medium">{s.programme} &apos;{s.year.slice(2)}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{s.role}</p>
                <div className="flex items-center justify-between">
                  <span className="text-iftm-gold font-extrabold text-lg">{s.package}</span>
                  <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">{s.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-iftm-primary to-iftm-primary-dark relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/5 blur-[60px]" />
        <div className="relative max-w-[800px] mx-auto px-4 md:px-6 text-center">
          <span className="text-iftm-gold text-xs font-bold uppercase tracking-[2px] mb-2 block">Ready to Get Placed?</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Start Your Journey at IFTM</h2>
          <p className="text-white/70 mb-8 max-w-[500px] mx-auto">Join 10,000+ students who are building their careers with IFTM University&apos;s placement support.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/admissions" className="px-8 py-3.5 bg-iftm-gold text-iftm-dark font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-yellow-400 transition-all hover:-translate-y-0.5 shadow-lg shadow-iftm-gold/30">
              Apply Now <i className="fas fa-arrow-right ml-2" />
            </a>
            <a href="tel:18002701490" className="px-8 py-3.5 bg-white/10 text-white border-2 border-white font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-white hover:text-iftm-primary transition-all">
              <i className="fas fa-phone-alt mr-2" /> Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
