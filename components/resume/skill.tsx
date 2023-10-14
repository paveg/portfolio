"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { LanguageBarChart } from "./skill/languageBarChart"

export const ResumeSkill = () => {
  return (
    <div className="flex max-w-[980px] flex-col gap-2 text-center sm:text-left">
      <h2 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
        Skill
      </h2>
      <Tabs defaultValue="languages">
        <TabsList>
          <TabsTrigger value="languages">Languages</TabsTrigger>
          <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
          <TabsTrigger value="middlewares">Middlewares</TabsTrigger>
        </TabsList>
        <TabsContent value="languages">
          <LanguageBarChart />
        </TabsContent>
        <TabsContent value="frameworks">Frameworks</TabsContent>
        <TabsContent value="middlewares">Middlewares</TabsContent>
      </Tabs>
    </div>
  )
}
