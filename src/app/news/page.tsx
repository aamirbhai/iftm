export const dynamic = 'force-dynamic';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { getNews } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "News & Updates | IFTM University Moradabad",
  description: "Latest news, announcements, and updates from IFTM University. Stay informed about admissions, events, and achievements.",
  alternates: { canonical: "https://iftmuniversity.ac.in/news" },
  openGraph: {
    title: "News & Updates | IFTM University",
    description: "Latest news, announcements, and updates from IFTM University.",
    type: "website",
  },
};

export default async function NewsPage() {
  const newsData = await getNews(50);
  const newsItems = newsData.nodes;

  // Featured article (first one)
  const featured = newsItems[0];
  const rest = newsItems.slice(1);

  return (
    <>
      <Header solid />
      <main className="min-h-screen bg-white">
        {/* Page Header */}
        <div className="pt-[90px] md:pt-[110px]">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-iftm-dark">
              News & <span className="text-iftm-primary">Updates</span>
            </h1>
            <p className="text-iftm-text-light mt-2">Latest from IFTM University, Moradabad</p>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-6 pb-16">
          {newsItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-iftm-text-light text-lg">No news articles found.</p>
            </div>
          ) : (
            <>
              {/* Featured Article - Large */}
              {featured && (
                <Link
                  href={`/news/${featured.slug}`}
                  className="group block mb-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-2xl overflow-hidden border border-iftm-border hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={featured.featuredImage?.node?.sourceUrl || "/images/gallery/campus1.jpg"}
                        alt={featured.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-6 lg:p-8">
                      <span className="text-iftm-primary text-xs font-bold uppercase tracking-wider mb-3">
                        Featured
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark mb-3 group-hover:text-iftm-primary transition-colors leading-tight">
                        {featured.title}
                      </h2>
                      <p className="text-iftm-text mb-4 line-clamp-3">
                        {featured.excerpt?.replace(/<[^>]*>/g, "") || ""}
                      </p>
                      <div className="flex items-center gap-3 text-iftm-text-light text-sm">
                        <time dateTime={featured.date}>
                          {new Date(featured.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((item) => (
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
                      <div className="p-5">
                        <time
                          dateTime={item.date}
                          className="text-iftm-text-light text-xs"
                        >
                          {new Date(item.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </time>
                        <h3 className="text-iftm-dark font-bold text-base mt-2 mb-2 group-hover:text-iftm-primary transition-colors line-clamp-2 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-iftm-text-light text-sm line-clamp-2">
                          {item.excerpt?.replace(/<[^>]*>/g, "") || ""}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
