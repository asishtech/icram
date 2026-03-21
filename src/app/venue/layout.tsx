import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Venue',
  description: 'VIT-AP University, Amaravati, Andhra Pradesh, India. Learn about the venue location, how to reach, and explore tourist attractions in Vijayawada.',
  openGraph: {
    title: 'Venue | ICRAM 2026',
    description: 'VIT-AP University, Amaravati, Andhra Pradesh, India. Learn about the venue and tourist attractions',
  },
}

export default function VenueLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
