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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amaranadi.com"),
  title: "Amara Nadi Co., Ltd — Bulk Human Hair Export",
  description:
    "Amara Nadi connects Myanmar's finest raw and processed human hair with global manufacturers — ethically sourced, quality-graded, and reliably exported.",
  openGraph: {
    title: "Amara Nadi Co., Ltd — Bulk Human Hair Export",
    description:
      "Connecting Myanmar's finest raw and processed human hair with global manufacturers — ethically sourced and reliably exported.",
    type: "website",
    images: [
      {
        url: "/newSocialmediasharing.png",
        width: 3020,
        height: 1726,
        alt: "Amara Nadi Co., Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amara Nadi Co., Ltd — Bulk Human Hair Export",
    description:
      "Connecting Myanmar's finest raw and processed human hair with global manufacturers.",
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
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
