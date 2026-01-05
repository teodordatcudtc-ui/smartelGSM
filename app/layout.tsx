import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Smartel GSM - Service Telefoane București | Reparații iPhone & Samsung',
  description: 'Service GSM profesional în București, Crângași. Reparații telefoane, schimb display, schimb baterie, deblocări și recuperare date. Experiență și profesionalism garantat.',
  keywords: 'service gsm, reparatii telefoane, service telefoane bucuresti, service gsm crangasi, reparatii iphone, reparatii samsung, schimb display telefon, schimb baterie telefon',
  authors: [{ name: 'Smartel GSM' }],
  openGraph: {
    title: 'Smartel GSM - Service Telefoane București',
    description: 'Service GSM profesional în București, Crângași. Reparații telefoane, schimb display, schimb baterie.',
    type: 'website',
    locale: 'ro_RO',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="canonical" href="https://smartelgsm.ro" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Smartel GSM',
              description: 'Service GSM profesional pentru reparații telefoane în București, Crângași',
              url: 'https://smartelgsm.ro',
              telephone: '+40771145335',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Munții Apuseni 13, Calea Crângași 29, Spațiul comercial 2',
                addressLocality: 'București',
                postalCode: '060334',
                addressCountry: 'RO',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 44.45259020036297,
                longitude: 26.046732676661986,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '19:00',
              },
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

