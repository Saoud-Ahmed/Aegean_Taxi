//import TaxiSection from './components/TaxiLocationSection/TaxiLocationsSections';
//import TaxiInLocationSection from './components/TaxiSection/TaxiSection';
//import LandingPage from './components/LandingSection/LandingSection';
import BlogPage from "./pages/BlogPage/blog";
import Head from 'next/head'; // If using Next.js

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Head Section for JSON-LD */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Aegean Taxi",
              "url": "https://www.aegeantaxi.com",
              "logo": "https://www.aegeantaxi.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/aegeantaxi",
                "https://www.instagram.com/aegeantaxi",
                "https://twitter.com/aegeantaxi"
              ],
              "description": "The best taxi app and airport transfers in Greece. Reliable, quality, and affordable services in popular locations across Greece.",
              "foundingDate": "2015",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Greece"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.aegeantaxi.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://www.aegeantaxi.com/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Contact",
                  "item": "https://www.aegeantaxi.com/contact"
                }
              ]
            }),
          }}
        />
      </Head>

      {/* Main Sections */}
      <BlogPage/>




      {/* <LandingPage />
      <TaxiSection />
      <TaxiInLocationSection /> */}
    </main>
  );
}
