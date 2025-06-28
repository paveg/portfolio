import { describe, expect, it } from "vitest"
import { projects, sections, skillsData } from "../data"

describe("Data constants", () => {
  describe("projects", () => {
    it("contains the expected number of projects", () => {
      expect(projects).toHaveLength(11)
    })

    it("has all required properties for each project", () => {
      projects.forEach((project) => {
        expect(project).toHaveProperty("name")
        expect(project).toHaveProperty("tech")
        expect(project).toHaveProperty("description")
        expect(project).toHaveProperty("github")
        expect(project).toHaveProperty("demo")
        expect(project).toHaveProperty("period")
        expect(project).toHaveProperty("role")
      })
    })

    it("has projects ordered chronologically (newest first)", () => {
      // Check that the first project is the most recent
      expect(projects[0].name).toContain("HR Integration Platform")
      expect(projects[0].period).toContain("2025")

      // Check that the last project is the oldest
      expect(projects[projects.length - 1].name).toContain(
        "Network Infrastructure",
      )
      expect(projects[projects.length - 1].period).toContain("2015")
    })
  })

  describe("sections", () => {
    it("contains all navigation sections", () => {
      expect(sections).toHaveLength(4)

      const sectionIds = sections.map((s) => s.id)
      expect(sectionIds).toEqual(["about", "skills", "projects", "contact"])
    })

    it("has proper file-like names", () => {
      expect(sections.find((s) => s.id === "about")?.name).toBe("about.md")
      expect(sections.find((s) => s.id === "skills")?.name).toBe("skills.json")
      expect(sections.find((s) => s.id === "projects")?.name).toBe("projects/")
      expect(sections.find((s) => s.id === "contact")?.name).toBe("contact.sh")
    })
  })

  describe("skillsData", () => {
    it("contains all skill categories", () => {
      expect(skillsData).toHaveProperty("programming_languages")
      expect(skillsData).toHaveProperty("frameworks")
      expect(skillsData).toHaveProperty("databases")
      expect(skillsData).toHaveProperty("middlewares_and_tools")
    })

    it("has expected programming languages", () => {
      expect(skillsData.programming_languages).toContain("TypeScript")
      expect(skillsData.programming_languages).toContain("Go")
      expect(skillsData.programming_languages).toContain("Ruby")
    })

    it("includes modern frameworks", () => {
      expect(skillsData.frameworks).toContain("React.js")
      expect(skillsData.frameworks).toContain("Ruby on Rails")
      expect(skillsData.frameworks).toContain("Next.js")
    })
  })
})
