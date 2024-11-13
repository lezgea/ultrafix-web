import { Inter, Poppins } from "next/font/google";
import { Footer, Header } from "components";
import ReduxProvider from "providers/redux-provider";
import ToastProvider from "@providers/toast-provider";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/global.css';
import { FAQ_LIST } from "constants/faq";
import { SCHEMA_IMAGES } from "constants/schemas";

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
        {/* JSON-LD Schema Markup for Organization */}
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

        {/* JSON-LD Schema Markup for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "UltraFix Appliance Repair",
              "image": "https://ultrafix.com/logo.png",
              "url": "https://ultrafix.com",
              "telephone": "+1(888) 998-6263",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "31602 Roldan Ln",
                "addressLocality": "Fulshear",
                "addressRegion": "TX",
                "postalCode": "77441",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://www.facebook.com/UltraFixApplianceRepair",
                "https://twitter.com/ultrafix",
                "https://www.linkedin.com/company/ultrafix-appliance-repair",
                "https://www.instagram.com/ultrafixappliances"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1(888) 998-6263",
                "contactType": "Customer Service",
                "areaServed": "US",
                "availableLanguage": "English"
              },
              "openingHours": "Mo-Su 09:00-18:00",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.6351,
                "longitude": -95.8100
              },
              "priceRange": "$$",
              "description": "UltraFix Appliance Repair provides high-quality appliance repair services in Fulshear, TX, with experienced technicians ready to fix your home appliances quickly and affordably."
            })
          }}
        />

        {/* JSON-LD Schema Markup for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                ...FAQ_LIST.map(item => ({
                  "@type": "Question",
                  "name": item.title,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.value
                  }
                }))
              ]
            })
          }}
        />

        {/* JSON-LD Schema Markup for Images */}
        {
          SCHEMA_IMAGES.map(item => (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "ImageObject",
                  "contentUrl": item.url,
                  "name": item.name,
                  "description": item.description
                })
              }}
            />
          ))
        }
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
        {/* <script type="text/javascript" dangerouslySetInnerHTML={{
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
        `}}></script> */}
      </body>
    </html>
  );
}
