export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Portfolio",
  description:
    "A simple portfolio site built with Next.js and TypeScript feat shadcn/ui.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/paveg_",
    github: "https://github.com/paveg/portfolio",
  },
}
