import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const newsArticles: Record<string, {
  title: string;
  department: string;
  date: string;
  img: string;
  content: string;
  relatedNews: { title: string; slug: string; date: string }[];
}> = {
  "admissions-open-2026-27": {
    title: "Admissions Open 2026-27 | Apply Now",
    department: "Admissions Office",
    date: "15 Mar 2026",
    img: "/images/gallery/campus1.jpg",
    content: `
      <h2>Admissions Now Open for Academic Session 2026-27</h2>
      <p>IFTM University, Moradabad is pleased to announce that admissions are now open for all undergraduate, postgraduate, diploma, and doctoral programmes for the academic session 2026-27.</p>
      
      <h2>Programmes Offered</h2>
      <p>We offer 130+ programmes across 11 schools including:</p>
      <ul>
        <li>Engineering & Technology (B.Tech, M.Tech)</li>
        <li>Pharmacy (B.Pharm, M.Pharm, D.Pharm)</li>
        <li>Management (BBA, MBA, B.Com)</li>
        <li>Computer Science (BCA, MCA, B.Sc CS)</li>
        <li>Sciences (B.Sc, M.Sc)</li>
        <li>Law (LLB, LLM, Integrated Law)</li>
        <li>Education (B.Ed, M.Ed)</li>
        <li>Agriculture (B.Sc Agriculture)</li>
      </ul>
      
      <h2>Scholarships Available</h2>
      <p>Merit-based and need-based scholarships are available for eligible students.</p>
      
      <h2>How to Apply</h2>
      <p>Interested candidates can apply online through our admission portal or visit the campus for in-person counseling.</p>
      
      <h2>Contact</h2>
      <p>Phone: +91-9639004077<br>Toll Free: 1800-121-066666<br>Email: admissions@iftm.ac.in</p>
    `,
    relatedNews: [
      { title: "NAAC 'A' Grade Accreditation Achieved", slug: "naac-a-grade", date: "2024" },
      { title: "Campus Infrastructure Upgraded", slug: "infrastructure-upgrade", date: "2025" },
    ],
  },
  "naac-a-grade": {
    title: "NAAC 'A' Grade Accreditation Achieved",
    department: "University Administration",
    date: "2024",
    img: "/images/gallery/campus2.jpg",
    content: `
      <h2>A Historic Achievement</h2>
      <p>IFTM University, Moradabad has been accredited with NAAC 'A' Grade by the National Assessment and Accreditation Council (NAAC), Bangalore.</p>
      
      <h2>About NAAC</h2>
      <p>NAAC is an autonomous body established by the University Grants Commission (UGC) to assess and accredit institutions of higher education in India.</p>
      
      <h2>What This Means</h2>
      <p>The NAAC 'A' Grade accreditation validates that IFTM University meets the highest standards of quality in higher education.</p>
      
      <h2>Our Commitment</h2>
      <p>This achievement motivates us to continue our pursuit of excellence.</p>
    `,
    relatedNews: [
      { title: "Admissions Open 2026-27", slug: "admissions-open-2026-27", date: "Mar 2026" },
      { title: "MoU with Industry Partners", slug: "mou-industry-partners", date: "2025-26" },
    ],
  },
};

type NewsParams = { slug: string };

export async function generateStaticParams() {
  return Object.keys(newsArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<NewsParams> }): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles[slug];
  if (!article) return { title: "News Article Not Found" };

  return {
    title: `${article.title} | IFTM University News`,
    description: article.content.substring(0, 160).replace(/<[^>]*>/g, ""),
    alternates: { canonical: `https://iftmuniversity.ac.in/news/${slug}` },
    openGraph: {
      title: article.title,
      description: article.content.substring(0, 160).replace(/<[^>]*>/g, ""),
      type: "article",
      publishedTime: article.date,
      images: [{ url: `https://iftmuniversity.ac.in${article.img}`, width: 1200, height: 630 }],
    },
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<NewsParams> }) {
  const { slug } = await params;
  const article = newsArticles[slug];

  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    image: `https://iftmuniversity.ac.in${article.img}`,
    datePublished: article.date,
    publisher: { "@type": "Organization", name: "IFTM University" },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-[90px] md:pt-[110px]">
          <div className="absolute inset-0">
            <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
          </div>
          <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-20">
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-white/60 text-sm">
                <li><Link href="/" className="hover:text-iftm-gold transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/news" className="hover:text-iftm-gold transition-colors">News</Link></li>
                <li>/</li>
                <li className="text-iftm-gold">Article</li>
              </ol>
            </nav>

            <span className="inline-block bg-iftm-navy text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
              Official News
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>{article.department}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
              <article
                className="prose prose-lg max-w-none
                  prose-headings:text-iftm-dark prose-headings:font-bold
                  prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
                  prose-p:text-iftm-text prose-p:leading-relaxed
                  prose-li:text-iftm-text"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Sidebar */}
              <aside>
                <div className="sticky top-24 space-y-6">
                  {/* Notice Board */}
                  <div className="bg-iftm-light rounded-xl p-6">
                    <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                      Notice Board
                    </h3>
                    <div className="space-y-3">
                      {[
                        { date: "10 Jul", title: "Exam Schedule Released", dept: "Examination Cell" },
                        { date: "05 Jul", title: "Scholarship Applications Open", dept: "Scholarship Cell" },
                        { date: "01 Jul", title: "Hostel Allotment Notice", dept: "Hostel Office" },
                      ].map((notice, index) => (
                        <div key={index} className="bg-white rounded-lg p-3 border border-iftm-border">
                          <div className="flex items-start gap-2">
                            <div className="flex-shrink-0 w-10 h-10 bg-iftm-primary/10 rounded-lg flex flex-col items-center justify-center">
                              <span className="text-iftm-primary font-bold text-xs leading-none">{notice.date.split(" ")[0]}</span>
                              <span className="text-iftm-primary/70 text-[8px] uppercase">{notice.date.split(" ")[1]}</span>
                            </div>
                            <div>
                              <h4 className="text-iftm-dark font-semibold text-sm line-clamp-1">{notice.title}</h4>
                              <span className="text-iftm-primary/60 text-[10px]">{notice.dept}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link href="/notices" className="block text-center text-iftm-primary text-sm font-semibold hover:underline mt-4">
                      View All Notices →
                    </Link>
                  </div>

                  {/* Related News */}
                  <div className="bg-iftm-light rounded-xl p-6">
                    <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                      Related News
                    </h3>
                    <div className="space-y-3">
                      {article.relatedNews.map((related, index) => (
                        <Link
                          key={index}
                          href={`/news/${related.slug}`}
                          className="block p-3 bg-white rounded-lg border border-iftm-border hover:border-iftm-primary/30 transition-colors"
                        >
                          <span className="text-iftm-primary text-[10px] font-semibold">{related.date}</span>
                          <h4 className="text-iftm-dark text-sm font-semibold line-clamp-2 hover:text-iftm-primary transition-colors">
                            {related.title}
                          </h4>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
