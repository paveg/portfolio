import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ResumeTitle } from "@/components/resume/title"
import { ResumeSummary } from "@/components/resume/summary"
import { ResumeSkill } from "@/components/resume/skill"

export default function IndexPage() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <ResumeTitle />
        <ResumeSummary />
        <ResumeSkill />
      </section>
    </>
  )
}
