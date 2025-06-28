import { describe, expect, it } from "vitest"
import { render, screen } from "@/test/test-utils"
import { ProjectsSection } from "../ProjectsSection"

describe("ProjectsSection", () => {
  it("renders the projects section with terminal command", () => {
    render(<ProjectsSection />)

    expect(
      screen.getByRole("heading", { name: /projects/i, hidden: true }),
    ).toBeInTheDocument()
    expect(screen.getByText("ls -la projects/")).toBeInTheDocument()
  })

  it("displays all project cards", () => {
    render(<ProjectsSection />)

    // Check for some key projects
    expect(screen.getByText("HR Integration Platform")).toBeInTheDocument()
    expect(
      screen.getByText("HR Application & Employee Portal"),
    ).toBeInTheDocument()
    expect(screen.getByText(/data processing service/i)).toBeInTheDocument()
  })

  it("shows project metadata (period and role)", () => {
    render(<ProjectsSection />)

    expect(screen.getAllByText("Period:").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Role:").length).toBeGreaterThan(0)
  })

  it("renders tech tags for projects", () => {
    render(<ProjectsSection />)

    // Check for common technologies
    expect(screen.getAllByText("Go").length).toBeGreaterThan(0)
    expect(screen.getAllByText("TypeScript").length).toBeGreaterThan(0)
    expect(screen.getAllByText("React").length).toBeGreaterThan(0)
  })

  it("renders demo buttons for projects with valid demo URLs", () => {
    render(<ProjectsSection />)

    const demoButtons = screen.getAllByLabelText(/view live demo/i)
    expect(demoButtons.length).toBeGreaterThan(0)
  })
})
