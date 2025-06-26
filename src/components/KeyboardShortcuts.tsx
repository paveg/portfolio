import { Keyboard, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "?" && !event.ctrlKey && !event.altKey) {
        event.preventDefault()
        setIsOpen(true)
      }
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  if (!isOpen) {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 p-2 bg-gray-800 hover:bg-gray-700 text-gray-300"
        aria-label="Show keyboard shortcuts"
      >
        <Keyboard className="w-4 h-4" />
      </Button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="bg-gray-800 border-gray-700 p-6 max-w-md w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">
            Keyboard Shortcuts
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            aria-label="Close shortcuts"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-300">Show this help</span>
            <kbd className="px-2 py-1 bg-gray-700 rounded text-yellow-400">
              ?
            </kbd>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">About section</span>
            <kbd className="px-2 py-1 bg-gray-700 rounded text-yellow-400">
              Alt + 1
            </kbd>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Skills section</span>
            <kbd className="px-2 py-1 bg-gray-700 rounded text-yellow-400">
              Alt + 2
            </kbd>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Projects section</span>
            <kbd className="px-2 py-1 bg-gray-700 rounded text-yellow-400">
              Alt + 3
            </kbd>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Contact section</span>
            <kbd className="px-2 py-1 bg-gray-700 rounded text-yellow-400">
              Alt + 4
            </kbd>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Close menu/dialogs</span>
            <kbd className="px-2 py-1 bg-gray-700 rounded text-yellow-400">
              Escape
            </kbd>
          </div>
        </div>
      </Card>
    </div>
  )
}
