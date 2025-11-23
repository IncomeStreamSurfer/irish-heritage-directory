import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Irish Heritage Directory - Discover Ireland's Historic Sites",
  description: "Explore Ireland's rich heritage with our comprehensive directory of castles, monasteries, ancient monuments, and UNESCO World Heritage sites.",
  keywords: "Irish heritage, Ireland castles, Irish history, heritage sites Ireland, UNESCO Ireland, Irish monasteries",
  openGraph: {
    title: "Irish Heritage Directory",
    description: "Explore Ireland's rich heritage with our comprehensive directory of historic sites",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background-light dark:bg-background-dark font-display antialiased">
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
          <div className="flex h-full grow flex-col">
            <div className="flex flex-1 justify-center">
              <div className="flex flex-col max-w-[1200px] flex-1 w-full">
                <Header />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
