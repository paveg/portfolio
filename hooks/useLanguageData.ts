import { useQuery } from "@tanstack/react-query"
import ky from "ky-universal"

import { Language, Repository } from "@/types/github"

const fetchLanguageData = async () => {
  const parsed = await ky(
    "https://api.github.com/users/paveg/repos?per_page=30&sort=pushed"
  ).json() as Repository[]
  const notForked = parsed.filter((repo) => !repo.fork)
  const languages: Language[] = await Promise.all(
    notForked.map((repo) => ky(repo.languages_url).json())
  ) as Language[]
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
