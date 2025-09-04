import { NextSeo } from 'next-seo';

const config = {
  titleTemplate: '%s | Leading Pan-India Cargo & Logistics Services - Quora Cargo',
  defaultTitle: 'Premier Cargo & Logistics Services Across India | Fast & Reliable Delivery',
  description: 'Nationwide cargo & logistics services with 100+ vehicles. Trusted by 1000+ businesses across India for express delivery, warehousing & e-commerce logistics. Pan-India network, best rates.',
  canonical: 'https://www.quoracargo.com',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.quoracargo.com',
    siteName: 'Quora Cargo & Logistics LLP',
    title: 'Best Cargo Services in Gujarat | Trusted by 1000+ Businesses',
    description: 'Leading cargo company in Gujarat. 100+ vehicles, 50+ years experience. Specializing in express delivery, warehousing & e-commerce logistics. Get best rates today!',
    images: [
      {
        url: 'https://www.quoracargo.com/public/image/img1.png',
        width: 1200,
        height: 630,
        alt: 'Quora Cargo Services in Gujarat',
      }
    ]
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'cargo services gujarat, cargo company surat, logistics company gujarat, transport services surat, warehousing gujarat, e-commerce logistics surat, express cargo gujarat, same day delivery surat, cargo near me, best cargo service'
    },
    {
      name: 'author',
      content: 'Quora Cargo & Logistics LLP'
    },
    {
      name: 'geo.region',
      content: 'IN-GJ'
    },
    {
      name: 'geo.placename',
      content: 'Surat, Gujarat'
    },
    {
      property: 'og:phone_number',
      content: '+91-XXXXXXXXXX'
    }
  ],
  twitter: {
    handle: '@QuoraCargo',
    site: '@QuoraCargo',
    cardType: 'summary_large_image',
  }
};

export default config;
