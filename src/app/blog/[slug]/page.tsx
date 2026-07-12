import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const blogPosts: Record<
  string,
  {
    title: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    img: string;
    content: string;
    relatedPosts: {
      title: string;
      slug: string;
      img: string;
      category: string;
    }[];
  }
> = {
  "career-after-bpharm": {
    title: "Top Career Options After B.Pharm in 2026",
    category: "Pharmacy",
    author: "Dr. Rajesh Kumar",
    date: "10 Jul 2026",
    readTime: "8 min read",
    img: "/images/buildings/7.jpg",
    content: `
      <h2>Introduction</h2>
      <p>Bachelor of Pharmacy (B.Pharm) is one of the most sought-after professional degrees in India. With the pharmaceutical industry growing at an unprecedented rate, graduates have numerous career paths available to them.</p>

      <h2>1. Pharmaceutical Industry</h2>
      <p>The pharmaceutical industry remains the largest employer of B.Pharm graduates. Roles include:</p>
      <ul>
        <li>Production Manager</li>
        <li>Quality Control Analyst</li>
        <li>Quality Assurance Executive</li>
        <li>Regulatory Affairs Specialist</li>
        <li>Medical Representative</li>
      </ul>

      <h2>2. Research & Development</h2>
      <p>For those interested in innovation, R&D offers exciting opportunities in drug discovery, formulation development, and clinical research.</p>

      <h2>3. Higher Studies</h2>
      <p>Pursuing M.Pharm or MBA in Pharmaceutical Management can open doors to senior positions and specialized roles.</p>

      <h2>4. Government Jobs</h2>
      <p>B.Pharm graduates can apply for various government positions including Drug Inspector, Pharmacist in government hospitals.</p>

      <h2>5. Entrepreneurship</h2>
      <p>Starting your own pharmacy, pharmaceutical distribution business, or consulting firm is another viable path.</p>

      <h2>Conclusion</h2>
      <p>The career landscape for B.Pharm graduates in 2026 is diverse and promising.</p>
    `,
    relatedPosts: [
      {
        title: "Why Choose IFTM for Engineering?",
        slug: "why-iftm-engineering",
        img: "/images/buildings/4.jpg",
        category: "Engineering",
      },
      {
        title: "NEP 2020: How IFTM is Transforming Education",
        slug: "nep-2020-iftm",
        img: "/images/buildings/campus2.jpg",
        category: "Education",
      },
      {
        title: "Scholarship Opportunities 2026-27",
        slug: "scholarships-2026",
        img: "/images/buildings/campus5.jpg",
        category: "Admissions",
      },
    ],
  },
  "why-iftm-engineering": {
    title: "Why Choose IFTM for Engineering? A Complete Guide",
    category: "Engineering",
    author: "Prof. Anita Sharma",
    date: "05 Jul 2026",
    readTime: "10 min read",
    img: "/images/buildings/4.jpg",
    content: `
      <h2>Introduction</h2>
      <p>Choosing the right engineering college is one of the most important decisions in a student's life.</p>

      <h2>NAAC 'A' Grade Accreditation</h2>
      <p>IFTM University has been accredited with NAAC 'A' Grade, a testament to our commitment to academic excellence.</p>

      <h2>Industry Partnerships</h2>
      <p>We have established strong partnerships with leading companies including TCS, Infosys, Wipro, and HCL.</p>

      <h2>State-of-the-Art Infrastructure</h2>
      <p>Our 69+ acre campus features modern laboratories, smart classrooms, and advanced research facilities.</p>

      <h2>Excellent Placement Record</h2>
      <p>With a 90%+ placement rate, IFTM engineering graduates are recruited by top companies across India.</p>
    `,
    relatedPosts: [
      {
        title: "Top Career Options After B.Pharm",
        slug: "career-after-bpharm",
        img: "/images/buildings/7.jpg",
        category: "Pharmacy",
      },
      {
        title: "Campus Life at IFTM",
        slug: "campus-life-iftm",
        img: "/images/buildings/14.jpg",
        category: "Campus Life",
      },
      {
        title: "IFTM Placement Records",
        slug: "placement-records",
        img: "/images/buildings/campus1.jpg",
        category: "Placements",
      },
    ],
  },
};

type BlogParams = { slug: string };

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<BlogParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return { title: "Blog Post Not Found" };

  return {
    title: `${post.title} | IFTM University Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
    alternates: { canonical: `https://iftmuniversity.ac.in/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `https://iftmuniversity.ac.in${post.img}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<BlogParams>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: `https://iftmuniversity.ac.in${post.img}`,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "IFTM University" },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-[90px] md:pt-[110px]">
          <div className="absolute inset-0">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
          </div>
          <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-20">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-white/60 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-iftm-gold transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-iftm-gold transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>/</li>
                <li className="text-iftm-gold">{post.category}</li>
              </ol>
            </nav>

            <span className="inline-block bg-iftm-primary text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
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
                  prose-li:text-iftm-text
                  prose-a:text-iftm-primary"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Sidebar */}
              <aside>
                <div className="sticky top-24 space-y-6">
                  {/* Recent Posts */}
                  <div className="bg-iftm-light rounded-xl p-6">
                    <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                      Recent Posts
                    </h3>
                    <div className="space-y-4">
                      {post.relatedPosts.map((related, index) => (
                        <Link
                          key={index}
                          href={`/blog/${related.slug}`}
                          className="flex gap-3 group"
                        >
                          <img
                            src={related.img}
                            alt={related.title}
                            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                          />
                          <div>
                            <span className="text-iftm-primary text-[10px] font-semibold uppercase">
                              {related.category}
                            </span>
                            <h4 className="text-iftm-dark text-sm font-semibold line-clamp-2 group-hover:text-iftm-primary transition-colors">
                              {related.title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="bg-iftm-light rounded-xl p-6">
                    <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                      Categories
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Pharmacy",
                        "Engineering",
                        "Education",
                        "Campus Life",
                        "Placements",
                        "Admissions",
                      ].map((cat) => (
                        <Link
                          key={cat}
                          href={`/blog?category=${cat.toLowerCase()}`}
                          className="px-3 py-1.5 bg-white text-iftm-text text-xs font-medium rounded-full hover:bg-iftm-primary hover:text-white transition-colors"
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-12 md:py-16 bg-iftm-light">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold text-iftm-dark mb-8">
              Related <span className="text-iftm-primary">Articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {post.relatedPosts.map((related, index) => (
                <Link
                  key={index}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-xl border border-iftm-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-[180px] overflow-hidden">
                    <img
                      src={related.img}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-iftm-primary text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-iftm-dark font-bold text-[15px] group-hover:text-iftm-primary transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
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
