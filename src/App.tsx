import { ArrowDownRight, ArrowUpRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider"

const metrics = [
  { label: "Receita", value: "R$ 412k", change: "+12,4%", positive: true, series: [12, 18, 15, 22, 28, 26, 34, 41] },
  { label: "Assinaturas", value: "1.284", change: "+4,1%", positive: true, series: [40, 42, 41, 45, 44, 48, 51, 53] },
  { label: "Cancelamentos", value: "2,1%", change: "-0,6%", positive: false, series: [8, 7, 9, 6, 7, 5, 6, 4] },
  { label: "Tempo até valor", value: "3d 4h", change: "-18,2%", positive: false, series: [30, 28, 26, 27, 22, 20, 18, 15] },
]

const weeks = [62, 78, 71, 94, 88, 112, 104, 131]
const activity = [["Marina", "publicou o tema Aurora", "há 4 min"], ["Rafael", "aprovou a revisão do bloco de preços", "há 26 min"], ["Ana", "abriu 3 chamados de acessibilidade", "há 1 h"], ["Pedro", "conectou o registry ao agente", "há 2 h"], ["Júlia", "convidou 2 pessoas para o workspace", "há 5 h"]]

function Sparkline({ series, label }: { series: number[]; label: string }) {
  const min = Math.min(...series)
  const range = Math.max(...series) - min || 1
  const points = series.map((value, index) => `${(index / (series.length - 1)) * 100},${28 - ((value - min) / range) * 24}`).join(" ")

  return <svg aria-label={`Tendência de ${label} nas últimas oito semanas.`} className="mt-5 h-8 w-full" preserveAspectRatio="none" role="img" viewBox="0 0 100 32"><polyline className="fill-none stroke-background stroke-[3]" points={points} vectorEffect="non-scaling-stroke" /><polyline className="fill-none stroke-chart-1 stroke-[1.5]" points={points} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" /></svg>
}

function MetricCard({ metric }: { metric: (typeof metrics)[number] }) {
  const Icon = metric.positive ? ArrowUpRight : ArrowDownRight
  return <Card className="rounded-xl border border-border bg-card py-0 shadow-sm ring-0 dark:ring-0"><CardContent className="p-5"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{metric.label}</p><p className="mt-2.5 text-2xl font-medium tracking-tight tabular-nums">{metric.value}</p><p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground"><Icon aria-hidden="true" className="size-3.5 text-primary" /><span className="font-mono tabular-nums text-primary">{metric.change}</span><span>{metric.positive ? "acima" : "abaixo"} vs. 30 dias</span></p><Sparkline label={metric.label} series={metric.series} /></CardContent></Card>
}

function App() {
  const { theme, setTheme } = useTheme()
  return <main className="min-h-svh bg-background px-6 py-16 text-foreground md:px-10 md:py-20"><div className="mx-auto max-w-6xl"><header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Painel · últimos 30 dias</p><h1 className="mt-2 text-3xl font-medium tracking-tight">Como o produto foi este mês</h1></div><label className="flex min-h-10 cursor-pointer items-center gap-3 text-xs text-muted-foreground"><span>Modo claro</span><Switch aria-label="Alternar modo claro" checked={theme === "light"} onCheckedChange={(checked) => setTheme(checked ? "light" : "dark")} /></label></header><section aria-label="Indicadores do produto" className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}</section><section className="mt-6 grid gap-4 lg:grid-cols-[1.6fr_1fr]"><Card className="rounded-xl border border-border bg-card py-0 shadow-sm ring-0 dark:ring-0"><CardContent className="p-6"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Receita por semana</p><div aria-label="Receita por semana com tendência de alta" className="mt-6 flex h-40 items-end gap-2" role="img">{weeks.map((week, index) => <div className="flex-1 rounded-t-sm bg-chart-1" key={index} style={{ height: `${(week / Math.max(...weeks)) * 100}%` }} />)}</div><div aria-hidden="true" className="mt-2 flex gap-2">{weeks.map((_, index) => <span className="flex-1 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground" key={index}>S{index + 1}</span>)}</div></CardContent></Card><Card className="rounded-xl border border-border bg-card py-0 shadow-sm ring-0 dark:ring-0"><CardContent className="p-6"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Atividade</p><ul className="mt-5 space-y-4">{activity.map(([person, action, time]) => <li className="flex gap-3" key={person}><span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" /><p className="text-sm leading-snug"><span className="font-medium">{person}</span> <span className="text-muted-foreground">{action}</span><span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{time}</span></p></li>)}</ul></CardContent></Card></section></div></main>
}

export default App

