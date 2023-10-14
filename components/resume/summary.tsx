const startDate = new Date("2015-11-01")
const elapsed = () => {
  const today = new Date()
  const boundary = new Date(
    today.getFullYear(),
    startDate.getMonth() - 1,
    startDate.getDate()
  )
  let e = today.getFullYear() - startDate.getFullYear()

  if (today < boundary) {
    e--
  }

  return e
}

export const ResumeSummary = () => {
  return (
    <div className="flex max-w-[980px] flex-col gap-2 text-center sm:text-left">
      <h2 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
        Summary
      </h2>
      <span>
        <b className="font-bold">{elapsed()}+ years Software Engineer</b>
        <span className="hidden sm:inline">
          {" "}
          (including 4+ years Full Stack Engineer)
        </span>
        . <br className="hidden sm:inline" />
        Have a leadership experience, up to 5 group members.{" "}
        <br className="hidden sm:inline" />
        Native-level Japanese and roughly CEFR A2 level English.
      </span>
    </div>
  )
}
