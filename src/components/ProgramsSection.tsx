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

  // Auto-detect level from title
  function guessLevel(title: string): "Diploma" | "UG" | "PG" | "Ph.D." {
    const t = title.toLowerCase();
    if (t.includes("ph.d") || t.includes("phd")) return "Ph.D.";
    if (t.includes("m.com") || t.includes("mba") || t.includes("mca") || t.includes("m.sc") || t.includes("m.tech") || t.includes("llm") || t.includes("m.ed") || t.includes("m.pharm") || t.includes("m.lib") || t.includes("msw") || t.startsWith("m.a") || t.startsWith("ma ")) return "PG";
    if (t.includes("diploma") || t.includes("d.pharm") || t.includes("b.lib")) return "Diploma";
    return "UG";
  }

  // Transform WordPress data for the client component
  const transformedProgrammes = programmes.map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    school: p.programmeDetails?.school || "IFTM University",
    level: (p.programmeFields?.level as "Diploma" | "UG" | "PG" | "Ph.D.") || guessLevel(p.title),
    duration: p.programmeDetails?.duration || "",
    fee: p.programmeDetails?.fee || p.programmeFields?.fee || "",
    image: p.featuredImage?.node?.sourceUrl,
  }));

  return <ProgramsSectionClient programmes={transformedProgrammes} />;
}
