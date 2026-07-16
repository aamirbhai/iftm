import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - IFTM University Moradabad",
  description: "Contact IFTM University Moradabad. Admission helpline: 1800-270-1490 (Toll Free). Address: Lodhipur Rajput, Delhi Road, Moradabad, UP - 244102. Email: info@iftm.ac.in",
  alternates: {
    canonical: "https://iftmuniversity.ac.in/contact",
  },
  openGraph: {
    title: "Contact Us - IFTM University Moradabad",
    description: "Contact IFTM University Moradabad. Admission helpline: 1800-270-1490 (Toll Free).",
    url: "https://iftmuniversity.ac.in/contact",
  },
};

const contacts = [
  { icon: "fa-phone-alt", title: "Admission Helpline", value: "1800-270-1490", sub: "Toll Free \u2022 Mon-Sat 9AM-6PM", href: "tel:18002701490", color: "from-iftm-primary to-iftm-primary-dark" },
  { icon: "fa-phone", title: "Office Phone", value: "+91-591-2486021", sub: "Mon-Sat 9AM-5PM", href: "tel:+915912486021", color: "from-blue-500 to-indigo-600" },
  { icon: "fa-whatsapp", title: "WhatsApp", value: "+91 9639004077", sub: "Chat anytime", href: "https://api.whatsapp.com/send/?phone=919639004077", color: "from-green-500 to-emerald-600" },
  { icon: "fa-envelope", title: "Email", value: "info@iftm.ac.in", sub: "Response within 24 hours", href: "mailto:info@iftm.ac.in", color: "from-iftm-gold to-amber-600" },
];

const departments = [
  { name: "Admission Office", phone: "1800-270-1490", email: "admissions@iftm.ac.in", person: "Dr. Rajesh Kumar" },
  { name: "Examination Cell", phone: "+91-591-2486021", email: "exam@iftm.ac.in", person: "Prof. S.K. Sharma" },
  { name: "Placement Cell", phone: "+91-591-2486021", email: "placement@iftm.ac.in", person: "Dr. Anil Gupta" },
  { name: "Hostel Office", phone: "+91-591-2486021", email: "hostel@iftm.ac.in", person: "Mr. Vijay Singh" },
  { name: "Accounts Dept", phone: "+91-591-2486021", email: "accounts@iftm.ac.in", person: "Mr. Rakesh Agarwal" },
  { name: "Library", phone: "+91-591-2486021", email: "library@iftm.ac.in", person: "Dr. Sunita Verma" },
];

export default function ContactPage() {
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
              <li className="text-iftm-gold">Contact Us</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Get in <span className="text-iftm-gold">Touch</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            We&apos;re here to help. Reach out to us for admissions, queries, or campus visits.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full"><path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 28C672 36 768 42 864 40C960 38 1056 28 1152 22C1248 16 1344 14 1392 13L1440 12V60H0Z" fill="white" /></svg>
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="py-10 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-20 relative z-20">
            {contacts.map((c) => (
              <a key={c.title} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group bg-white rounded-2xl p-5 shadow-xl shadow-black/[0.06] border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all">
                <div className={"w-11 h-11 rounded-xl bg-gradient-to-br " + c.color + " flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform"}>
                  <i className={"fas " + c.icon + " text-white text-sm"} />
                </div>
                <p className="font-bold text-iftm-navy text-sm">{c.title}</p>
                <p className="text-iftm-primary font-semibold text-lg">{c.value}</p>
                <p className="text-gray-400 text-xs">{c.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MAP + FORM */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <div>
              <h2 className="text-2xl font-extrabold text-iftm-navy mb-4">Our <span className="text-iftm-gold">Location</span></h2>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5!2d78.7!3d28.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIFTM+University!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="IFTM University Location"
                />
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-iftm-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-iftm-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-iftm-navy text-sm">IFTM University</p>
                    <p className="text-gray-500 text-sm">Lodhipur Rajput, Delhi Road, Moradabad, Uttar Pradesh - 244102, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-extrabold text-iftm-navy mb-4">Send Us a <span className="text-iftm-gold">Message</span></h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENT DIRECTORY */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Directory</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Department <span className="text-iftm-gold">Contacts</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((d) => (
              <div key={d.name} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-all">
                <h3 className="font-bold text-iftm-navy mb-2">{d.name}</h3>
                <p className="text-gray-500 text-xs mb-2">In-charge: {d.person}</p>
                <div className="space-y-1">
                  <a href={"tel:" + d.phone} className="flex items-center gap-2 text-sm text-iftm-primary hover:underline">
                    <i className="fas fa-phone text-[10px]" /> {d.phone}
                  </a>
                  <a href={"mailto:" + d.email} className="flex items-center gap-2 text-sm text-iftm-primary hover:underline">
                    <i className="fas fa-envelope text-[10px]" /> {d.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
