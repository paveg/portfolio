import { useQuery } from "@tanstack/react-query"
import ky from "ky-universal"

import { Language } from "@/types/github"

const fetchLanguageData = async () => {
  const parsed = await ky(
    "https://api.github.com/users/paveg/repos?per_page=30&sort=pushed"
  ).json()
  const notForked = parsed.filter((repo: any) => !repo.fork)
  const languages: Language[] = await Promise.all(
    notForked.map((repo: any) => ky(repo.languages_url).json())
  )
  return languages
}

const useLanguageData = () => {
  return useQuery({
    queryKey: ["skill/languages"],
    queryFn: () => fetchLanguageData(),
    refetchOnMount: false,
  })
}

export { useLanguageData, fetchLanguageData }
