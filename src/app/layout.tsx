import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Teko } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const teko = Teko({
  variable: "--font-number",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "IFTM University Moradabad - Top Private University in UP | B.Pharm, B.Tech, MBA",
  description:
    "IFTM University Moradabad - NAAC A Grade accredited private university offering B.Pharm, B.Tech, MBA, BBA, BCA, LLB courses with 90%+ placement. Apply now for admission 2026.",
  keywords:
    "IFTM University, Moradabad University, B.Pharm, B.Tech, MBA, Best private university UP, NAAC A Grade",
  authors: [{ name: "IFTM University" }],
  robots: "index, follow",
  openGraph: {
    title: "IFTM University - Top Private University in Moradabad, UP",
    description:
      "Quality education with 90%+ placement. B.Pharm, B.Tech, MBA, BBA, BCA, LLB courses. NAAC A Grade accredited.",
    url: "https://iftmuniversity.ac.in",
    siteName: "IFTM University",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${teko.variable} antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

      </head>
      <body className="min-h-screen bg-white text-[#333] font-[family-name:var(--font-heading)]">
        {children}
      </body>
    </html>
  );
}
