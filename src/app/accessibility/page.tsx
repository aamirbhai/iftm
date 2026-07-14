import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Accessibility Statement | IFTM University",
  description: "IFTM University is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility measures and how to provide feedback.",
  alternates: { canonical: "https://iftmuniversity.ac.in/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-iftm-navy to-[#1a1040]" />
        <div className="relative z-10 pt-[120px] md:pt-[130px] pb-12 max-w-[1100px] mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Accessibility <span className="text-iftm-gold">Statement</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            IFTM University is committed to ensuring digital accessibility for people with disabilities.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full"><path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 28C672 36 768 42 864 40C960 38 1056 28 1152 22C1248 16 1344 14 1392 13L1440 12V60H0Z" fill="white" /></svg>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 prose prose-lg max-w-none">
          <h2>Conformance Status</h2>
          <p>
            We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong>.
            These guidelines explain how to make web content more accessible for people with disabilities
            and more user-friendly for everyone.
          </p>

          <h2>Measures Taken</h2>
          <ul>
            <li>Semantic HTML structure with proper heading hierarchy</li>
            <li>Skip navigation link for keyboard users</li>
            <li>ARIA landmarks and labels throughout the site</li>
            <li>Color contrast ratios meeting WCAG 2.2 AA standards</li>
            <li>Keyboard accessible interactive elements</li>
            <li>Descriptive alt text for all meaningful images</li>
            <li>Form labels and error messages for screen readers</li>
            <li>Focus indicators visible on all interactive elements</li>
            <li>Responsive design supporting text resize up to 400%</li>
            <li>Reduced motion support for users with vestibular disorders</li>
            <li>Regular automated and manual accessibility audits</li>
          </ul>

          <h2>Accessibility Features</h2>
          <h3>Keyboard Navigation</h3>
          <p>
            All interactive elements on this website can be accessed using a keyboard.
            Use <kbd>Tab</kbd> to navigate between elements, <kbd>Enter</kbd> or <kbd>Space</kbd> to activate
            buttons and links, and <kbd>Escape</kbd> to close modals and dropdowns.
          </p>

          <h3>Screen Reader Support</h3>
          <p>
            This website is designed to work with screen readers including NVDA, JAWS, and VoiceOver.
            We use ARIA labels, landmarks, and live regions to ensure content is properly announced.
          </p>

          <h3>Text Resize</h3>
          <p>
            Content can be resized up to 400% without loss of information or functionality.
            The layout reflows to a single column at high zoom levels.
          </p>

          <h3>Color and Contrast</h3>
          <p>
            All text meets WCAG 2.2 AA contrast requirements. Information is never conveyed
            through color alone — additional indicators like icons and text labels are always provided.
          </p>

          <h2>Known Limitations</h2>
          <p>
            While we strive for full WCAG 2.2 AA conformance, some third-party embedded content
            (such as YouTube videos or maps) may not fully meet accessibility standards.
            We are working with our partners to improve this.
          </p>

          <h2>Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of the IFTM University website.
            If you encounter accessibility barriers, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:accessibility@iftm.ac.in">accessibility@iftm.ac.in</a></li>
            <li><strong>Phone:</strong> <a href="tel:+919639004077">+91-9639004077</a></li>
            <li><strong>Toll Free:</strong> <a href="tel:1800121066666">1800-121-066666</a></li>
            <li><strong>Address:</strong> Lodhipur Rajput, Delhi Road, Moradabad, UP - 244102</li>
          </ul>
          <p>
            We try to respond to accessibility feedback within 5 business days.
          </p>

          <h2>Enforcement</h2>
          <p>
            If you are not satisfied with our response, you may contact the relevant enforcement
            body in your jurisdiction.
          </p>

          <h2>Technical Specifications</h2>
          <p>
            This website relies on the following technologies for conformance with WCAG 2.2 AA:
          </p>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>WAI-ARIA 1.2</li>
            <li>JavaScript (with progressive enhancement)</li>
          </ul>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: July 14, 2026
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
