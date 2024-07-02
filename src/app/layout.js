import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import MobileNavbar from "@/components/mobile/mobileNavbar/MobileNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Новости СПОАД",
  description: "Новостной сайт для СПОАД",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        <MobileNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
