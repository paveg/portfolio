"use client"

import { FC } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip as RechartTooltip,
  ResponsiveContainer,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts"
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent"

import { Language } from "@/types/github"
import { useLanguageData } from "@/hooks/useLanguageData"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

type LanguageData = {
  name: keyof Language
  total: number
}

const CustomTooltip: FC = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <Card className="w-[150px] sm:w-[250px]">
        <CardContent>
          <CardHeader>
            <CardTitle>
              <Badge>{label ?? ""}</Badge>
            </CardTitle>
            <CardDescription className="hidden sm:inline">
              Amount of {label ?? ""} code in the repository most recently
              pushed
            </CardDescription>
          </CardHeader>
          <div className="text-center">
            <p>
              {payload[0]?.value} bytes
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return null
}

export const LanguageBarChart: FC = () => {
  const { data, isLoading, error } = useLanguageData()

  if (isLoading) return <Skeleton className="h-60 w-full" />
  if (error) return <>Error...</>
  const result = data?.reduce(
    (acc, cur) => {
      Object.keys(cur).forEach((name) => {
        const item = acc?.find((ac) => ac["name"] === name)
        if (item) {
          acc?.find((ac) => (ac["total"] += cur[name]))
        } else {
          acc?.push({ name: name, total: cur[name] })
        }
      })
      return acc
    },
    [{}] as LanguageData[]
  )
  const filtered = result
    ?.filter((item) => !isNaN(item.total))
    .sort((a, b) => b.total - a.total)
    .slice(0, 10)

  return (
    <>
      <p className="mb-2 max-w-[700px] text-lg text-muted-foreground">
        Amount of code in the repo most recently pushed
      </p>
      <div className="h-60 w-full sm:h-60">
        <ResponsiveContainer>
          <BarChart data={filtered}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" fontSize={10} />
            <YAxis
              stroke="#888888"
              fontSize={10}
              tickFormatter={(value) => `${value / 1000} kb`}
            />
            <RechartTooltip cursor={false} content={<CustomTooltip />} />
            <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}
