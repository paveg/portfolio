import type React from "react"

export interface Project {
  name: string
  tech: string[]
  description: string
  github: string
  demo: string
}

export interface Section {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
}

export type SectionId = "about" | "skills" | "projects" | "contact"
