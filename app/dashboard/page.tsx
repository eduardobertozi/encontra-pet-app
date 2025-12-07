"use client"

import { useState, useEffect } from "react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { PawPrint, Heart, Activity, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockDashboardStats, mockAnimals, mockAdoptionApplications } from "@/data/mockData"
import type { DashboardStats } from "@/types"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null)

  useEffect(() => {
    // Simulate loading data
    setStats(mockDashboardStats)
  }, [])

  // Mock chart data for adoptions over months
  const adoptionsData = [
    { month: "Jan", adoptions: 18 },
    { month: "Fev", adoptions: 22 },
    { month: "Mar", adoptions: 20 },
    { month: "Abr", adoptions: 24 },
    { month: "Mai", adoptions: 28 },
    { month: "Jun", adoptions: 24 },
  ]

  // Mock chart data for species distribution
  const speciesData = [
    { species: "Cães", count: 152 },
    { species: "Gatos", count: 89 },
    { species: "Outros", count: 6 },
  ]

  if (!stats) {
    return (
      <div className="p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Painel</h1>
        <p className="text-muted-foreground mt-1">Visão geral das atividades da sua ONG</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total de Animais"
          value={stats.totalAnimals}
          change={stats.totalAnimalsChange}
          icon={PawPrint}
        />
        <StatsCard
          title="Disponíveis"
          value={stats.availableAnimals}
          change={stats.availableAnimalsChange}
          icon={Heart}
        />
        <StatsCard
          title="Em Cuidado Médico"
          value={stats.medicalCare}
          change={stats.medicalCareChange}
          icon={Activity}
        />
        <StatsCard
          title="Adotados este Mês"
          value={stats.adoptedThisMonth}
          change={stats.adoptedThisMonthChange}
          icon={TrendingUp}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Adoptions Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Adoções nos Últimos Meses</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={adoptionsData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="adoptions"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Species Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Espécie</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={speciesData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="species" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="count" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Adoptions */}
        <Card>
          <CardHeader>
            <CardTitle>Últimos Pedidos de Adoção</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAdoptionApplications.slice(0, 5).map((application) => (
                <div key={application.id} className="flex items-center justify-between pb-4 border-b last:border-0">
                  <div>
                    <p className="font-medium text-sm text-foreground">{application.applicantName}</p>
                    <p className="text-xs text-muted-foreground">
                      Interesse em {application.animalName} • {application.date}
                    </p>
                  </div>
                  <div
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      application.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : application.status === "rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {application.status === "approved"
                      ? "Aprovado"
                      : application.status === "rejected"
                        ? "Rejeitado"
                        : "Pendente"}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Animals */}
        <Card>
          <CardHeader>
            <CardTitle>Animais Adicionados Recentemente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAnimals.slice(0, 5).map((animal) => (
                <div key={animal.id} className="flex items-center gap-4 pb-4 border-b last:border-0">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={animal.imageUrl || "/placeholder.svg"}
                      alt={animal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">{animal.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {animal.breed} • {animal.age}
                    </p>
                  </div>
                  <div
                    className={`px-2 py-1 rounded text-xs font-medium flex-shrink-0 ${
                      animal.status === "available"
                        ? "bg-green-100 text-green-700"
                        : animal.status === "medical"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {animal.status === "available"
                      ? "Disponível"
                      : animal.status === "medical"
                        ? "Cuidados"
                        : "Adotado"}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
