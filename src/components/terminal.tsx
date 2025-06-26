import {
  ChevronRightIcon,
  Cross2Icon,
  EnvelopeClosedIcon,
  RocketIcon,
} from "@radix-ui/react-icons"
import {
  ExternalLink,
  File,
  Folder,
  Github,
  Minimize2,
  Square,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const sections = [
  { id: "about", name: "about.md", icon: File },
  { id: "skills", name: "skills.json", icon: File },
  { id: "projects", name: "projects/", icon: Folder },
  { id: "contact", name: "contact.sh", icon: File },
]

const projects = [
  {
    name: "E-commerce Platform",
    tech: ["React", "Node.js", "MongoDB"],
    description: "Full-stack e-commerce solution with payment integration",
    github: "#",
    demo: "#",
  },
  {
    name: "Task Management App",
    tech: ["Next.js", "TypeScript", "Prisma"],
    description: "Collaborative task management with real-time updates",
    github: "#",
    demo: "#",
  },
  {
    name: "Weather Dashboard",
    tech: ["Vue.js", "Express", "PostgreSQL"],
    description: "Weather monitoring dashboard with data visualization",
    github: "#",
    demo: "#",
  },
]

export default function Component() {
  const [activeSection, setActiveSection] = useState("about")
  const [typedText, setTypedText] = useState("")
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const text = "Welcome to my portfolio terminal..."
    let index = 0
    const typeTimer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeTimer)
      }
    }, 100)
    return () => clearInterval(typeTimer)
  }, [])

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-400">
              <span className="text-gray-400">$</span>
              <span>cat about.md</span>
            </div>
            <div className="pl-4 space-y-3 text-gray-300">
              <h2 className="text-xl font-bold text-blue-400"># About Me</h2>
              <p>
                Hello! I'm a passionate full-stack developer with 5+ years of
                experience building modern web applications. I love creating
                efficient, scalable solutions and exploring new technologies.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open source
                projects, writing technical blogs, or exploring the latest in
                web development.
              </p>
              <div className="mt-4">
                <span className="text-yellow-400">## Current Focus</span>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>React & Next.js ecosystem</li>
                  <li>TypeScript & Node.js</li>
                  <li>Cloud architecture & DevOps</li>
                </ul>
              </div>
            </div>
          </div>
        )
      case "skills":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-400">
              <span className="text-gray-400">$</span>
              <span>cat skills.json</span>
            </div>
            <div className="pl-4 font-mono text-sm">
              <pre className="text-gray-300">
                {`{
  "languages": [
    "JavaScript",
    "TypeScript", 
    "Python",
    "Go"
  ],
  "frontend": [
    "React",
    "Next.js",
    "Vue.js",
    "Tailwind CSS"
  ],
  "backend": [
    "Node.js",
    "Express",
    "FastAPI",
    "PostgreSQL"
  ],
  "tools": [
    "Docker",
    "AWS",
    "Git",
    "Vercel"
  ]
}`}
              </pre>
            </div>
          </div>
        )
      case "projects":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-400">
              <span className="text-gray-400">$</span>
              <span>ls -la projects/</span>
            </div>
            <div className="pl-4 space-y-4">
              {projects.map((project) => (
                <Card
                  key={project.name}
                  className="bg-gray-800 border-gray-700 p-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-blue-400">
                        {project.name}
                      </h3>
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-gray-700 text-yellow-400 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )
      case "contact":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-400">
              <span className="text-gray-400">$</span>
              <span>./contact.sh</span>
            </div>
            <div className="pl-4 space-y-4 text-gray-300">
              <div className="space-y-2">
                <p className="text-yellow-400"># Let's connect!</p>
                <p>
                  Feel free to reach out for collaborations or just to say
                  hello.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <EnvelopeClosedIcon className="w-5 h-5 text-blue-400" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-blue-400" />
                  <span>github.com/johndoe</span>
                </div>
              </div>
              <div className="mt-6 p-3 bg-gray-800 rounded border border-gray-700">
                <p className="text-green-400 text-sm">
                  ✓ Contact script executed successfully
                </p>
                <p className="text-gray-400 text-sm">
                  Ready to receive your message...
                </p>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100 font-mono">
      {/* Terminal Header */}
      <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <RocketIcon className="w-4 h-4" />
              <span className="text-sm">portfolio@terminal:~</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="p-1 h-auto">
              <Minimize2 className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="p-1 h-auto">
              <Square className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="p-1 h-auto">
              <Cross2Icon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-60px)]">
        {/* Left Pane - File Explorer */}
        <div className="w-80 bg-[#161b22] border-r border-[#30363d] p-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Folder className="w-4 h-4" />
              <span>portfolio/</span>
            </div>
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <button
                  type="button"
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-2 px-2 py-1 rounded text-sm transition-colors ${
                    activeSection === section.id
                      ? "bg-[#1f6feb] text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{section.name}</span>
                  {section.id === "projects" && (
                    <ChevronRightIcon className="w-3 h-3 ml-auto" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Pane - Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl">
            {/* Welcome Message */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <span className="text-gray-400">$</span>
                <span>{typedText}</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>

            {/* Content */}
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-[#161b22] border-t border-[#30363d] px-4 py-2 text-xs text-gray-400">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>Ready</span>
            <span>UTF-8</span>
            <span>TypeScript</span>
          </div>
          <div className="flex items-center gap-4">
            <span>{currentTime.toLocaleTimeString()}</span>
            <span>Ln 1, Col 1</span>
          </div>
        </div>
      </div>
    </div>
  )
}
