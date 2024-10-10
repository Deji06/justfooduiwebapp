import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "FOOD WEB APP",
  description: "replicating a food webpage gotten from a figma file online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Navbar/>
        <div className="border border-[#f3f3f3] mt-3"></div>
        <main className="pb-2 py-2">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
