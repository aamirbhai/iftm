export default function SkipNav() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-iftm-navy focus:text-white focus:rounded-lg focus:shadow-xl focus:text-sm focus:font-bold"
    >
      Skip to main content
    </a>
  );
}
