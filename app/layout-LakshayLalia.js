import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NITH CSE Website",
  description:
    "Welcome to the Computer Science and Engineering Department of NIT Hamirpur (NITH CSE). Discover CSE@NITH, find faculty details, student information, academic programs, research opportunities, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}