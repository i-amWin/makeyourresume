import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NextJSTopLoader from "nextjs-toploader";

import "./globals.css";

import Header from "@/components/header";
import { StoreProvider } from "@/redux/store-provider";
import { Bounce, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { FetchUser } from "@/components/fetchUser";

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
        <StoreProvider>
          <FetchUser>
            <NextJSTopLoader color="#ffb300" showSpinner={false} />
            <Header />
            <main className="mx-auto max-w-[77.5rem] px-4">
              {children}
              <ToastContainer
                autoClose={3000}
                theme="colored"
                transition={Bounce}
              />
            </main>
          </FetchUser>
        </StoreProvider>
      </body>
    </html>
  );
}
