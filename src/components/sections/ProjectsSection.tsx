import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { projects } from "@/constants/data"

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <h1 className="sr-only">Projects</h1>
      <div className="flex items-center gap-2 text-green-400">
        <span className="text-gray-400">$</span>
        <span>ls -la projects/</span>
      </div>
      <ul className="pl-4 space-y-4" aria-label="Project list">
        {projects.map((project) => (
          <li key={project.name}>
            <Card className="bg-gray-800 border-gray-700 p-4 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-900">
              <article className="space-y-3">
                <header className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-blue-400">
                    {project.name}
                  </h2>
                  <div className="flex gap-2">
                    {project.github && project.github !== "#" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                        onClick={() =>
                          window.open(
                            project.github,
                            "_blank",
                            "noopener,noreferrer",
                          )
                        }
                        aria-label={`View source code for ${project.name}`}
                      >
                        <Github className="w-4 h-4 mr-1" aria-hidden="true" />
                        Code
                      </Button>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                        onClick={() =>
                          window.open(
                            project.demo,
                            "_blank",
                            "noopener,noreferrer",
                          )
                        }
                        aria-label={`View live demo of ${project.name}`}
                      >
                        <ExternalLink
                          className="w-4 h-4 mr-1"
                          aria-hidden="true"
                        />
                        Demo
                      </Button>
                    )}
                  </div>
                </header>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs bg-gray-700 text-yellow-400 rounded-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
