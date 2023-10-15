export type Language = { [key: string]: number }
export type FetchError = {
  message: string
  documentation_url: string
}
export type Repository = { id: number; fork: boolean; languages_url: string }
