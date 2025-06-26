import type { SectionId } from "@/types"

interface StatusBarProps {
  currentTime: Date
  activeSection?: SectionId
}

const sectionLanguages: Record<SectionId, string> = {
  about: "Markdown",
  skills: "JSON",
  projects: "TypeScript",
  contact: "Shell",
}

const sectionFiles: Record<SectionId, string> = {
  about: "about.md",
  skills: "skills.json",
  projects: "projects/index.tsx",
  contact: "contact.sh",
}

export function StatusBar({
  currentTime,
  activeSection = "about",
}: StatusBarProps) {
  return (
    <div className="bg-[#161b22] border-t border-[#30363d] px-4 py-2 text-xs text-gray-400">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-green-400">●</span>
          <span className="truncate">{sectionFiles[activeSection]}</span>
          <span className="hidden sm:inline">UTF-8</span>
          <span>{sectionLanguages[activeSection]}</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="hidden md:inline">Spaces: 2</span>
          <span>{currentTime.toLocaleTimeString()}</span>
          <span className="hidden sm:inline">Ln 1, Col 1</span>
        </div>
      </div>
    </div>
  )
}
