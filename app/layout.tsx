import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NavAside from "@/components/Layout/nav-aside";
import NavHeader from "@/components/Layout/nav-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victron Manager Products",
  description: "Application de management des produits Victron.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className={inter.className + " bg-[#f5f5f5] dark:bg-gray-900"}>
        <div className="flex min-h-screen w-full flex-col bg-muted/40 dark:bg-gray-800">
          <NavAside />
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <NavHeader />
            {children}
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
