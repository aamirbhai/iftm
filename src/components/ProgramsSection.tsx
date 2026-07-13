import Link from "next/link";
import { getProgrammes } from "@/lib/wordpress";
import ProgramsSectionClient from "./ProgramsSectionClient";

export default async function ProgramsSection() {
  const programmes = await getProgrammes(50);

  // If no WordPress programmes, show a message
  if (programmes.length === 0) {
    return (
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-iftm-navy via-[#0f1235] to-[#1a1040]" />
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Programmes <span className="text-iftm-gold">Offered</span>
          </h2>
          <p className="text-white/60">Programme information will be available soon.</p>
          <Link
            href="/programmes"
            className="inline-block mt-6 px-6 py-3 bg-iftm-primary text-white font-semibold rounded-lg hover:bg-iftm-primary-dark transition-colors"
          >
            View All Programmes
          </Link>
        </div>
      </section>
    );
  }

  // Guess school from programme title
  function guessSchool(title: string): string {
    const t = title.toLowerCase();
    if (t.includes("bba") || t.includes("mba") || t.includes("b.com") || t.includes("m.com") || t.includes("management") || t.includes("hotel"))
      return "School of Business Management";
    if (t.includes("pharm") || t.includes("d.pharm"))
      return "School of Pharmaceutical Sciences";
    if (t.includes("bca") || t.includes("mca") || t.includes("computer"))
      return "School of Computer Science & Applications";
    if (t.includes("b.tech") || t.includes("m.tech") || t.includes("engineering") || t.includes("diploma"))
      return "School of Engineering & Technology";
    if (t.includes("biotech") || t.includes("microbiology") || t.includes("food tech"))
      return "School of Biotechnology";
    if (t.includes("b.sc") || t.includes("m.sc") || t.includes("physics") || t.includes("chemistry") || t.includes("math") || t.includes("botany") || t.includes("zoology"))
      return "School of Sciences";
    if (t.includes("law") || t.includes("llb") || t.includes("llm"))
      return "School of Law";
    if (t.includes("b.ed") || t.includes("m.ed") || t.includes("education") || t.includes("ma ") || t.includes("msw"))
      return "School of Education & Humanities";
    if (t.includes("agri") || t.includes("horti") || t.includes("agronomy"))
      return "School of Agricultural Sciences";
    if (t.includes("ba ") || t.includes("ba("))
      return "School of Education & Humanities";
    return "IFTM University";
  }

  // Guess level from programme title
  function guessLevel(title: string): "Diploma" | "UG" | "PG" | "Ph.D." {
    const t = title.toLowerCase();
    if (t.includes("ph.d") || t.includes("phd")) return "Ph.D.";
    if (t.includes("m.") || t.includes("mba") || t.includes("mca") || t.includes("m.sc") || t.includes("m.tech") || t.includes("llm") || t.includes("m.ed") || t.includes("ma ") || t.includes("msw") || t.includes("m.pharm"))
      return "PG";
    if (t.includes("diploma") || t.includes("d.pharm") || t.includes("b.lib"))
      return "Diploma";
    return "UG";
  }

  // Transform WordPress data for the client component
  const transformedProgrammes = programmes.map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    school: p.acf?.school || guessSchool(p.title),
    level: (p.acf?.level as "Diploma" | "UG" | "PG" | "Ph.D.") || guessLevel(p.title),
    duration: p.acf?.duration || "",
    image: p.featuredImage?.sourceUrl,
  }));

  return <ProgramsSectionClient programmes={transformedProgrammes} />;
}
