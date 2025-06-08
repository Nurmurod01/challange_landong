import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Noto_Sans({
  variable: "--font-geist-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "10 kunlik Suniy Intellekt bilan Shaxsiy Brending ",
  description:
    "Suniy Intellekt yordamida shaxsiy brendingizni qanday yaratish va rivojlantirish mumkinligini o'rganing. 10 kunlik bepul kursimizda AI yordamida kontent yaratish, marketing strategiyalari va brendni monetizatsiya qilish sirlari bilan tanishing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}  antialiased`}>{children}</body>
    </html>
  );
}
