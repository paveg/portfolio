import "@/styles/globals.css"
import { Metadata } from "next"
import { QueryClient, dehydrate } from "@tanstack/react-query"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { fetchLanguageData } from "@/hooks/useLanguageData"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { ContextContainer } from "./context-container"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

const getInitialData = async () => {
  const client = new QueryClient()
  await client.prefetchQuery({
    queryKey: ["skill/languages"],
    queryFn: () => fetchLanguageData(),
  })

  return dehydrate(client)
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const state = await getInitialData()
  return (
    <html lang="ja" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ContextContainer state={state}>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
          </ContextContainer>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
