import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Call for Papers',
  description: 'Submit your research papers to ICRAM 2026. Topics include nanomaterials, energy materials, biomaterials, computational materials, and more. Important dates and submission guidelines.',
  openGraph: {
    title: 'Call for Papers | ICRAM 2026',
    description: 'Submit your research papers to ICRAM 2026. Topics include nanomaterials, energy materials, biomaterials, and more',
  },
}

export default function CallForPapersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
