import type { Metadata } from "next";
import { Providers } from "@/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "PESCO",
  description: "A modern website for Industrial Engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Chatbot />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
