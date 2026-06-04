import type { Metadata } from "next";
import { Poppins, Geist_Mono, Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

const SITE_URL = "https://www.amaranadi.com";
const SITE_NAME = "Amara Nadi Co., Ltd";
const SITE_TITLE = "Amara Nadi Co., Ltd — Bulk Human Hair Export from Myanmar";
const SITE_DESCRIPTION =
  "Amara Nadi Co., Ltd is a leading Myanmar supplier of factory-grade, semi-finished human hair — ethically sourced, precisely graded, and exported directly to global wig and hair-extension manufacturers.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Amara Nadi",
    "Myanmar human hair",
    "bulk human hair export",
    "raw human hair supplier",
    "semi-finished human hair",
    "factory-grade hair",
    "wig manufacturer hair supply",
    "hair extension raw material",
    "remy hair Myanmar",
    "human hair wholesale",
    "B2B hair supplier",
    "human hair exporter",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "business",
  alternates: {
    canonical: "/",
  },
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
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: "/newSocialmediasharing.png",
        width: 3020,
        height: 1726,
        alt: "Amara Nadi Co., Ltd — Bulk Human Hair Export",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Myanmar's leading supplier of factory-grade, semi-finished human hair — exported directly to global wig and hair-extension manufacturers.",
    images: ["/newSocialmediasharing.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "အမရာနဒီ ကုမ္ပဏီ လီမိတက်",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/newSocialmediasharing.png`,
      description: SITE_DESCRIPTION,
      foundingDate: "2014",
      email: "amaranadi.group@gmail.com",
      telephone: ["+95 9 651 451 549", "+95 9 885 333 339"],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "No.(2), Kamar Kyi Road, New Yangon Quarter (Thuwana), Thingyankyun Township",
        addressLocality: "Yangon",
        addressCountry: "MM",
      },
      areaServed: "Worldwide",
      knowsAbout: [
        "Human hair sourcing",
        "Semi-finished hair processing",
        "Bulk hair export",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jakarta.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
