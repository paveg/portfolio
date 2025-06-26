import { Cross2Icon, RocketIcon } from "@radix-ui/react-icons"
import { Minimize2, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileMenuButton } from "./MobileMenuButton"

interface TerminalHeaderProps {
  isMobileMenuOpen?: boolean
  onMobileMenuToggle?: () => void
}

export function TerminalHeader({
  isMobileMenuOpen = false,
  onMobileMenuToggle,
}: TerminalHeaderProps) {
  return (
    <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {onMobileMenuToggle && (
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onToggle={onMobileMenuToggle}
            />
          )}
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2">
            <RocketIcon className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">
              portfolio@terminal:~
            </span>
            <span className="text-sm sm:hidden">portfolio</span>
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
  )
}
