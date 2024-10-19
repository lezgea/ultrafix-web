import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Footer, Header } from "components";
import ReduxProvider from "providers/redux-provider";
import ToastProvider from "@providers/toast-provider";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/global.css';

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] }); // Specify weights if needed


export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug?: string };
}) {

  return (
    <html lang="en">
      <head>
        {/* Link to the favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/img/houston_car.webp" as="image" />
      </head>
      <body className={`${inter.className} ${poppins.className}`}>
        <ReduxProvider>
          <ToastProvider>
            <Header />
            <div className="min-h-screen">
              {children}
            </div>
            <Footer />
          </ToastProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}