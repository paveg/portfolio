import { describe, expect, it } from "vitest"
import { render, screen } from "@/test/test-utils"
import { AboutSection } from "../AboutSection"

describe("AboutSection", () => {
  it("renders personal information", () => {
    render(<AboutSection />)

    expect(screen.getByText(/hello! i'm ryota ikezawa/i)).toBeInTheDocument()
    expect(
      screen.getByText(/technical lead and full stack engineer/i),
    ).toBeInTheDocument()
  })

  it("displays experience highlights", () => {
    render(<AboutSection />)

    expect(screen.getByText("## Experience Highlights")).toBeInTheDocument()
    expect(screen.getByText(/led team of 3 engineers/i)).toBeInTheDocument()
  })

  it("shows education information", () => {
    render(<AboutSection />)

    expect(screen.getByText("## Education")).toBeInTheDocument()
    expect(screen.getByText(/senshu university/i)).toBeInTheDocument()
  })
})
