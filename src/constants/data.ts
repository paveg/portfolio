import { File, Folder } from "lucide-react"
import type { Project, Section } from "@/types/index"

export const sections: Section[] = [
  { id: "about", name: "about.md", icon: File },
  { id: "skills", name: "skills.json", icon: File },
  { id: "projects", name: "projects/", icon: Folder },
  { id: "contact", name: "contact.sh", icon: File },
]

export const projects: Project[] = [
  {
    name: "HR Application & Employee Portal",
    tech: [
      "Go",
      "gRPC",
      "Rails",
      "TanStack Query",
      "Kubernetes",
      "React",
      "TypeScript",
    ],
    description:
      "Led team of 3 engineers developing comprehensive employee portal within 4 months. Designed from scratch to consolidate information and features from various services, enhancing user experience through refined, intuitive functionality.",
    github: "#",
    demo: "https://ep.secure.freee.co.jp",
  },
  {
    name: "人事労務統合基盤 (HR Integration Platform)",
    tech: ["Go", "gRPC", "Ruby", "Rails", "TypeScript", "MySQL"],
    description:
      "Developed integrated HR platform infrastructure to unify various HR and labor management services, enabling seamless data flow and improved operational efficiency.",
    github: "#",
    demo: "#",
  },
  {
    name: "Technical Debt Migration & Advisor Clients Management",
    tech: [
      "Go",
      "Rails",
      "Ruby",
      "Kubernetes",
      "React",
      "TypeScript",
      "MySQL",
      "Docker",
    ],
    description:
      "Managed global team of 4 engineers. Successfully executed technical debt migration by integrating and transferring legacy data models to updated architecture. Scaled service to support 500+ tax accountants.",
    github: "#",
    demo: "#",
  },
  {
    name: "freeeデータ化サービス (d12n)",
    tech: [
      "Rails",
      "Ruby",
      "AWS",
      "Kubernetes",
      "Docker",
      "React",
      "TypeScript",
      "MySQL",
    ],
    description:
      "As Technical Lead, spearheaded launch focusing on streamlining file upload and export processes to enhance receipt registration workflows. Collaborated with cross-functional teams for high-quality delivery.",
    github: "#",
    demo: "https://d12n.secure.freee.co.jp",
  },
  {
    name: "freee資金調達 (Financial Services Platform)",
    tech: [
      "Rails",
      "Ruby",
      "Go",
      "AWS",
      "Kubernetes",
      "Docker",
      "React",
      "MySQL",
      "TypeScript",
    ],
    description:
      "Earlier role: Pioneered financial services from 0 to 1, led entire development lifecycle as Technical Lead. Managed both launch and service discontinuation.",
    github: "#",
    demo: "https://funding.ffl.secure.freee.co.jp/public",
  },
]

export const skillsData = {
  programming_languages: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Go",
    "Ruby",
    "Python",
    "ShellScript",
  ],
  frameworks: ["Ruby on Rails", "React.js", "Next.js", "Gin"],
  databases: ["MySQL", "PostgreSQL", "Amazon Aurora", "DynamoDB"],
  middlewares_and_tools: [
    "AWS",
    "Redis",
    "Nginx",
    "Docker",
    "Kubernetes (Amazon EKS)",
    "DataDog",
    "ArgoCD",
  ],
}
