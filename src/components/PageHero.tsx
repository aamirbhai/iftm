import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
  image?: string;
}

export default function PageHero({ title, subtitle, breadcrumbs, image }: PageHeroProps) {
  return (
    <section className="relative pt-[90px] md:pt-[110px]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-iftm-navy via-[#0f1235] to-[#1a1040]" />
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-iftm-navy/80" />
        </div>
      )}

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-10 md:py-16">
        {/* Breadcrumbs */}
        <nav className="mb-4">
          <ol className="flex items-center gap-2 text-white/60 text-sm">
            <li>
              <Link href="/" className="hover:text-iftm-gold transition-colors">Home</Link>
            </li>
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>/</span>
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-iftm-gold">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-iftm-gold transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-lg max-w-2xl">{subtitle}</p>
        )}
      </div>

      {/* Bottom accent */}
      <div className="h-1 bg-gradient-to-r from-iftm-primary via-iftm-gold to-iftm-primary" />
    </section>
  );
}
