import { EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <div className="space-y-4">
      <h1 className="sr-only">Contact Information</h1>
      <div className="flex items-center gap-2 text-green-400">
        <span className="text-gray-400">$</span>
        <span>./contact.sh</span>
      </div>
      <div className="pl-4 space-y-4 text-gray-300">
        <div className="space-y-2">
          <p className="text-yellow-400"># Let's connect!</p>
          <p>Feel free to reach out for collaborations or just to say hello.</p>
        </div>
        <div className="space-y-3">
          <div className="flex items-start">
            <Button
              asChild
              variant="link"
              className="h-auto p-0 text-gray-300 hover:text-blue-300 justify-start"
            >
              <a
                href="mailto:pavegy+work@gmail.com"
                className="flex items-center gap-3"
                aria-label="Send email to pavegy+work@gmail.com"
              >
                <EnvelopeClosedIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>pavegy+work@gmail.com</span>
              </a>
            </Button>
          </div>
          <div className="flex items-start">
            <Button
              asChild
              variant="link"
              className="h-auto p-0 text-gray-300 hover:text-blue-300 justify-start"
            >
              <a
                href="https://github.com/paveg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
                aria-label="Visit GitHub profile"
              >
                <Github className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>github.com/paveg</span>
              </a>
            </Button>
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
}
