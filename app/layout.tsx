import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Who's Hungry",
  description: "A platform to find your next meal",
  icons: {
    icon: [
      // Prefer PNG for modern browsers
      { url: "/logo-icon.png", type: "image/png", sizes: "32x32" },
      { url: "/logo-icon.png", type: "image/png", sizes: "192x192" },
      // Optional fallback to .ico if later added to public/
      // { url: "/favicon.ico", type: "image/x-icon", rel: "icon" },
    ],
    shortcut: [
      { url: "/logo-icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo-icon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
