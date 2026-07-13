export const revalidate = 3600;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getNewsBySlug, getNewsSlugs, getNews } from "@/lib/wordpress";

type NewsParams = { slug: string };

export async function generateStaticParams() {
  const slugs = await getNewsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<NewsParams> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);
  if (!article) return { title: "News Article Not Found" };

  const plainContent = article.content?.replace(/<[^>]*>/g, "").substring(0, 160) || "";
  const imageUrl = article.featuredImage?.node?.sourceUrl;

  return {
    title: `${article.title} | IFTM University News`,
    description: plainContent,
    alternates: { canonical: `https://iftmuniversity.ac.in/news/${slug}` },
    openGraph: {
      title: article.title,
      description: plainContent,
      type: "article",
      publishedTime: article.date,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: plainContent,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<NewsParams> }) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) notFound();

  const imageUrl = article.featuredImage?.node?.sourceUrl || "/images/gallery/campus1.jpg";
  const formattedDate = new Date(article.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Related news
  const { nodes: allNews } = await getNews(6);
  const related = allNews.filter((n) => n.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    image: article.featuredImage?.node?.sourceUrl || "",
    datePublished: article.date,
    dateModified: article.modified,
    description: article.content?.replace(/<[^>]*>/g, "").substring(0, 200) || "",
    publisher: {
      "@type": "Organization",
      name: "IFTM University",
      logo: {
        "@type": "ImageObject",
        url: "https://iftmuniversity.ac.in/images/newlogo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://iftmuniversity.ac.in/news/${slug}`,
    },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <article className="pt-[90px] md:pt-[110px]">
          {/* Breadcrumb */}
          <div className="max-w-[900px] mx-auto px-4 md:px-6 pt-6 pb-4">
            <nav className="flex items-center gap-2 text-iftm-text-light text-sm">
              <Link href="/" className="hover:text-iftm-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/news" className="hover:text-iftm-primary transition-colors">News</Link>
              <span>/</span>
              <span className="text-iftm-dark truncate max-w-[200px]">{article.title}</span>
            </nav>
          </div>

          {/* Featured Image - Large, no overlay */}
          <div className="max-w-[900px] mx-auto px-4 md:px-6 mb-8">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <img
                src={imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Article Header */}
          <div className="max-w-[900px] mx-auto px-4 md:px-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-iftm-dark leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-iftm-text-light text-sm">
              <time dateTime={article.date}>{formattedDate}</time>
              <span>•</span>
              <span>IFTM University</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-[900px] mx-auto px-4 md:px-6 pb-12">
            <article
              className="prose prose-lg max-w-none
                prose-headings:text-iftm-dark prose-headings:font-bold
                prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
                prose-p:text-iftm-text prose-p:leading-relaxed
                prose-li:text-iftm-text
                prose-a:text-iftm-primary prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-md"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Related News */}
          {related.length > 0 && (
            <section className="bg-iftm-light py-12">
              <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                <h2 className="text-2xl font-bold text-iftm-dark mb-8">
                  Related <span className="text-iftm-primary">News</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/news/${item.slug}`}
                      className="group block"
                    >
                      <article className="bg-white rounded-xl overflow-hidden border border-iftm-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={item.featuredImage?.node?.sourceUrl || "/images/gallery/campus1.jpg"}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4">
                          <time className="text-iftm-text-light text-xs">
                            {new Date(item.date).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </time>
                          <h3 className="text-iftm-dark font-bold text-sm mt-2 group-hover:text-iftm-primary transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
