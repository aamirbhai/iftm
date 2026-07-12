# IFTM Page Templates Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use compose:subagent (recommended) or compose:execute to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create 4 page templates (Page, Blog Post, News Article, Programme Detail) for IFTM University website.

**Architecture:** Next.js App Router with dynamic `[slug]` routes, shared components (Header, Footer, PageHero), static dummy data with TypeScript interfaces ready for CMS integration.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript

## Global Constraints

- Use existing Header and Footer components from `src/components/`
- Follow existing color palette: `iftm-primary`, `iftm-navy`, `iftm-gold`, `iftm-light`
- Font system: Plus Jakarta Sans (heading), Teko (numbers)
- Max width: `max-w-[1400px]`, padding: `px-4 md:px-6`
- Mobile-first responsive design
- All templates include proper SEO metadata via `generateMetadata`

---

### Task 1: Create PageHero Component

**Covers:** S4, S5, S6, S7

**Files:**
- Create: `src/components/PageHero.tsx`

**Interfaces:**
- Produces: `PageHero` component used by all 4 templates
- Props: `title: string`, `subtitle?: string`, `breadcrumbs: {label: string, href: string}[]`, `image?: string`

- [ ] **Step 1: Create PageHero component**

```tsx
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
```

- [ ] **Step 2: Verify component compiles**

Run: `npm run build`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/PageHero.tsx
git commit -m "feat: add PageHero component for page templates"
```

---

### Task 2: Create Generic Page Template

**Covers:** S4

**Files:**
- Create: `src/app/[slug]/page.tsx`

**Interfaces:**
- Consumes: `PageHero`, `Header`, `Footer`
- Produces: Generic page at `/{slug}` route

- [ ] **Step 1: Create page template with dummy data**

```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Static page data - replace with CMS later
const pages: Record<string, {
  title: string;
  subtitle: string;
  content: string;
  sidebarLinks: { label: string; href: string }[];
}> = {
  about: {
    title: "About IFTM University",
    subtitle: "Committed to Academic Excellence since 2001",
    content: `
      <h2>Our Story</h2>
      <p>IFTM University, Moradabad was established in 2001 with a vision to provide quality education and foster research culture in the region. Over the years, we have grown into a multidisciplinary university offering 130+ programmes across various streams.</p>
      
      <h2>Our Mission</h2>
      <p>To impart quality education that combines theoretical knowledge with practical skills, preparing students to become responsible global citizens and leaders in their chosen fields.</p>
      
      <h2>Our Vision</h2>
      <p>To be a center of excellence in higher education, recognized nationally and internationally for innovation, research, and holistic development of students.</p>
      
      <h2>Key Highlights</h2>
      <ul>
        <li>NAAC 'A' Grade Accredited University</li>
        <li>UGC Recognized under Section 2(f) & 12(B)</li>
        <li>AICTE, PCI, BCI Approved Programmes</li>
        <li>69+ Acre Lush Green Campus</li>
        <li>90%+ Placement Rate</li>
        <li>130+ Programmes across 11 Schools</li>
      </ul>
    `,
    sidebarLinks: [
      { label: "Salient Features", href: "/salient-features" },
      { label: "Approvals & Rankings", href: "/approvals" },
      { label: "Administration", href: "/administration" },
      { label: "University Governance", href: "/governance" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  contact: {
    title: "Contact Us",
    subtitle: "We'd love to hear from you",
    content: `
      <h2>Get in Touch</h2>
      <p>Have questions about admissions, programmes, or campus life? Reach out to us through any of the channels below.</p>
      
      <h2>Address</h2>
      <p>IFTM University<br>Lodhipur Rajput, Delhi Road<br>Moradabad, Uttar Pradesh - 244102<br>India</p>
      
      <h2>Phone</h2>
      <p>Main Office: +91-9639004077<br>Toll Free: 1800-121-066666</p>
      
      <h2>Email</h2>
      <p>General Enquiries: info@iftm.ac.in<br>Admissions: admissions@iftm.ac.in</p>
      
      <h2>Office Hours</h2>
      <p>Monday to Saturday: 9:00 AM - 5:00 PM<br>Sunday: Closed</p>
    `,
    sidebarLinks: [
      { label: "How to Reach", href: "/how-to-reach" },
      { label: "Enquiry Form", href: "/enquire" },
      { label: "Feedback", href: "/feedback" },
    ],
  },
};

type PageParams = { slug: string };

export async function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return { title: "Page Not Found" };

  return {
    title: `${page.title} | IFTM University Moradabad`,
    description: page.subtitle,
    alternates: { canonical: `https://iftmuniversity.ac.in/${slug}` },
  };
}

export default async function GenericPage({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageHero
          title={page.title}
          subtitle={page.subtitle}
          breadcrumbs={[{ label: page.title, href: `/${slug}` }]}
        />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
              {/* Main Content */}
              <article
                className="prose prose-lg max-w-none
                  prose-headings:text-iftm-dark prose-headings:font-bold
                  prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-iftm-border prose-h2:pb-2
                  prose-p:text-iftm-text prose-p:leading-relaxed
                  prose-li:text-iftm-text
                  prose-a:text-iftm-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />

              {/* Sidebar */}
              <aside>
                <div className="bg-iftm-light rounded-xl p-6 sticky top-24">
                  <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                    Quick Links
                  </h3>
                  <ul className="space-y-2">
                    {page.sidebarLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 py-2 px-3 text-iftm-text hover:text-iftm-primary hover:bg-white rounded-lg transition-all text-sm"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-iftm-primary">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Contact Card */}
                  <div className="mt-6 p-4 bg-iftm-primary/10 rounded-lg border border-iftm-primary/20">
                    <h4 className="text-iftm-dark font-semibold text-sm mb-2">Need Help?</h4>
                    <p className="text-iftm-text text-xs mb-3">Contact our admission office</p>
                    <a
                      href="tel:+919639004077"
                      className="flex items-center gap-2 text-iftm-primary font-semibold text-sm"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      +91-9639004077
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: No errors, page generates at `/about` and `/contact`

- [ ] **Step 3: Commit**

```bash
git add src/app/[slug]/page.tsx
git commit -m "feat: add generic page template with about and contact pages"
```

---

### Task 3: Create Blog Listing Page

**Covers:** S5

**Files:**
- Create: `src/app/blog/page.tsx`

**Interfaces:**
- Consumes: `Header`, `Footer`, `PageHero`
- Produces: Blog listing at `/blog`

- [ ] **Step 1: Create blog listing page**

```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | IFTM University Moradabad",
  description: "Latest insights, stories, and updates from IFTM University. Read about admissions, campus life, placements, and more.",
  alternates: { canonical: "https://iftmuniversity.ac.in/blog" },
};

const blogs = [
  {
    title: "Top Career Options After B.Pharm in 2026",
    excerpt: "Discover the best career opportunities available after completing B.Pharm including pharma industry, research, government jobs, and higher studies.",
    date: "10 Jul 2026",
    category: "Pharmacy",
    img: "/images/buildings/7.jpg",
    slug: "career-after-bpharm",
    author: "Dr. Rajesh Kumar",
  },
  {
    title: "Why Choose IFTM for Engineering? A Complete Guide",
    excerpt: "Learn why IFTM University is the best choice for engineering aspirants with NAAC A Grade, industry partnerships, and excellent placements.",
    date: "05 Jul 2026",
    category: "Engineering",
    img: "/images/buildings/4.jpg",
    slug: "why-iftm-engineering",
    author: "Prof. Anita Sharma",
  },
  {
    title: "NEP 2020: How IFTM is Transforming Education",
    excerpt: "IFTM University is at the forefront of implementing the National Education Policy 2020 with multidisciplinary approach and outcome-based education.",
    date: "28 Jun 2026",
    category: "Education",
    img: "/images/buildings/campus2.jpg",
    slug: "nep-2020-iftm",
    author: "Dr. Priya Singh",
  },
  {
    title: "Campus Life at IFTM: Beyond Academics",
    excerpt: "Explore the vibrant campus life at IFTM with sports, cultural events, student clubs, and holistic development opportunities.",
    date: "20 Jun 2026",
    category: "Campus Life",
    img: "/images/buildings/14.jpg",
    slug: "campus-life-iftm",
    author: "Student Council",
  },
  {
    title: "IFTM Placement Records: Top Recruiters & Packages",
    excerpt: "A detailed look at IFTM's placement statistics, top recruiting companies, and the highest packages offered to students.",
    date: "15 Jun 2026",
    category: "Placements",
    img: "/images/buildings/campus1.jpg",
    slug: "placement-records",
    author: "Training & Placement Cell",
  },
  {
    title: "Scholarship Opportunities at IFTM University 2026-27",
    excerpt: "Complete guide to merit-based, need-based, and government scholarships available for IFTM students in the upcoming academic session.",
    date: "10 Jun 2026",
    category: "Admissions",
    img: "/images/buildings/campus5.jpg",
    slug: "scholarships-2026",
    author: "Admissions Office",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageHero
          title="Blog"
          subtitle="Insights, stories, and updates from IFTM University"
          breadcrumbs={[{ label: "Blog", href: "/blog" }]}
        />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="group bg-white rounded-xl border border-iftm-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-iftm-primary text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-iftm-text-light text-[11px] mb-2">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.author}</span>
                    </div>
                    <h3 className="text-iftm-dark font-bold text-[15px] mb-2 group-hover:text-iftm-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-iftm-text-light text-sm leading-relaxed line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-iftm-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      Read More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/app/blog/page.tsx
git commit -m "feat: add blog listing page"
```

---

### Task 4: Create Blog Post Detail Template

**Covers:** S5

**Files:**
- Create: `src/app/blog/[slug]/page.tsx`

**Interfaces:**
- Consumes: `Header`, `Footer`, `PageHero`
- Produces: Blog post detail at `/blog/[slug]`

- [ ] **Step 1: Create blog post detail page**

```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const blogPosts: Record<string, {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  img: string;
  content: string;
  relatedPosts: { title: string; slug: string; img: string; category: string }[];
}> = {
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
      <p>For those interested in innovation, R&D offers exciting opportunities in drug discovery, formulation development, and clinical research. Many pharmaceutical companies have dedicated R&D centers where B.Pharm graduates can contribute to groundbreaking research.</p>
      
      <h2>3. Higher Studies</h2>
      <p>Pursuing M.Pharm or MBA in Pharmaceutical Management can open doors to senior positions and specialized roles. Popular specializations include:</p>
      <ul>
        <li>Pharmaceutics</li>
        <li>Pharmaceutical Chemistry</li>
        <li>Pharmacology</li>
        <li>Pharmacognosy</li>
      </ul>
      
      <h2>4. Government Jobs</h2>
      <p>B.Pharm graduates can apply for various government positions including Drug Inspector, Pharmacist in government hospitals, and positions in CDSCO and state drug control organizations.</p>
      
      <h2>5. Entrepreneurship</h2>
      <p>Starting your own pharmacy, pharmaceutical distribution business, or consulting firm is another viable path. The government's Startup India initiative provides additional support for pharmaceutical entrepreneurs.</p>
      
      <h2>Conclusion</h2>
      <p>The career landscape for B.Pharm graduates in 2026 is diverse and promising. With the right skills and determination, graduates can build successful careers in various sectors of the pharmaceutical industry.</p>
    `,
    relatedPosts: [
      { title: "Why Choose IFTM for Engineering?", slug: "why-iftm-engineering", img: "/images/buildings/4.jpg", category: "Engineering" },
      { title: "NEP 2020: How IFTM is Transforming Education", slug: "nep-2020-iftm", img: "/images/buildings/campus2.jpg", category: "Education" },
      { title: "Scholarship Opportunities 2026-27", slug: "scholarships-2026", img: "/images/buildings/campus5.jpg", category: "Admissions" },
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
      <p>Choosing the right engineering college is one of the most important decisions in a student's life. IFTM University stands out as a premier institution for engineering education in Uttar Pradesh.</p>
      
      <h2>NAAC 'A' Grade Accreditation</h2>
      <p>IFTM University has been accredited with NAAC 'A' Grade, a testament to our commitment to academic excellence and quality education. This accreditation ensures that our engineering programmes meet the highest national standards.</p>
      
      <h2>Industry Partnerships</h2>
      <p>We have established strong partnerships with leading companies including TCS, Infosys, Wipro, and HCL. These collaborations provide students with:</p>
      <ul>
        <li>Industry-relevant curriculum</li>
        <li>Internship opportunities</li>
        <li>Guest lectures from industry experts</li>
        <li>Placement assistance</li>
      </ul>
      
      <h2>State-of-the-Art Infrastructure</h2>
      <p>Our 69+ acre campus features modern laboratories, smart classrooms, and advanced research facilities that provide students with hands-on learning experience.</p>
      
      <h2>Experienced Faculty</h2>
      <p>Our faculty members are industry veterans and academic scholars who bring real-world experience to the classroom. Many hold Ph.D. degrees from prestigious institutions.</p>
      
      <h2>Excellent Placement Record</h2>
      <p>With a 90%+ placement rate, IFTM engineering graduates are recruited by top companies across India. Our dedicated Training & Placement Cell ensures students are industry-ready.</p>
      
      <h2>Conclusion</h2>
      <p>IFTM University offers a comprehensive engineering education that combines academic rigor with practical skills, making it the ideal choice for aspiring engineers.</p>
    `,
    relatedPosts: [
      { title: "Top Career Options After B.Pharm", slug: "career-after-bpharm", img: "/images/buildings/7.jpg", category: "Pharmacy" },
      { title: "Campus Life at IFTM", slug: "campus-life-iftm", img: "/images/buildings/14.jpg", category: "Campus Life" },
      { title: "IFTM Placement Records", slug: "placement-records", img: "/images/buildings/campus1.jpg", category: "Placements" },
    ],
  },
};

type BlogParams = { slug: string };

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<BlogParams> }): Promise<Metadata> {
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
      images: [{ url: `https://iftmuniversity.ac.in${post.img}`, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<BlogParams> }) {
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
            <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
          </div>
          <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-20">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-white/60 text-sm">
                <li><Link href="/" className="hover:text-iftm-gold transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-iftm-gold transition-colors">Blog</Link></li>
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
                      {["Pharmacy", "Engineering", "Education", "Campus Life", "Placements", "Admissions"].map((cat) => (
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
                    <img src={related.img} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/app/blog/[slug]/page.tsx
git commit -m "feat: add blog post detail template"
```

---

### Task 5: Create News Listing Page

**Covers:** S6

**Files:**
- Create: `src/app/news/page.tsx`

**Interfaces:**
- Consumes: `Header`, `Footer`, `PageHero`
- Produces: News listing at `/news`

- [ ] **Step 1: Create news listing page**

```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | IFTM University Moradabad",
  description: "Latest news, announcements, and updates from IFTM University. Stay informed about admissions, events, and achievements.",
  alternates: { canonical: "https://iftmuniversity.ac.in/news" },
};

const newsItems = [
  {
    title: "Admissions Open 2026-27 | Apply Now",
    description: "IFTM University invites applications for all UG, PG, Diploma and Ph.D. programmes. Scholarships available for meritorious students.",
    date: "15 Mar 2026",
    department: "Admissions Office",
    img: "/images/gallery/campus1.jpg",
    slug: "admissions-open-2026-27",
  },
  {
    title: "NAAC 'A' Grade Accreditation Achieved",
    description: "IFTM University has been accredited with NAAC 'A' Grade by the National Assessment and Accreditation Council for academic excellence.",
    date: "2024",
    department: "University Administration",
    img: "/images/gallery/campus2.jpg",
    slug: "naac-a-grade",
  },
  {
    title: "MoU with Leading Industry Partners",
    description: "New collaborations with TCS, Infosys, Wipro, HCL for student training, internships and placement opportunities.",
    date: "2025-26",
    department: "Training & Placement",
    img: "/images/gallery/campus3.jpg",
    slug: "mou-industry-partners",
  },
  {
    title: "Campus Infrastructure Upgraded",
    description: "New smart classrooms, advanced laboratories and modern library facilities added to enhance student learning experience.",
    date: "2025",
    department: "Campus Development",
    img: "/images/gallery/campus4.jpg",
    slug: "infrastructure-upgrade",
  },
  {
    title: "Annual Tech Fest 2026 Announced",
    description: "IFTM's annual technical festival TechnoVision 2026 will be held in March with workshops, hackathons, and guest lectures.",
    date: "Feb 2026",
    department: "Student Activities",
    img: "/images/gallery/campus1.jpg",
    slug: "tech-fest-2026",
  },
  {
    title: "Research Grant Approved by DST",
    description: "Department of Science & Technology approves research grant for advanced materials research at School of Sciences.",
    date: "Jan 2026",
    department: "Research Cell",
    img: "/images/gallery/campus2.jpg",
    slug: "dst-research-grant",
  },
];

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageHero
          title="News & Updates"
          subtitle="Stay informed about the latest happenings at IFTM University"
          breadcrumbs={[{ label: "News", href: "/news" }]}
        />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="group bg-white rounded-xl border border-iftm-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-iftm-navy text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                        Official
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-iftm-text-light text-[11px] mb-2">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.department}</span>
                    </div>
                    <h3 className="text-iftm-dark font-bold text-[15px] mb-2 group-hover:text-iftm-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-iftm-text-light text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-iftm-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      Read More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/app/news/page.tsx
git commit -m "feat: add news listing page"
```

---

### Task 6: Create News Article Detail Template

**Covers:** S6

**Files:**
- Create: `src/app/news/[slug]/page.tsx`

**Interfaces:**
- Consumes: `Header`, `Footer`
- Produces: News article detail at `/news/[slug]`

- [ ] **Step 1: Create news article detail page**

```tsx
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
        <li>And many more...</li>
      </ul>
      
      <h2>Scholarships Available</h2>
      <p>Merit-based and need-based scholarships are available for eligible students. Special scholarships for:</p>
      <ul>
        <li>Students scoring above 90% in qualifying examination</li>
        <li>Sports achievers at state/national level</li>
        <li>Wards of defense personnel</li>
        <li>Students from economically weaker sections</li>
      </ul>
      
      <h2>How to Apply</h2>
      <p>Interested candidates can apply online through our admission portal or visit the campus for in-person counseling.</p>
      
      <h2>Contact</h2>
      <p>For admission queries, contact:<br>
      Phone: +91-9639004077<br>
      Toll Free: 1800-121-066666<br>
      Email: admissions@iftm.ac.in</p>
    `,
    relatedNews: [
      { title: "NAAC 'A' Grade Accreditation Achieved", slug: "naac-a-grade", date: "2024" },
      { title: "Scholarship Applications Open", slug: "admissions-open-2026-27", date: "Jul 2026" },
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
      <p>IFTM University, Moradabad has been accredited with NAAC 'A' Grade by the National Assessment and Accreditation Council (NAAC), Bangalore. This prestigious accreditation is a testament to our commitment to academic excellence and quality education.</p>
      
      <h2>About NAAC</h2>
      <p>NAAC is an autonomous body established by the University Grants Commission (UGC) to assess and accredit institutions of higher education in India. The grading is based on seven criteria including curricular aspects, teaching-learning, research, infrastructure, student support, governance, and institutional values.</p>
      
      <h2>What This Means</h2>
      <p>The NAAC 'A' Grade accreditation validates that IFTM University meets the highest standards of quality in higher education. This recognition:</p>
      <ul>
        <li>Enhances the value of degrees awarded by the university</li>
        <li>Opens doors for research funding and collaborations</li>
        <li>Attracts top faculty and students</li>
        <li>Ensures continuous improvement in academic quality</li>
      </ul>
      
      <h2>Our Commitment</h2>
      <p>This achievement motivates us to continue our pursuit of excellence. We remain committed to providing world-class education and fostering a culture of innovation and research.</p>
    `,
    relatedNews: [
      { title: "Admissions Open 2026-27", slug: "admissions-open-2026-27", date: "Mar 2026" },
      { title: "MoU with Industry Partners", slug: "mou-industry-partners", date: "2025-26" },
      { title: "Research Grant Approved", slug: "dst-research-grant", date: "Jan 2026" },
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
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/app/news/[slug]/page.tsx
git commit -m "feat: add news article detail template"
```

---

### Task 7: Create Programmes Listing Page

**Covers:** S7

**Files:**
- Create: `src/app/programmes/page.tsx`

**Interfaces:**
- Consumes: `Header`, `Footer`, `PageHero`
- Produces: Programmes listing at `/programmes`

- [ ] **Step 1: Create programmes listing page**

```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes Offered | IFTM University Moradabad",
  description: "Explore 130+ programmes across Engineering, Pharmacy, Management, Law, Sciences, and more at IFTM University. Find your perfect course today.",
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
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/app/programmes/page.tsx
git commit -m "feat: add programmes listing page"
```

---

### Task 8: Create Programme Detail Template

**Covers:** S7

**Files:**
- Create: `src/app/programmes/[slug]/page.tsx`

**Interfaces:**
- Consumes: `Header`, `Footer`
- Produces: Programme detail at `/programmes/[slug]`

- [ ] **Step 1: Create programme detail page**

```tsx
"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const programmeData: Record<string, {
  name: string;
  school: string;
  level: string;
  duration: string;
  eligibility: string;
  fee: string;
  overview: string;
  curriculum: string;
  career: string;
  relatedProgrammes: { name: string; slug: string; level: string }[];
}> = {
  "btech-cse": {
    name: "B.Tech Computer Science & Engineering",
    school: "School of Engineering & Technology",
    level: "UG",
    duration: "4 Years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics with minimum 50% marks",
    fee: "₹85,000 per year",
    overview: `
      <p>The B.Tech Computer Science & Engineering programme at IFTM University is designed to produce industry-ready professionals equipped with strong technical skills and problem-solving abilities.</p>
      <p>Our curriculum covers the latest technologies including Artificial Intelligence, Machine Learning, Cloud Computing, and Cybersecurity, ensuring students are prepared for the future of technology.</p>
      <h3>Programme Highlights</h3>
      <ul>
        <li>Industry-aligned curriculum updated annually</li>
        <li>Hands-on experience with latest technologies</li>
        <li>Dedicated coding labs and innovation centers</li>
        <li>Internship opportunities with top tech companies</li>
        <li>90%+ placement rate with top recruiters</li>
      </ul>
    `,
    curriculum: `
      <h3>Year 1 - Foundation</h3>
      <ul>
        <li>Engineering Mathematics I & II</li>
        <li>Physics & Chemistry</li>
        <li>Programming in C</li>
        <li>Basic Electronics</li>
        <li>Engineering Graphics</li>
      </ul>
      <h3>Year 2 - Core</h3>
      <ul>
        <li>Data Structures & Algorithms</li>
        <li>Object Oriented Programming (Java)</li>
        <li>Database Management Systems</li>
        <li>Computer Organization</li>
        <li>Discrete Mathematics</li>
      </ul>
      <h3>Year 3 - Advanced</h3>
      <ul>
        <li>Operating Systems</li>
        <li>Computer Networks</li>
        <li>Software Engineering</li>
        <li>Artificial Intelligence</li>
        <li>Web Technologies</li>
      </ul>
      <h3>Year 4 - Specialization</h3>
      <ul>
        <li>Machine Learning</li>
        <li>Cloud Computing</li>
        <li>Cybersecurity</li>
        <li>Major Project</li>
        <li>Industrial Training</li>
      </ul>
    `,
    career: `
      <p>B.Tech CSE graduates from IFTM University have excellent career prospects in the rapidly growing IT industry.</p>
      <h3>Job Roles</h3>
      <ul>
        <li>Software Developer/Engineer</li>
        <li>Data Scientist</li>
        <li>AI/ML Engineer</li>
        <li>Cloud Architect</li>
        <li>Cybersecurity Analyst</li>
        <li>Full Stack Developer</li>
      </ul>
      <h3>Top Recruiters</h3>
      <ul>
        <li>TCS</li>
        <li>Infosys</li>
        <li>Wipro</li>
        <li>HCL Technologies</li>
        <li>Accenture</li>
        <li>Cognizant</li>
      </ul>
      <h3>Average Package</h3>
      <p>₹4.5 - 6 LPA (Freshers)<br>₹8 - 12 LPA (Experienced)</p>
    `,
    relatedProgrammes: [
      { name: "B.Tech Artificial Intelligence", slug: "btech-ai", level: "UG" },
      { name: "M.Tech Computer Science", slug: "mtech-cse", level: "PG" },
      { name: "BCA (Hons.)", slug: "bca", level: "UG" },
    ],
  },
  "bpharm": {
    name: "B.Pharm",
    school: "School of Pharmaceutical Sciences",
    level: "UG",
    duration: "4 Years",
    eligibility: "10+2 with Physics, Chemistry, Biology/Mathematics with minimum 50% marks",
    fee: "₹75,000 per year",
    overview: `
      <p>The Bachelor of Pharmacy (B.Pharm) programme at IFTM University is approved by PCI (Pharmacy Council of India) and provides comprehensive education in pharmaceutical sciences.</p>
      <p>Students gain hands-on experience in our state-of-the-art laboratories and learn from experienced faculty members who are experts in their respective fields.</p>
      <h3>Programme Highlights</h3>
      <ul>
        <li>PCI Approved Programme</li>
        <li>Modern pharmaceutical laboratories</li>
        <li>Industry visits and internships</li>
        <li>Research opportunities</li>
        <li>Excellent placement record</li>
      </ul>
    `,
    curriculum: `
      <h3>Year 1</h3>
      <ul>
        <li>Human Anatomy & Physiology</li>
        <li>Pharmaceutical Chemistry</li>
        <li>Pharmaceutics I</li>
        <li>Biochemistry</li>
        <li>Mathematics for Pharmacy</li>
      </ul>
      <h3>Year 2</h3>
      <ul>
        <li>Pharmacology I</li>
        <li>Pharmaceutical Chemistry II</li>
        <li>Pharmaceutics II</li>
        <li>Pathophysiology</li>
        <li>Pharmacognosy</li>
      </ul>
      <h3>Year 3</h3>
      <ul>
        <li>Pharmacology II</li>
        <li>Pharmaceutical Analysis</li>
        <li>Pharmaceutical Jurisprudence</li>
        <li>Medicinal Chemistry</li>
        <li>Biopharmaceutics</li>
      </ul>
      <h3>Year 4</h3>
      <ul>
        <li>Drug Design</li>
        <li>Quality Assurance</li>
        <li>Pharmaceutical Biotechnology</li>
        <li>Project Work</li>
        <li>Hospital Pharmacy Training</li>
      </ul>
    `,
    career: `
      <p>B.Pharm graduates have diverse career opportunities in the pharmaceutical industry, healthcare sector, and research.</p>
      <h3>Job Roles</h3>
      <ul>
        <li>Pharmacist</li>
        <li>Medical Representative</li>
        <li>Quality Control Analyst</li>
        <li>Drug Inspector</li>
        <li>Research Scientist</li>
        <li>Regulatory Affairs Specialist</li>
      </ul>
      <h3>Top Recruiters</h3>
      <ul>
        <li>Sun Pharma</li>
        <li>Dr. Reddy's</li>
        <li>Cipla</li>
        <li>Lupin</li>
        <li>Aurobindo Pharma</li>
        <li>Zydus Cadila</li>
      </ul>
    `,
    relatedProgrammes: [
      { name: "D.Pharm", slug: "dpharm", level: "Diploma" },
      { name: "M.Pharm Pharmaceutics", slug: "mpharm-pharmaceutics", level: "PG" },
      { name: "B.Tech Biotechnology", slug: "btech-biotech", level: "UG" },
    ],
  },
};

const levelColors: Record<string, string> = {
  Diploma: "bg-orange-500",
  UG: "bg-iftm-primary",
  PG: "bg-iftm-navy",
  "Ph.D.": "bg-purple-700",
};

export default function ProgrammeDetailPage({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState("overview");
  const programme = programmeData[params.slug];

  if (!programme) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-[90px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-iftm-dark mb-4">Programme Not Found</h1>
            <Link href="/programmes" className="text-iftm-primary hover:underline">
              View All Programmes
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "career", label: "Career Prospects" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-[90px] md:pt-[110px] bg-gradient-to-br from-iftm-navy via-[#0f1235] to-[#1a1040]">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-10 md:py-16">
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-white/60 text-sm">
                <li><Link href="/" className="hover:text-iftm-gold transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/programmes" className="hover:text-iftm-gold transition-colors">Programmes</Link></li>
                <li>/</li>
                <li className="text-iftm-gold">{programme.name}</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase text-white ${levelColors[programme.level]}`}>
                {programme.level}
              </span>
              <span className="text-white/60 text-sm">{programme.school}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {programme.name}
            </h1>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Duration", value: programme.duration },
                { label: "Level", value: programme.level },
                { label: "Fee", value: programme.fee },
                { label: "Eligibility", value: programme.eligibility.split("with")[0] },
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <span className="text-white/60 text-xs uppercase tracking-wider">{stat.label}</span>
                  <p className="text-white font-semibold text-sm mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-iftm-primary via-iftm-gold to-iftm-primary" />
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
              {/* Main Content */}
              <div>
                {/* Tabs */}
                <div className="flex gap-2 mb-8 border-b border-iftm-border pb-4 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                        activeTab === tab.id
                          ? "bg-iftm-primary text-white"
                          : "bg-iftm-light text-iftm-text hover:bg-iftm-primary/10"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:text-iftm-dark prose-headings:font-bold
                    prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                    prose-p:text-iftm-text prose-p:leading-relaxed
                    prose-li:text-iftm-text"
                  dangerouslySetInnerHTML={{ __html: programme[activeTab as keyof typeof programme] as string }}
                />
              </div>

              {/* Sidebar */}
              <aside>
                <div className="sticky top-24 space-y-6">
                  {/* Eligibility Card */}
                  <div className="bg-iftm-light rounded-xl p-6">
                    <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                      Eligibility
                    </h3>
                    <p className="text-iftm-text text-sm">{programme.eligibility}</p>
                  </div>

                  {/* Fee Card */}
                  <div className="bg-iftm-light rounded-xl p-6">
                    <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                      Fee Structure
                    </h3>
                    <p className="text-iftm-primary font-bold text-2xl">{programme.fee}</p>
                    <p className="text-iftm-text-light text-xs mt-1">*Additional fees may apply</p>
                  </div>

                  {/* Apply CTA */}
                  <div className="bg-gradient-to-br from-iftm-primary to-iftm-primary-dark rounded-xl p-6 text-white">
                    <h3 className="font-bold text-lg mb-2">Ready to Apply?</h3>
                    <p className="text-white/80 text-sm mb-4">Start your application for {programme.name}</p>
                    <a
                      href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 bg-white text-iftm-primary font-bold text-center rounded-lg hover:bg-iftm-gold transition-colors"
                    >
                      Apply Now
                    </a>
                  </div>

                  {/* Related Programmes */}
                  <div className="bg-iftm-light rounded-xl p-6">
                    <h3 className="text-iftm-dark font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-iftm-primary rounded-full" />
                      Related Programmes
                    </h3>
                    <div className="space-y-3">
                      {programme.relatedProgrammes.map((related, index) => (
                        <Link
                          key={index}
                          href={`/programmes/${related.slug}`}
                          className="flex items-center gap-3 p-3 bg-white rounded-lg border border-iftm-border hover:border-iftm-primary/30 transition-colors group"
                        >
                          <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase text-white ${levelColors[related.level]}`}>
                            {related.level}
                          </span>
                          <span className="text-iftm-dark text-sm font-medium flex-1 truncate group-hover:text-iftm-primary transition-colors">
                            {related.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Sticky Apply Bar (Mobile) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-iftm-border p-4 z-40">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-iftm-dark font-semibold text-sm">{programme.name}</p>
              <p className="text-iftm-primary font-bold">{programme.fee}</p>
            </div>
            <a
              href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-iftm-primary text-white font-bold text-sm rounded-lg"
            >
              Apply Now
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/app/programmes/[slug]/page.tsx
git commit -m "feat: add programme detail template with tabs"
```

---

### Task 9: Update Sitemap

**Covers:** S4, S5, S6, S7

**Files:**
- Modify: `src/app/sitemap.ts`

**Interfaces:**
- Produces: Updated sitemap with all new pages

- [ ] **Step 1: Update sitemap to include new pages**

Read the current `src/app/sitemap.ts` and add entries for:
- `/about`
- `/contact`
- `/blog`
- `/blog/career-after-bpharm`
- `/blog/why-iftm-engineering`
- `/news`
- `/news/admissions-open-2026-27`
- `/news/naac-a-grade`
- `/programmes`
- `/programmes/btech-cse`
- `/programmes/bpharm`

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: No errors, sitemap generates correctly

- [ ] **Step 3: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat: update sitemap with new page templates"
```

---

### Task 10: Final Verification

**Covers:** S4, S5, S6, S7

- [ ] **Step 1: Run full build**

Run: `npm run build`
Expected: All pages generate successfully, no TypeScript errors

- [ ] **Step 2: Start dev server and test**

Run: `npm run dev`
Test these URLs:
- http://localhost:3000/about
- http://localhost:3000/contact
- http://localhost:3000/blog
- http://localhost:3000/blog/career-after-bpharm
- http://localhost:3000/news
- http://localhost:3000/news/admissions-open-2026-27
- http://localhost:3000/programmes
- http://localhost:3000/programmes/btech-cse
- http://localhost:3000/programmes/bpharm

- [ ] **Step 3: Test mobile responsiveness**

Check each page on mobile viewport (375px width)
Expected: All layouts responsive, no horizontal scroll

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete all 4 page templates for IFTM website"
```
