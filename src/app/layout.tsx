import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Blob from "@/components/ui/blob";
// import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Make Your Resume",
  description: "Make your resume in seconds with our free resume builder.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        {/* <Blob /> */}
        {/* <NextTopLoader color="#FC5130" showSpinner={false} /> */}
        <div className="bg-overlay" />
        <Header />
        <main className="max-w-screen-lg mx-auto px-4">{children}</main>
        {/* <footer>This is Footer</footer> */}
      </body>
    </html>
  );
}