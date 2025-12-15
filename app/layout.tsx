import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aniveratech.com"),
  title: {
    default: "Anivera | Future-Ready Enterprise Software & AI Solutions",
    template: "%s | Anivera",
  },
  description:
    "Anivera Technologies transforms businesses with high-performance SaaS platforms, strategic AI integration, and scalable cloud architecture. Innovation for the modern enterprise.",
  keywords: [
    "Software Development",
    "Enterprise SaaS",
    "AI Solutions",
    "Cloud Architecture",
    "Digital Transformation",
    "React",
    "Next.js",
    "Web Development Company",
  ],
  authors: [{ name: "Anivera Technologies" }],
  creator: "Anivera Technologies",
  publisher: "Anivera Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Anivera | Engineering the Future of Business",
    description:
      "We build scalable, secure, and intelligent digital ecosystems. Partner with Anivera for next-gen software engineering.",
    url: "https://aniveratech.com",
    siteName: "Anivera Technologies",
    images: [
      {
        url: "/images/og-image.jpg", // Needs to be added or will fallback to generic if not present
        width: 1200,
        height: 630,
        alt: "Anivera Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anivera Technologies",
    description: "Enterprise grade software solutions.",
    creator: "@aniveratech",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#0F172A",
};

import SmoothScrolling from "@/components/providers/SmoothScrolling";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans bg-background text-foreground overflow-x-hidden selection:bg-secondary selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Anivera Technologies",
              url: "https://aniveratech.com",
              logo: "https://aniveratech.com/logo.png",
              sameAs: [
                "https://twitter.com/aniveratech",
                "https://www.linkedin.com/company/anivera-tech",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "info@aniveratech.com",
              },
            }),
          }}
        />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
