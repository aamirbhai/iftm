import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes Offered | IFTM University Moradabad",
  description: "Explore 130+ programmes across Engineering, Pharmacy, Management, Law, Sciences, and more at IFTM University.",
  alternates: { canonical: "https://iftmuniversity.ac.in/programmes" },
};

const schools = [
  {
    name: "School of Engineering & Technology",
    slug: "school-of-engineering",
    icon: "fa-cogs",
    programmes: [
      { name: "B.Tech Computer Science & Engineering", slug: "btech-cse", level: "UG", duration: "4 Years" },
      { name: "B.Tech Artificial Intelligence", slug: "btech-ai", level: "UG", duration: "4 Years" },
      { name: "B.Tech Civil Engineering", slug: "btech-civil", level: "UG", duration: "4 Years" },
      { name: "M.Tech Computer Science", slug: "mtech-cse", level: "PG", duration: "2 Years" },
    ],
  },
  {
    name: "School of Pharmaceutical Sciences",
    slug: "school-of-pharmacy",
    icon: "fa-pills",
    programmes: [
      { name: "B.Pharm", slug: "bpharm", level: "UG", duration: "4 Years" },
      { name: "D.Pharm", slug: "dpharm", level: "Diploma", duration: "2 Years" },
      { name: "M.Pharm Pharmaceutics", slug: "mpharm-pharmaceutics", level: "PG", duration: "2 Years" },
    ],
  },
  {
    name: "School of Business Management",
    slug: "school-of-management",
    icon: "fa-briefcase",
    programmes: [
      { name: "BBA (Hons.)", slug: "bba", level: "UG", duration: "3 Years" },
      { name: "MBA", slug: "mba", level: "PG", duration: "2 Years" },
      { name: "B.Com (Hons.)", slug: "bcom", level: "UG", duration: "3 Years" },
    ],
  },
  {
    name: "School of Computer Science",
    slug: "school-of-computer-science",
    icon: "fa-laptop-code",
    programmes: [
      { name: "BCA (Hons.)", slug: "bca", level: "UG", duration: "3 Years" },
      { name: "MCA", slug: "mca", level: "PG", duration: "2 Years" },
      { name: "B.Sc Computer Science", slug: "bsc-cs", level: "UG", duration: "3 Years" },
    ],
  },
  {
    name: "School of Law",
    slug: "school-of-law",
    icon: "fa-gavel",
    programmes: [
      { name: "LL.B", slug: "llb", level: "UG", duration: "3 Years" },
      { name: "BBA LL.B (Integrated)", slug: "bba-llb", level: "UG", duration: "5 Years" },
      { name: "LLM", slug: "llm", level: "PG", duration: "2 Years" },
    ],
  },
  {
    name: "School of Sciences",
    slug: "school-of-sciences",
    icon: "fa-flask",
    programmes: [
      { name: "B.Sc (Hons.) Physics", slug: "bsc-physics", level: "UG", duration: "3 Years" },
      { name: "B.Sc (Hons.) Chemistry", slug: "bsc-chemistry", level: "UG", duration: "3 Years" },
      { name: "M.Sc Mathematics", slug: "msc-maths", level: "PG", duration: "2 Years" },
    ],
  },
];

const levelColors: Record<string, string> = {
  Diploma: "bg-orange-500",
  UG: "bg-iftm-primary",
  PG: "bg-iftm-navy",
  "Ph.D.": "bg-purple-700",
};

export default function ProgrammesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageHero
          title="Programmes Offered"
          subtitle="Explore 130+ programmes across 11 schools"
          breadcrumbs={[{ label: "Programmes", href: "/programmes" }]}
        />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="space-y-8">
              {schools.map((school) => (
                <div key={school.slug} className="bg-iftm-light rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-iftm-primary/10 rounded-xl flex items-center justify-center">
                      <i className={`fas ${school.icon} text-iftm-primary text-xl`} />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-iftm-dark">{school.name}</h2>
                      <p className="text-iftm-text-light text-sm">{school.programmes.length} Programmes</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {school.programmes.map((programme) => (
                      <Link
                        key={programme.slug}
                        href={`/programmes/${programme.slug}`}
                        className="flex items-center gap-3 p-4 bg-white rounded-xl border border-iftm-border hover:border-iftm-primary/30 hover:shadow-md transition-all group"
                      >
                        <span className={`px-2 py-1 rounded text-[9px] font-bold uppercase text-white ${levelColors[programme.level]}`}>
                          {programme.level}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-iftm-dark text-sm font-semibold truncate group-hover:text-iftm-primary transition-colors">
                            {programme.name}
                          </h3>
                          <p className="text-iftm-text-light text-xs">{programme.duration}</p>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-text-light group-hover:text-iftm-primary transition-colors flex-shrink-0">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
