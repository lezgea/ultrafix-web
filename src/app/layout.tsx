import { Inter, Poppins } from "next/font/google";
import { Footer, Header } from "components";
import ReduxProvider from "providers/redux-provider";
import ToastProvider from "@providers/toast-provider";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/global.css';

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] });


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
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ultrafix.com",
              "url": "https://www.ultrafix.com",
              "logo": "https://www.ultrafix.com/logo.png",
              "description": "Ultrafix.com provides professional appliance repair services across the United States, including washer repair, refrigerator repair, and more.",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "(888) 998-6263",
                  "contactType": "Customer Service",
                  "areaServed": "US",
                  "availableLanguage": "English",
                  "email": "info@ultrafixappliance.com"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "31602 Roldan Ln",
                "addressLocality": "Fulshear",
                "addressRegion": "TX",
                "postalCode": "77441",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://www.facebook.com/ultrafixappliance",
                "https://www.instagram.com/ultrafixappliancerepair/",
                "https://www.youtube.com/@ultrafixappliance",
                "https://www.linkedin.com/company/ultrafix-appliance-repair-llc/"
              ],
              "founder": {
                "@type": "Person",
                "name": "Aydin Amiraslanov"
              },
              "foundingDate": "2020-01-01",
              "areaServed": "US",
              "employee": [
                {
                  "@type": "Person",
                  "name": "Jane Smith",
                  "jobTitle": "Technician"
                }
              ]
            })
          }}
        />
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
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/671fe2ee2480f5b4f59544a1/1iba8st7i';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `}}></script>
      </body>
    </html>
  );
}
