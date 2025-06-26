import { Check, Copy } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
}

export function CodeBlock({
  code,
  language = "json",
  showLineNumbers = true,
}: CodeBlockProps) {
  const [formattedCode, setFormattedCode] = useState<string>(code)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Format JSON for better display
    if (language === "json") {
      try {
        const parsed = JSON.parse(code)
        setFormattedCode(JSON.stringify(parsed, null, 2))
      } catch {
        setFormattedCode(code)
      }
    }
  }, [code, language])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(formattedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Simple syntax highlighting for JSON
  const highlightJSON = (str: string) => {
    return (
      str
        // Replace spaces with non-breaking spaces to preserve indentation
        .replace(/ /g, "&nbsp;")
        // Highlight property names (keys)
        .replace(/"([^"]+)":/g, '<span class="text-blue-400">"$1"</span>:')
        // Highlight string values
        .replace(/: "([^"]+)"/g, ': <span class="text-green-400">"$1"</span>')
        // Highlight numbers
        .replace(/: (\d+)/g, ': <span class="text-yellow-400">$1</span>')
        // Highlight booleans
        .replace(/: (true|false)/g, ': <span class="text-purple-400">$1</span>')
        // Highlight null
        .replace(/: null/g, ': <span class="text-red-400">null</span>')
        // Highlight brackets and braces
        .replace(/[{}]/g, '<span class="text-gray-500">$&</span>')
        .replace(/[[\]]/g, '<span class="text-gray-500">$&</span>')
    )
  }

  const lines = formattedCode.split("\n")

  return (
    <div className="relative group">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleCopy}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-7 px-2 bg-gray-800 hover:bg-gray-700"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="w-3 h-3 text-green-400" />
        ) : (
          <Copy className="w-3 h-3 text-gray-400" />
        )}
      </Button>

      <div className="overflow-x-auto bg-gray-900 bg-opacity-50 rounded-md">
        {showLineNumbers ? (
          <table className="w-full font-mono text-sm">
            <tbody>
              {lines.map((line, index) => (
                <tr
                  // biome-ignore lint/suspicious/noArrayIndexKey: line content is stable and order won't change
                  key={`line-${index}`}
                  className="hover:bg-gray-800 hover:bg-opacity-30"
                >
                  <td className="text-gray-600 text-right pr-4 pl-3 py-0.5 select-none w-8 align-top">
                    {index + 1}
                  </td>
                  <td className="text-gray-300 py-0.5 pr-3">
                    <code
                      // biome-ignore lint/security/noDangerouslySetInnerHtml: content is sanitized through regex replacement
                      dangerouslySetInnerHTML={{
                        __html:
                          language === "json"
                            ? highlightJSON(line || " ")
                            : line || " ",
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <pre className="text-gray-300">
            <code
              // biome-ignore lint/security/noDangerouslySetInnerHtml: content is sanitized through regex replacement
              dangerouslySetInnerHTML={{
                __html:
                  language === "json"
                    ? highlightJSON(formattedCode)
                    : formattedCode,
              }}
            />
          </pre>
        )}
      </div>
    </div>
  )
}
