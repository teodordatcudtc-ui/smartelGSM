import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Smartel GSM | Service Telefoane București',
  description: 'Contactează Smartel GSM pentru reparații telefoane. Telefon: 0771145335. Locație: Calea Crângași 29, București. Program: Luni-Sâmbătă 09:00-19:00.',
  keywords: 'contact smartel gsm, service gsm bucuresti contact, reparatii telefoane crangasi, service gsm crangasi contact',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

