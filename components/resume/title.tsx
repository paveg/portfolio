export const ResumeTitle = () => {
  return (
    <div className="flex max-w-[980px] flex-col gap-2 text-center sm:text-left">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Ryota Ikezawa
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground">
        Software Engineer
        <br className="sm:hidden" />
        <span className="hidden sm:inline"> / </span>Engineering Manager
      </p>
    </div>
  )
}
