import type { Metadata } from 'next'
import localFont from 'next/font/local'

const pretendard = localFont({
  src: [
    { path: '../../public/PretendardVariable.woff2', weight: '400', style: 'normal' },
    { path: '../../public/PretendardVariable.woff2', weight: '600', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: 'DEVELOG AI',
  description: 'AI로 개발 블로그 쉽게 작성하기!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className={`${pretendard.className}`}>{children}</body>
    </html>
  )
}
