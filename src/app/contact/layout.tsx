import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact ICRAM 2026 organizing committee. Get in touch for queries, sponsorship opportunities, and general information about the conference.',
  openGraph: {
    title: 'Contact | ICRAM 2026',
    description: 'Contact ICRAM 2026 organizing committee for queries and information',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
