export function AboutSection() {
  return (
    <div className="space-y-4">
      <h1 className="sr-only">About Me</h1>
      <div className="flex items-center gap-2 text-green-400">
        <span className="text-gray-400">$</span>
        <span>cat about.md</span>
      </div>
      <div className="pl-4 space-y-3 text-gray-300">
        <h2 className="text-xl font-bold text-blue-400"># About Me</h2>
        <p>
          Hello! I'm Ryota Ikezawa, a Technical Lead and Full Stack Engineer
          with 10+ years of experience in software development. My journey spans
          from network infrastructure to modern web applications, with expertise
          in building scalable financial and HR platforms.
        </p>
        <p>
          Currently at freee K.K. as Technical Lead, I focus on pure technical
          management for our HR Integration Platform. Previously served as
          Engineering Manager, leading teams while maintaining hands-on
          technical contributions across multiple critical projects.
        </p>
        <div className="mt-4">
          <span className="text-yellow-400">## Experience Highlights</span>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>
              Led team of 3 engineers developing comprehensive employee portal
              within 4 months while maintaining hands-on development
            </li>
            <li>
              Managed global team of 4 engineers executing technical debt
              migration and legacy system integration
            </li>
            <li>
              Pioneered financial services platform from concept to launch,
              managing entire development lifecycle
            </li>
            <li>
              Architected data aggregation service handling financial
              institution integrations, reducing user inquiries by 30%
            </li>
            <li>
              Scaled advisor platform to support 500+ tax accountants through
              strategic re-architecture
            </li>
            <li>
              Contributed to Rails/Ruby upgrades and Paperclip to ActiveStorage
              migration as a contractor at acall inc.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <span className="text-yellow-400">## Education</span>
          <div className="mt-2 text-sm">
            <p>
              <strong>Senshu University</strong> - Bachelor of Political Science
            </p>
            <p className="text-gray-400">Apr 2012 - Mar 2015</p>
            <p className="mt-1">
              Specialized in Western political history and political thought
            </p>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-yellow-400">## Career Journey</span>
          <div className="mt-2 text-sm space-y-2">
            <p>
              Started as a Network Engineer migrating on-premise infrastructure
              to AWS, then transitioned to software development at freee K.K. in
              2015.
            </p>
            <p>
              Over the past decade, I've grown from individual contributor to
              technical leadership roles, building expertise in Go, Ruby, React,
              and cloud-native architectures while delivering critical financial
              and HR solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
