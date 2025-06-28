import { describe, expect, it } from "vitest"
import App from "@/App"
import { render, screen } from "@/test/test-utils"

describe("App", () => {
  it("renders the main application", () => {
    render(<App />)

    expect(screen.getByRole("main")).toBeInTheDocument()
  })

  it("displays about section by default", () => {
    render(<App />)

    expect(screen.getByText(/hello! i'm ryota ikezawa/i)).toBeInTheDocument()
  })
})
