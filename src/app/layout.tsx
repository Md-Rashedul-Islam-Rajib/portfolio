import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const exo_2 = Exo_2({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Rashedul Islam",
  description: "Personal portfolio of Rashedul Islam",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-black text-white dark:bg-white dark:text-gray-900",
          exo_2.className
        )}
      >
        <Navbar />
        <main className="min-h-screen pt-16 px-4 max-w-7xl mx-auto">
          {children}
        </main>
        <Toaster richColors />
      </body>
    </html>
  );
}