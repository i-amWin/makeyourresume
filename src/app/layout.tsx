import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import NextJSTopLoader from "nextjs-toploader";
import { StoreProvider } from "@/redux/store-provider";

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={`${montserrat.className} relative`}>
        <NextJSTopLoader color="#ffb300" showSpinner={false} />
        <Header />
        <main className="mx-auto max-w-[77.5rem] px-4">
          <StoreProvider>{children}</StoreProvider>
        </main>
      </body>
    </html>
  );
}
