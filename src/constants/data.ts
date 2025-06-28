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
    name: "HR Integration Platform",
    period: "2025/01 - Present",
    role: "Engineering Manager → Technical Lead",
    tech: ["Go", "gRPC", "Ruby", "Rails", "TypeScript", "MySQL"],
    description:
      "Developing integrated HR platform infrastructure to unify various HR and labor management services. Transitioned from Engineering Manager (Jan-Jun) to Technical Lead (Jul-present), focusing on pure technical management without people management.",
    github: "#",
    demo: "#",
  },
  {
    name: "HR Application & Employee Portal",
    period: "2024/01 - 2024/12",
    role: "Engineering Manager / Tech Lead",
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
      "Led team of 3 engineers developing comprehensive employee portal within 4 months. Balanced hands-on technical contributions with team management responsibilities, designed system architecture from scratch to consolidate information and features from various services.",
    github: "#",
    demo: "https://ep.secure.freee.co.jp",
  },
  {
    name: "Technical Debt Migration & Advisor Clients Management",
    period: "2023/05 - 2024/01",
    role: "Engineering Manager / Tech Lead",
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
      "Managed global team of 4 engineers while maintaining significant hands-on technical contributions. Successfully executed technical debt migration by integrating and transferring legacy data models to updated architecture. Scaled service to support 500+ tax accountants.",
    github: "#",
    demo: "https://advisor-clients.secure.freee.co.jp",
  },
  {
    name: "Data Processing Service (d12n)",
    period: "2022/08 - 2023/05",
    role: "Technical Lead",
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
    name: "Project Management Platform",
    period: "2022/06 - 2022/09",
    role: "Software Engineer",
    tech: ["Rails", "Ruby", "React", "TypeScript", "MySQL", "AWS"],
    description:
      "Contributed to performance optimization and system improvements for project management platform, enabling efficient resource tracking across the organization.",
    github: "#",
    demo: "#",
  },
  {
    name: "Financial Services Platform",
    period: "2020/01 - 2022/09",
    role: "Technical Lead",
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
      "Pioneered financial services from 0 to 1, led entire development lifecycle as Technical Lead from initial concept through launch and service management.",
    github: "#",
    demo: "https://funding.ffl.secure.freee.co.jp/public",
  },
  {
    name: "Lending Platform",
    period: "2019/04 - 2022/09",
    role: "Software Engineer → Technical Lead",
    tech: ["Ruby", "Rails", "Go", "AWS", "MySQL", "React", "TypeScript"],
    description:
      "Developed lending platform leveraging freee's financial and transaction data for streamlined credit assessment. Implemented credit scoring logic and managed service lifecycle through to closure.",
    github: "#",
    demo: "#",
  },
  {
    name: "Banking API Integration",
    period: "2017/07 - 2019/04",
    role: "Project Manager",
    tech: ["Ruby", "Rails", "AWS", "MySQL"],
    description:
      "Managed team of 3-4 contractors implementing API integrations with multiple banks and JCB card services. Delivered all projects on schedule.",
    github: "#",
    demo: "#",
  },
  {
    name: "Rails/Ruby Upgrade & Migration (acall inc.)",
    period: "2018/08 - 2019/04",
    role: "Contract Software Engineer",
    tech: ["Ruby", "Rails", "ActiveStorage", "AWS"],
    description:
      "Assisted with Rails/Ruby version upgrades and migration from Paperclip to ActiveStorage. Worked as a contractor to modernize the application infrastructure.",
    github: "#",
    demo: "#",
  },
  {
    name: "Data Aggregation & Re-architecture",
    period: "2015/11 - 2019/04",
    role: "Software Engineer",
    tech: [
      "Ruby",
      "JavaScript",
      "Rails",
      "AWS",
      "MySQL",
      "CoffeeScript",
      "Selenium WebDriver",
      "Go",
      "gRPC",
      "Docker",
      "Kubernetes",
    ],
    description:
      "Developed secure data aggregation service for financial institutions. Led re-architecture initiative implementing layered architecture with Go, reducing user inquiries by 30% through improved UX.",
    github: "#",
    demo: "#",
  },
  {
    name: "Network Infrastructure Migration",
    period: "2015/04 - 2015/10",
    role: "Network Engineer",
    tech: ["AWS", "Network", "Linux"],
    description:
      "Migrated on-premise network infrastructure to AWS cloud. Obtained CCNA and LPIC certifications during this period.",
    github: "#",
    demo: "#",
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
    "gRPC",
    "Selenium WebDriver",
  ],
}
