import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/lib/i18n/context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Reelms",
  description: "tung tung sahur",
  icons: {
    icon: [
      { url: "." },
      { url: "." },
      { url: "." },
    ],
    apple: ".",
  },
}

export const viewport: Viewport = {
  themeColor: "#0b0b0f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <main className="flex-1">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}
