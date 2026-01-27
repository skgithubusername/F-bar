import './globals.css'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'F-bar - Premium Restaurant & Bar in Gurugram | Fine Dining Experience',
    template: '%s | F-bar Gurugram'
  },
  description: 'Experience premium dining at F-bar in Gurugram. Discover our curated menu, book events, and enjoy the best nightlife with cocktails, food, and entertainment.',
  keywords: ['F-bar', 'restaurant Gurugram', 'fine dining', 'cocktails', 'nightlife', 'events', 'menu', 'food delivery', 'bar'],
  authors: [{ name: 'F-bar Gurugram' }],
  creator: 'F-bar',
  publisher: 'F-bar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://f-bar-gurugram.com'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'F-bar - Premium Restaurant & Bar in Gurugram',
    description: 'Experience premium dining at F-bar in Gurugram. Discover our curated menu, book events, and enjoy the best nightlife with cocktails, food, and entertainment.',
    url: 'https://f-bar-gurugram.com',
    siteName: 'F-bar Gurugram',
    images: [
      {
        url: '/img/og-image.jpg', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'F-bar Restaurant & Bar in Gurugram',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'F-bar - Premium Restaurant & Bar in Gurugram',
    description: 'Experience premium dining at F-bar in Gurugram. Discover our curated menu, book events, and enjoy the best nightlife with cocktails, food, and entertainment.',
    images: ['/img/og-image.jpg'], // Add your Twitter image
    creator: '@fbar_gurugram', // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={lexend.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="application-name" content="F-bar" />
        <meta name="apple-mobile-web-app-title" content="F-bar" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="font-lexend bg-gray-100">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "F-bar",
              "image": "https://f-bar-gurugram.com/img/toplogo.png",
              "telephone": "+91-XXXXXXXXXX", // Add your phone number
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "OLP Phase 3",
                "addressLocality": "Gurugram",
                "postalCode": "122001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.4595, // Add actual coordinates
                "longitude": 77.0266
              },
              "url": "https://f-bar-gurugram.com",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "12:00",
                  "closes": "01:00"
                }
              ],
              "servesCuisine": ["Indian", "Continental", "Fusion"],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.1",
                "reviewCount": "03"
              }
            })
          }}
        />
      </body>
    </html>
  )
}