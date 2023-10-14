import { ResumeSkill } from "@/components/resume/skill"
import { ResumeSummary } from "@/components/resume/summary"
import { ResumeTitle } from "@/components/resume/title"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <ResumeTitle />
      <ResumeSummary />
      <ResumeSkill />
    </section>
  )
}
