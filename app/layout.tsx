import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { CircleUser, HomeIcon, Mail } from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blog ",
  description: "Share your thoughts on exciting topics",
};

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
        <div className="grid grid-rows-[auto_1fr]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="flex h-[70px] justify-between items-center px-4 py-3 border-b">
      <div>
        <Mail />
      </div>
      <div>
        <Input placeholder="Search" className="sm:w-[400px]" />
      </div>
      <div className="flex gap-3">
        <Link href="/">
          <HomeIcon className="hover:scale-110" />
        </Link>
        <Link href="/profile">
          <CircleUser className="hover:scale-110" />
        </Link>
      </div>
    </header>
  );
}
