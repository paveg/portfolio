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
          Hello! I'm Ryota Ikezawa (池澤 涼太), an Engineering Manager and Full
          Stack Engineer with 9+ years of software engineering experience,
          including 4+ years as a full stack engineer focused on open web
          technologies.
        </p>
        <p>
          Currently working at freee k.k. as an Engineering Manager, I lead
          teams developing innovative HR applications and employee portals. I
          have extensive leadership experience managing up to 5 group members
          and fostering productive, innovative environments.
        </p>
        <div className="mt-4">
          <span className="text-yellow-400">## Experience Highlights</span>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>
              Led team of 3 engineers developing comprehensive employee portal
              (4 months)
            </li>
            <li>Managed global team of 4 engineers across multiple projects</li>
            <li>
              Successfully executed technical debt migration with legacy data
              model integration
            </li>
            <li>
              Developed and scaled services supporting 500+ tax accountants
            </li>
            <li>
              Spearheaded "freeeデータ化サービス" launch as Technical Lead
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <span className="text-yellow-400">## Education</span>
          <div className="mt-2 text-sm">
            <p>
              <strong>Senshu University (専修大学)</strong> - Bachelor of
              Political Science (政治学)
            </p>
            <p className="text-gray-400">Apr 2012 - Mar 2015</p>
            <p className="mt-1">
              Specialized in Western political history and political thought
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
