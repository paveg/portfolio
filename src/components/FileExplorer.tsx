import { ChevronRightIcon } from "@radix-ui/react-icons"
import { Folder } from "lucide-react"
import { sections } from "@/constants/data"
import type { SectionId } from "@/types"

interface FileExplorerProps {
  activeSection: SectionId
  onSectionChange: (sectionId: SectionId) => void
  isOpen?: boolean
  onToggle?: () => void
}

export function FileExplorer({
  activeSection,
  onSectionChange,
  isOpen = true,
  onToggle,
}: FileExplorerProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              onToggle?.()
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Close navigation menu"
        />
      )}

      <nav
        className={`
          fixed lg:relative top-0 left-0 h-full
          w-80 bg-[#161b22] border-r border-[#30363d] p-4
          transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          lg:w-80 md:w-64 sm:w-72
        `}
        aria-label="Portfolio sections"
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Folder className="w-4 h-4" />
            <span>portfolio/</span>
          </div>
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => {
                  onSectionChange(section.id as SectionId)
                  if (onToggle && window.innerWidth < 1024) {
                    onToggle()
                  }
                }}
                className={`w-full flex items-center gap-2 px-2 py-1 rounded text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  activeSection === section.id
                    ? "bg-[#1f6feb] text-white shadow-lg"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                aria-current={activeSection === section.id ? "page" : undefined}
                aria-label={`Navigate to ${section.name} section (Alt+${sections.indexOf(section) + 1})`}
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
      </nav>
    </>
  )
}
