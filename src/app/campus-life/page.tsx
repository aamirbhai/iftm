"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const facilities = [
  { icon: "fa-bed", title: "Hostels", desc: "Separate hostels for boys & girls with Wi-Fi, mess, 24/7 security, and recreational facilities.", color: "from-iftm-primary to-red-700" },
  { icon: "fa-futbol", title: "Sports Complex", desc: "Cricket, football, basketball, volleyball courts, indoor games, and gymnasium.", color: "from-green-500 to-emerald-600" },
  { icon: "fa-book", title: "Library", desc: "50,000+ books, e-journals, digital library, reading rooms, and research section.", color: "from-iftm-gold to-amber-600" },
  { icon: "fa-laptop", title: "IT Infrastructure", desc: "High-speed Wi-Fi, computer labs, smart classrooms, and digital learning tools.", color: "from-blue-500 to-indigo-600" },
  { icon: "fa-utensils", title: "Canteen & Cafeteria", desc: "Hygienic food, multi-cuisine menu, separate dining areas, and juice bars.", color: "from-orange-500 to-red-600" },
  { icon: "fa-heartbeat", title: "Health Centre", desc: "On-campus medical facility, ambulance service, and tie-up with hospitals.", color: "from-pink-500 to-rose-600" },
  { icon: "fa-bus", title: "Transport", desc: "Fleet of buses covering all major routes in Moradabad and nearby areas.", color: "from-cyan-500 to-blue-600" },
  { icon: "fa-dumbbell", title: "Gymnasium", desc: "Modern gym with professional trainers, yoga center, and fitness classes.", color: "from-purple-500 to-violet-600" },
];

const campusImages = [
  "/images/buildings/campus1.webp",
  "/images/buildings/campus2.webp",
  "/images/buildings/campus3.webp",
  "/images/buildings/campus4.webp",
  "/images/buildings/campus5.webp",
  "/images/buildings/7.webp",
];

const events = [
  { name: "Annual Fest - IFTM Utsav", desc: "Cultural extravaganza with music, dance, drama, and celebrity performances.", icon: "fa-music" },
  { name: "TechFest", desc: "Technical competitions, hackathons, robotics, and innovation showcases.", icon: "fa-robot" },
  { name: "Sports Meet", desc: "Inter-university sports competitions with 20+ sporting events.", icon: "fa-trophy" },
  { name: "Convocation", desc: "Annual convocation ceremony with distinguished guests and dignitaries.", icon: "fa-graduation-cap" },
  { name: "Seminars & Workshops", desc: "Regular industry talks, expert sessions, and skill development workshops.", icon: "fa-chalkboard-teacher" },
  { name: "Community Service", desc: "NSS activities, blood donation camps, tree plantation drives.", icon: "fa-hands-helping" },
];

export default function CampusLifePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-iftm-navy to-[#1a1040]" />
        <div className="absolute bottom-[-80px] left-[-80px] w-[350px] h-[350px] rounded-full bg-iftm-primary/20 blur-[80px] animate-pulse" />

        <div className="relative z-10 pt-[120px] md:pt-[130px] pb-16 max-w-[1100px] mx-auto px-4 md:px-6">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-white/50 text-sm">
              <li><a href="/" className="hover:text-iftm-gold transition-colors">Home</a></li>
              <li>/</li>
              <li className="text-iftm-gold">Campus Life</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Life at <span className="text-iftm-gold">IFTM</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            A vibrant 69+ acre campus with world-class facilities, events, and a thriving student community.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full"><path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 28C672 36 768 42 864 40C960 38 1056 28 1152 22C1248 16 1344 14 1392 13L1440 12V60H0Z" fill="white" /></svg>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">World-Class</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Campus <span className="text-iftm-gold">Facilities</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map((f) => (
              <div key={f.title} className="group bg-gray-50 rounded-2xl p-5 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className={"w-12 h-12 rounded-xl bg-gradient-to-br " + f.color + " flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform"}>
                  <i className={"fas " + f.icon + " text-white text-lg"} />
                </div>
                <h3 className="font-bold text-iftm-navy mb-1">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPUS GALLERY */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">69+ Acres</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Campus <span className="text-iftm-gold">Gallery</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {campusImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all aspect-[4/3]">
                <img src={img} alt={"Campus " + (i + 1)} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Beyond Academics</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Events & <span className="text-iftm-gold">Activities</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((e) => (
              <div key={e.name} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-iftm-primary/10 flex items-center justify-center flex-shrink-0">
                  <i className={"fas " + e.icon + " text-iftm-primary"} />
                </div>
                <div>
                  <h3 className="font-bold text-iftm-navy text-sm mb-1">{e.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[#0a0e2a] via-iftm-navy to-[#1a1040]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "69+", label: "Acres Campus" },
              { value: "25+", label: "Years Legacy" },
              { value: "50+", label: "Student Clubs" },
              { value: "100+", label: "Events Yearly" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl md:text-5xl font-extrabold text-iftm-gold">{s.value}</p>
                <p className="text-white/50 text-xs uppercase tracking-wider mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-4">Experience <span className="text-iftm-gold">Campus Life</span></h2>
          <p className="text-gray-500 mb-8 max-w-[500px] mx-auto">Visit our campus and experience the vibrant student life at IFTM University.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/admissions" className="px-8 py-3.5 bg-iftm-primary text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-iftm-primary-dark transition-all">
              Apply for Admission
            </a>
            <a href="/360-view" className="px-8 py-3.5 bg-gray-100 text-iftm-navy font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-gray-200 transition-all">
              <i className="fas fa-vr-cardboard mr-2" /> 360° Campus Tour
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
