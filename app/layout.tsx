import { Navbar, ThemeButton, TypingText } from '@/components'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Provider } from '@/components/ThemeProvider'
import { ServerThemeProvider } from "next-themes";
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fatur Nangin',
  description: 'Nangins personal website',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en">
      {/* <body className={`${inter.className} bg-white dark:bg-[url('/bg-element.svg')] transition-colors duration-1000 ease-in-out`}> */}
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors duration-1000 ease-in-out`}>
        <Provider>
        <Navbar/>
        {children}
        </Provider>
      </body>
    </html>
    </ServerThemeProvider>
  )
}
