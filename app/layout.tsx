import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.maplediaryacademy.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // ── Title ────────────────────────────────────────────────────────────────
  title: {
    default: "Maple Diary Academy — Live Online Music Classes",
    template: "%s | Maple Diary Academy",
  },

  // ── Description (150-160 chars) ──────────────────────────────────────────
  description:
    "Learn Keyboard, Piano, Guitar & Vocals online with expert teachers. Live 1-on-1 classes for all ages. First class FREE. Students across India, UAE, USA, UK, Australia & beyond.",

  // ── Keywords ─────────────────────────────────────────────────────────────
  keywords: [
    "online music classes",
    "learn keyboard online",
    "learn piano online",
    "online guitar lessons",
    "western vocals online",
    "carnatic vocals online",
    "live music classes india",
    "music classes for kids",
    "online music school",
    "Trinity College music grades",
    "RSL music exams online",
    "Maple Diary Academy",
    "music classes UAE",
    "music classes Chennai",
    "music classes Bangalore",
    "one on one music lessons online",
    "beginner music classes online",
  ],

  // ── Authorship ───────────────────────────────────────────────────────────
  authors: [{ name: "Maple Diary Academy", url: SITE_URL }],
  creator: "Maple Diary Academy",
  publisher: "Maple Diary Academy",

  // ── Robots ───────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ── Canonical ────────────────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── Open Graph ───────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB", "en_AU", "en_AE", "en_SG"],
    url: SITE_URL,
    siteName: "Maple Diary Academy",
    title: "Maple Diary Academy — Live Online Music Classes",
    description:
      "Expert live music classes for Keyboard, Piano, Guitar & Vocals. All ages & levels. First class FREE. Students in 10+ countries.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maple Diary Academy — Live Online Music Classes",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter Card ─────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Maple Diary Academy — Live Online Music Classes",
    description:
      "Expert live music classes for Keyboard, Piano, Guitar & Vocals. First class FREE.",
    images: ["/og-image.jpg"],
  },

  // ── Category ─────────────────────────────────────────────────────────────
  category: "education",
};

// ── Viewport / Theme Color ────────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: "#C8102E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
