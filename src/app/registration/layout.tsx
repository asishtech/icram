import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registration',
  description: 'Register for ICRAM 2026. View registration fees for students, academicians, and international delegates. Both online and offline participation options available.',
  openGraph: {
    title: 'Registration | ICRAM 2026',
    description: 'Register for ICRAM 2026. View registration fees and submission guidelines',
  },
}

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
