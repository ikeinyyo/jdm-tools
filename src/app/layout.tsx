import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/features/layout/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juernes de Mesa - Tools",
  description: "Tools for Juernes de Mesa - Grupo de juegos de mesa",
  icons: {
    icon: "/images/favicon.png",
  },
};

const navigationItems = [
  { title: "Home", path: "/" },
  { title: "Event Maker", path: "/event-maker" },
  { title: "Tables", path: "/tables" },
  { title: "Post Generator", path: "/post-generator" },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar items={navigationItems} />
        <section className="bg-light w-screen h-[calc(100vh-56px)] overflow-auto">
          {children}
        </section>
      </body>
    </html>
  );
}
