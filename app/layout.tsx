import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "한지쌤 - 수학 × 코딩 = 가능성",
  description: "수학과 코딩의 만남으로 학생들에게 '두근두근' 설렘을 선물합니다.",
  openGraph: {
    title: "한지쌤 - 수학 × 코딩 = 가능성",
    description: "수학과 코딩의 만남으로 학생들에게 '두근두근' 설렘을 선물합니다.",
    url: "https://hanjiteacher.com",
    siteName: "한지쌤",
    locale: "ko_KR",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
