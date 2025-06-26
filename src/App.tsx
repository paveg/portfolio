import { useEffect, useState } from "react"
import { FileExplorer } from "@/components/FileExplorer"
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts"
import { StatusBar } from "@/components/StatusBar"
import { AboutSection } from "@/components/sections/AboutSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { TerminalHeader } from "@/components/TerminalHeader"
import type { SectionId } from "@/types"

function TerminalComponent() {
  const [activeSection, setActiveSection] = useState<SectionId>("about")
  const [typedText, setTypedText] = useState("")
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey) {
        const sectionKeys: Record<string, SectionId> = {
          "1": "about",
          "2": "skills",
          "3": "projects",
          "4": "contact",
        }

        if (sectionKeys[event.key]) {
          event.preventDefault()
          setActiveSection(sectionKeys[event.key])
        }
      }

      // ESC to close mobile menu
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isMobileMenuOpen])

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
        return <AboutSection />
      case "skills":
        return <SkillsSection />
      case "projects":
        return <ProjectsSection />
      case "contact":
        return <ContactSection />
      default:
        return null
    }
  }

  return (
    <div className="h-screen bg-[#0d1117] text-gray-100 font-mono flex flex-col">
      <TerminalHeader
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <div className="flex flex-1 relative">
        <FileExplorer
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(false)}
        />

        <main
          className="flex-1 p-4 lg:p-6 overflow-auto"
          aria-label="Portfolio content"
        >
          <div className="max-w-4xl">
            <div className="mb-8" aria-live="polite">
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <span className="text-gray-400">$</span>
                <span>{typedText}</span>
                <span className="animate-pulse" aria-hidden="true">
                  |
                </span>
              </div>
            </div>

            <section aria-label={`${activeSection} section`}>
              {renderContent()}
            </section>
          </div>
        </main>
      </div>

      <StatusBar currentTime={currentTime} activeSection={activeSection} />
      <KeyboardShortcuts />
    </div>
  )
}

export default function App() {
  return <TerminalComponent />
}
