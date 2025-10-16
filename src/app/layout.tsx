// src/app/layout.tsx
import "./globals.css";
import { Poppins, Archivo } from "next/font/google";
import LayoutClient from "./LayoutClient"; // 👈 import client component

const poppins = Poppins({ subsets: ["latin"], weight: ["700"], variable: "--font-poppins" });
const archivo = Archivo({ subsets: ["latin"], weight: ["400"], variable: "--font-archivo" });

// ✅ Add metadata (server-side)
export const metadata = {
  title: "VR Business Solution | Delivering Demands with True Intent",
  description:
    "VR Business Solution is a B2B Demand generation firm with a major focus on Data, Processes, and Digital Marketing. We provide end-to-end solutions for lead generation, inside sales, and back-office services.",
  metadataBase: new URL("https://vrbusinesssolution.com"), // ✅ Replace with your real domain
  openGraph: {
    title: "VR Business Solution | Delivering Demands with True Intent",
    description:
      "VR Business Solution helps businesses achieve demand generation excellence through data-driven strategies.",
    url: "https://vrbusinesssolution.com",
    siteName: "VR Business Solution",
    images: [
      {
        url: "/vr.png", // 👈 place this image in /public/
        width: 1200,
        height: 630,
        alt: "VR Business Solution Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Business Solution | Delivering Demands with True Intent",
    description:
      "Your trusted B2B Demand Generation Partner — VR Business Solution.",
    images: ["/vr.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${archivo.className} ${poppins.variable}`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
