import React from 'react';
import { Inter, Poppins } from "next/font/google";
import { Footer, Header } from "components";
import ReduxProvider from "providers/redux-provider";
import ToastProvider from "@providers/toast-provider";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/global.css';
import { FAQ_LIST } from "constants/faq";
import { SCHEMA_IMAGES, SCHEMA_SERVICES } from "constants/schemas";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] });


export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {

  return (
    <html lang="en">
      <head>
        {/* Global site tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16752527414"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16752527414');
            `,
          }}
        />

        {/* Conversion tracking script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-16752527414/04JgCNu4woIaELaQnbQ-',
                  'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />

        {/* Link to the favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preload" href="/img/houston_car.webp" as="image" /> */}

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

        {/* JSON-LD Schema Markup for Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Appliance Repair",
              "provider": {
                "@type": "Organization",
                "name": "UltraFix Appliance Repair",
                "url": "https://ultrafix.com"
              },
              "description": "Professional appliance repair services, including washer repair, refrigerator repair, and more.",
              "offers": [
                ...SCHEMA_SERVICES.map(item => ({
                  "@type": "Offer",
                  "url": item.url,
                  "name": item.name,
                  "eligibleRegion": {
                    "@type": "Place",
                    "name": "United States"
                  },
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2024-11-13"
                }))
              ],
              "areaServed": {
                "@type": "Place",
                "name": "United States"
              },
              "category": [
                ...SCHEMA_SERVICES.map(item => item.name)
              ]
            })
          }}
        />

        {/* JSON-LD Schema Markup for Places */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              "name": "UltraFix Appliance Repair Location",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "31602 Roldan Ln",
                "addressLocality": "Fulshear",
                "addressRegion": "TX",
                "postalCode": "77441",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.6351,
                "longitude": -95.8100
              },
              "description": "UltraFix Appliance Repair main service location in Fulshear, TX. Providing quality appliance repair services."
            })
          }}
        />

        {/* JSON-LD Schema Markup for Reviews */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "UltraFix Appliance Repair LLC",
              "url": "https://ultrafix.com",
              "image": "https://ultrafix.com/svg/logo.svg",
              "telephone": "+1-888-998-6263",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1718 N Fry Rd #152",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77084",
                "addressCountry": "US"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "2691"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Michael Lockovich"
                  },
                  "datePublished": "2025-01-10",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "My Samsung Washers drain pump went bad! Elmir was very efficient and professional, same day service, very punctual and had the replacement part on his truck. Priced very reasonable also!! I’ll be using these folks again!!"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Troy Connor"
                  },
                  "datePublished": "2025-02-01",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "The company stood behind a difficult dishwasher repair. They sent Elmir out twice to troubleshoot the problems. They ended up needed to replace the motherboard and control panel again, but thy did it and the dishwasher works now"
                }
              ]
            })
          }}
        />

        {/* AggregateRating Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2549",
              "bestRating": "5",
              "worstRating": "1",
              "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "UltraFix® Appliance Repair Service",
                "url": "https://ultrafix.com"
              }
            }),
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KLKNJZX6');
            `,
          }}
        />

      </head>
      <body className={`${poppins.className}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KLKNJZX6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
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
