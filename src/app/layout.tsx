import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Footer, Header } from "components";
import ReduxProvider from "providers/redux-provider";
import ToastProvider from "@providers/toast-provider";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/global.css';

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] }); // Specify weights if needed

export const metadata: Metadata = {
  title: "Appliance Repair – Same Day Service - Local Pros | UltraFix™",
  description: "Ultrafix™ Provides Fast, Reliable Appliance Repair Services. Get Same-Day Repairs for All Major Brands. Satisfaction Guaranteed—call Now!",
  keywords: [
    'Appliance Repair',
    'Local Appliance Repair',
    'Emergency Appliance Repair',
    'Same Day Appliance Repair',
    'Affordable Appliance Repair',
    'Certified Appliance Technicians',
    'Refrigerator Repair Houston',
    'Dishwasher Repair Houston',
    'Oven and Stove Repair',
    'Microwave Repair',
    'Freezer and Ice Maker Repair',
    'Garbage Disposal Repair',
    'Washer and Dryer Repair',
    'Major Appliance Repair',
    'Residential Appliance Repair',
    'Commercial Appliance Repair',
    'Houston Appliance Service',
    'Best Appliance Repair in',
    'Nearby Appliance Repair',
  ],
  openGraph: {
    type: 'website',
    title: 'UltraFix Appliance Repair LLC',
    description: "Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service. Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values.",
    url: `https://ultrafix.com/`,
    images: [
      {
        width: 800,
        height: 600,
        alt: 'UltraFix Appliance Repair',
        url: `https://ultrafix.com/_next/image?url=%2Fassets%2Fmock_images%2Fabout_us_media.png&w=1920&q=75`,
      },
    ],
    locale: 'en_US',
    siteName: 'UltraFix Appliance Repair',
  },
  twitter: {
    title: 'UltraFix Appliance Repair LLC',
    card: 'summary_large_image',
    description: "Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service. Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values.",
    images: [`https://ultrafix.com/_next/image?url=%2Fassets%2Fmock_images%2Fabout_us_media.png&w=1920&q=75`],
  },
  alternates: {
    canonical: `https://ultrafix.com/`,
  },
};

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