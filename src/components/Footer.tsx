import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Useful Links",
    links: [
      { label: "About University", href: "/about" },
      { label: "Admissions 2026-27", href: "/admissions" },
      { label: "Placements", href: "/placements" },
      { label: "Research", href: "/research" },
      { label: "NAAC", href: "/naac" },
      { label: "NIRF", href: "/nirf" },
      { label: "IQAC", href: "/iqac" },
      { label: "ERP Login", href: "https://erp.iftm.ac.in", external: true },
      { label: "Blogs", href: "/blog" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Application Form", href: "/apply" },
      { label: "Fee & Payment", href: "/fee" },
      { label: "Scholarship", href: "/scholarship" },
      { label: "How to Apply", href: "/apply" },
      { label: "Programmes", href: "/programmes" },
      { label: "Academic Calendar", href: "/academic-calendar" },
      { label: "FAQs", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    title: "Campus Facilities",
    links: [
      { label: "Hostel", href: "/hostel" },
      { label: "Library", href: "/library" },
      { label: "Sports & Gym", href: "/sports" },
      { label: "Canteen", href: "/canteen" },
      { label: "IT Facilities", href: "/it-facilities" },
      { label: "Dispensary", href: "/health" },
      { label: "Banks & ATM", href: "/bank" },
    ],
  },
  {
    title: "Student Life",
    links: [
      { label: "Student Clubs", href: "/clubs" },
      { label: "Anti Ragging", href: "/anti-ragging" },
      { label: "Grievance", href: "/grievance" },
      { label: "Feedback", href: "/feedback" },
      { label: "Career", href: "/career" },
      { label: "Enquire", href: "/enquire" },
      { label: "LMS Portal", href: "/lms" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/iftmuniv", icon: "fa-facebook-f", color: "hover:bg-[#1877F2]" },
  { label: "Twitter", href: "https://twitter.com/IFTMUni", icon: "fa-twitter", color: "hover:bg-[#1DA1F2]" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/iftm-university-04006a245/", icon: "fa-linkedin-in", color: "hover:bg-[#0A66C2]" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCYAp-IfRk0ckvrvxFS9hKgQ", icon: "fa-youtube", color: "hover:bg-[#FF0000]" },
  { label: "Instagram", href: "https://www.instagram.com/iftmuniversity/", icon: "fa-instagram", color: "hover:bg-[#E4405F]" },
];

export default function Footer() {
  return (
    <footer className="bg-[#001055] text-white overflow-hidden">
      {/* ═══ Top CTA Banner ═══ */}
      <div className="relative bg-gradient-to-r from-iftm-primary via-red-700 to-iftm-primary">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                Admissions Open <span className="text-iftm-gold">2026-27</span>
              </h3>
              <p className="text-white/80 text-sm">
                Apply now for UG, PG &amp; Diploma programmes at IFTM University
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-white text-iftm-dark font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-iftm-gold transition-all shadow-lg"
              >
                Apply Now
              </a>
              <Link
                href="/contact"
                className="px-7 py-3 bg-white/10 border border-white/20 text-white font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Main Footer Content ═══ */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Logo & About - Left Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/newlogo.webp"
                alt="IFTM University"
                width={200}
                height={60}
                style={{ width: "auto", height: "60px" }}
              />
            </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-[320px]">
              IFTM University stands committed to academic excellence, holistic student development, and fostering innovation. NAAC &apos;A&apos; Grade accredited institution since 2001.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-iftm-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-gold">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="text-white/70 text-[13px] leading-relaxed">
                  N.H.-9, Delhi Road, Lodhipur Rajput,<br />Moradabad, UP - 244102
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-iftm-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-gold">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div className="text-white/70 text-[13px]">
                  <span className="block">+91-9639004077</span>
                  <span className="text-white/50 text-[11px]">Toll Free: 1800-121-066666</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-iftm-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-gold">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="text-white/70 text-[13px]">
                  <span className="block">info@iftm.ac.in</span>
                  <span className="text-white/50 text-[11px]">admissions@iftm.ac.in</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/70 hover:text-white hover:border-transparent ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  <i className={`fab ${social.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, index) => (
            <div key={index} className="lg:col-span-2">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-white mb-5 pb-2 border-b border-iftm-gold/30">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 text-[13px] hover:text-iftm-gold hover:pl-1 transition-all"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white/60 text-[13px] hover:text-iftm-gold hover:pl-1 transition-all"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ═══ Map Section - Full Width Bigger ═══ */}
        <div className="mt-10 pt-8 border-t border-white/[0.06]">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-1 h-5 bg-iftm-gold rounded-full" />
            <h4 className="text-[14px] font-bold uppercase tracking-wider text-white">
              Locate Us
            </h4>
            <a
              href="https://maps.google.com/?q=IFTM+University+Moradabad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-iftm-gold text-[12px] hover:underline ml-auto"
            >
              Open in Google Maps &rarr;
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-xl shadow-black/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.680396586971!2d78.64035531468515!3d28.81859668234481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b026d013bc5c1%3A0xdbc7709cdc14726e!2sIFTM+UNIVERSITY+MORADABAD!5e0!3m2!1sen!2sin!4v1514543834790"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IFTM University Location"
            />
          </div>
        </div>

        {/* ═══ Accreditation Badges ═══ */}
        <div className="mt-10 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "NAAC 'A' Grade", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
              { label: "UGC Recognized", icon: "M22 10v6M2 10l10-5 10 5-10 5z" },
              { label: "AICTE Approved", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
              { label: "PCI Approved", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
              { label: "BCI Approved", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] rounded-full border border-white/[0.06] hover:border-iftm-gold/30 hover:bg-white/[0.06] transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-gold flex-shrink-0">
                  <path d={badge.icon} />
                </svg>
                <span className="text-white/70 text-[11px] font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ Copyright Bar ═══ */}
      <div className="border-t border-white/[0.06] bg-black/20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px]">
              {[
                { label: "Anti Ragging", href: "/anti-ragging" },
                { label: "NIRF", href: "/nirf" },
                { label: "NAAC", href: "/naac" },
                { label: "IQAC", href: "/iqac" },
                { label: "Placement", href: "/placements" },
                { label: "Disclaimer", href: "/disclaimer" },
                { label: "Feedback", href: "/feedback" },
              ].map((link, i) => (
                <span key={link.href} className="flex items-center gap-3">
                  <Link href={link.href} className="text-white/50 hover:text-iftm-gold transition-colors">
                    {link.label}
                  </Link>
                  {i < 6 && <span className="text-white/20">/</span>}
                </span>
              ))}
            </div>
            <p className="text-white/40 text-[11px] text-center md:text-right">
              &copy; {new Date().getFullYear()} All Rights Reserved by IFTM University, Moradabad.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
