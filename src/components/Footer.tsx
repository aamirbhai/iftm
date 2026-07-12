import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Quick Links",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    links: [
      { label: "About University", href: "/about" },
      { label: "Admissions 2026-27", href: "/admissions" },
      { label: "Programmes", href: "/programmes" },
      { label: "Placements", href: "/placements" },
      { label: "Research", href: "/research" },
      { label: "Campus Life", href: "/campus-life" },
    ],
  },
  {
    title: "Academics",
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
    links: [
      { label: "Schools & Departments", href: "/schools" },
      { label: "Academic Calendar", href: "/academic-calendar" },
      { label: "Examination", href: "/examination" },
      { label: "Library", href: "/library" },
      { label: "LMS Portal", href: "/lms" },
      { label: "NIRF", href: "/nirf" },
    ],
  },
  {
    title: "Student Life",
    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75",
    links: [
      { label: "Hostel & Accommodation", href: "/hostel" },
      { label: "Sports & Fitness", href: "/sports" },
      { label: "Student Clubs", href: "/clubs" },
      { label: "Scholarship", href: "/scholarship" },
      { label: "Anti Ragging", href: "/anti-ragging" },
      { label: "Grievance", href: "/grievance" },
    ],
  },
  {
    title: "Resources",
    icon: "M4 19.5A2.5 2.5 0 016.5 17H20 M4 19.5A2.5 2.5 0 014 17V5a2 2 0 012-2h14v14H6.5A2.5 2.5 0 004 19.5z",
    links: [
      { label: "ERP Login", href: "https://erp.iftm.ac.in", external: true },
      { label: "Online Fee Payment", href: "/online-fee" },
      { label: "Download Prospectus", href: "/prospectus" },
      { label: "MOUs & Collaboration", href: "/mou" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/iftmuniv", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", color: "#1877F2" },
  { label: "Twitter", href: "https://twitter.com/IFTMUni", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", color: "#000000" },
  { label: "Instagram", href: "https://www.instagram.com/iftmuniversity/", icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z", color: "#E4405F" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/iftm-university-04006a245/", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", color: "#0A66C2" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCYAp-IfRk0ckvrvxFS9hKgQ", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", color: "#FF0000" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080c24] text-white overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-iftm-primary via-iftm-gold to-iftm-primary" />

      {/* CTA Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-iftm-primary/20 via-transparent to-iftm-gold/10" />
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 md:p-10">
            <div className="text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-iftm-gold/20 text-iftm-gold text-[11px] font-bold uppercase tracking-wider rounded-full mb-3">
                Admissions 2026-27
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Shape Your Future?
              </h3>
              <p className="text-white text-sm max-w-md">
                Join IFTM University and unlock your potential with world-class education, cutting-edge research, and industry-ready skills.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-iftm-primary text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-iftm-primary-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-iftm-primary/30 text-center"
              >
                Apply Now
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-semibold text-sm uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <Image
                src="/images/newlogo.png"
                alt="IFTM University"
                width={240}
                height={72}
                style={{ width: "auto", height: "72px" }}
              />
              <div className="flex items-center gap-1">
                <div className="flex flex-col items-center leading-tight">
                  <span className="text-white font-bold text-sm">NAAC</span>
                  <span className="text-white font-medium text-[10px]">GRADE</span>
                </div>
                <span className="text-iftm-gold font-black text-4xl leading-none">A</span>
              </div>
            </Link>
            <p className="text-white text-sm leading-relaxed mb-6 max-w-[300px]">
              IFTM University, Moradabad — NAAC &apos;A&apos; Grade accredited, committed to academic excellence and holistic student development since 2001.
            </p>

            {/* Contact Cards */}
            <div className="space-y-3">
              <a href="https://maps.google.com/?q=IFTM+University+Moradabad" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-3 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-iftm-gold/20 transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-iftm-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-iftm-gold/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-gold">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="text-white text-[13px] leading-relaxed group-hover:text-iftm-gold transition-colors">
                  Lodhipur Rajput, Delhi Road,<br />Moradabad, UP - 244102
                </p>
              </a>
              <a href="tel:+919639004077" className="flex items-center gap-3 p-3 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-iftm-gold/20 transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-iftm-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-iftm-gold/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-gold">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div className="text-white text-[13px] group-hover:text-iftm-gold transition-colors">
                  <span className="block">+91-9639004077</span>
                  <span className="text-white/70 text-[11px]">Toll Free: 1800-121-066666</span>
                </div>
              </a>
              <a href="mailto:info@iftm.ac.in" className="flex items-center gap-3 p-3 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-iftm-gold/20 transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-iftm-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-iftm-gold/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-gold">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="text-white text-[13px] group-hover:text-iftm-gold transition-colors">
                  info@iftm.ac.in
                </span>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, index) => (
            <div key={index} className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-md bg-iftm-gold/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-gold">
                    <path d={column.icon} />
                  </svg>
                </div>
                <h4 className="text-[13px] font-bold uppercase tracking-wider text-white">
                  {column.title}
                </h4>
              </div>
              <ul className="space-y-2.5">
                {column.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-[13px] hover:text-iftm-gold transition-all flex items-center gap-1.5 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-iftm-gold transition-colors" />
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white text-[13px] hover:text-iftm-gold transition-all flex items-center gap-1.5 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-iftm-gold transition-colors" />
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Map */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-md bg-iftm-gold/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-gold">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" />
                </svg>
              </div>
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-white">
                Locate Us
              </h4>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/[0.06]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.680396586971!2d78.64035531468515!3d28.81859668234481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b026d013bc5c1%3A0xdbc7709cdc14726e!2sIFTM+UNIVERSITY+MORADABAD!5e0!3m2!1sen!2sin!4v1514543834790"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IFTM University Location"
              />
            </div>
          </div>
        </div>

        {/* Social & Newsletter Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <span className="text-white text-[11px] uppercase tracking-widest font-medium">Follow Us</span>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:border-transparent transition-all group"
                    style={{ '--hover-bg': social.color } as React.CSSProperties}
                    aria-label={social.label}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-white group-hover:text-iftm-gold transition-colors"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Accreditation */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.04] rounded-lg border border-white/[0.06]">
                <Image
                  src="/images/newlogo.png"
                  alt="NAAC"
                  width={16}
                  height={16}
                  style={{ width: "auto", height: "16px" }}
                />
                <span className="text-white text-[11px] font-medium">NAAC &apos;A&apos; Grade</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.04] rounded-lg border border-white/[0.06]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="text-white text-[11px] font-medium">UGC Recognized</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/[0.04] bg-black/20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <Link href="/anti-ragging" className="text-white hover:text-iftm-gold transition-colors">Anti Ragging</Link>
              <span className="text-white/40">|</span>
              <Link href="/grievance" className="text-white hover:text-iftm-gold transition-colors">Grievance</Link>
              <span className="text-white/40">|</span>
              <Link href="/privacy" className="text-white hover:text-iftm-gold transition-colors">Privacy</Link>
              <span className="text-white/40">|</span>
              <Link href="/disclaimer" className="text-white hover:text-iftm-gold transition-colors">Disclaimer</Link>
              <span className="text-white/40">|</span>
              <Link href="/terms" className="text-white hover:text-iftm-gold transition-colors">Terms</Link>
            </div>
            <p className="text-white text-[11px]">
              &copy; {new Date().getFullYear()} IFTM University, Moradabad. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
