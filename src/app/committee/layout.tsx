import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Committee',
  description: 'Meet the organizing committee, patrons, convenors, and advisory board members of ICRAM 2026. Distinguished researchers and academicians from institutions worldwide.',
  openGraph: {
    title: 'Committee | ICRAM 2026',
    description: 'Meet the organizing committee, patrons, convenors, and advisory board members of ICRAM 2026',
  },
}

export default function CommitteeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
