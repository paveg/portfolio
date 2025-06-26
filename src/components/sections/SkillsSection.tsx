import { CodeBlock } from "@/components/CodeBlock"
import { skillsData } from "@/constants/data"

export function SkillsSection() {
  return (
    <div className="space-y-4">
      <h1 className="sr-only">Skills and Technologies</h1>
      <div className="flex items-center gap-2 text-green-400">
        <span className="text-gray-400">$</span>
        <span>cat skills.json</span>
      </div>
      <div className="pl-4 font-mono text-sm">
        <CodeBlock code={JSON.stringify(skillsData, null, 2)} language="json" />
      </div>
    </div>
  )
}
