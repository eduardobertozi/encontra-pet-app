"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AdoptionTable } from "@/components/dashboard/adoption-table"
import { AdoptionViewModal } from "@/components/dashboard/adoption-view-modal"
import { Search, Download, Filter } from "lucide-react"
import { mockAdoptionApplications } from "@/data/mockData"
import type { AdoptionApplication } from "@/types"
import { StatsCard } from "@/components/dashboard/stats-card"
import { FileText, Clock, CheckCircle, XCircle } from "lucide-react"

export default function AdoptionsPage() {
  const [applications, setApplications] = useState<AdoptionApplication[]>([])
  const [filteredApplications, setFilteredApplications] = useState<AdoptionApplication[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [isViewOpen, setIsViewOpen] = useState(false)
  const [selectedApplication, setSelectedApplication] = useState<AdoptionApplication | null>(null)

  useEffect(() => {
    // Simulate loading data
    setApplications(mockAdoptionApplications)
    setFilteredApplications(mockAdoptionApplications)
  }, [])

  useEffect(() => {
    // Filter applications based on search and filters
    let filtered = applications

    if (searchQuery) {
      filtered = filtered.filter(
        (app) =>
          app.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.animalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.id.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((app) => app.status === statusFilter)
    }

    setFilteredApplications(filtered)
  }, [searchQuery, statusFilter, applications])

  const handleApprove = (id: string) => {
    if (confirm("Deseja aprovar esta solicitação de adoção?")) {
      setApplications(applications.map((app) => (app.id === id ? { ...app, status: "approved" } : app)))
    }
  }

  const handleReject = (id: string) => {
    if (confirm("Deseja rejeitar esta solicitação de adoção?")) {
      setApplications(applications.map((app) => (app.id === id ? { ...app, status: "rejected" } : app)))
    }
  }

  const handleView = (application: AdoptionApplication) => {
    setSelectedApplication(application)
    setIsViewOpen(true)
  }

  // Calculate stats
  const totalApplications = applications.length
  const pendingApplications = applications.filter((a) => a.status === "pending").length
  const approvedApplications = applications.filter((a) => a.status === "approved").length
  const rejectedApplications = applications.filter((a) => a.status === "rejected").length

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Pedidos de Adoção</h1>
        <p className="text-muted-foreground mt-1">Gerencie as solicitações de adoção dos animais</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total de Pedidos" value={totalApplications} change={15} icon={FileText} />
        <StatsCard title="Pendentes" value={pendingApplications} change={10} icon={Clock} />
        <StatsCard title="Aprovados" value={approvedApplications} change={20} icon={CheckCircle} />
        <StatsCard title="Rejeitados" value={rejectedApplications} change={-5} icon={XCircle} />
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por candidato, animal ou ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Todos os Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os Status</SelectItem>
            <SelectItem value="pending">Pendentes</SelectItem>
            <SelectItem value="approved">Aprovados</SelectItem>
            <SelectItem value="rejected">Rejeitados</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Mais Filtros
        </Button>
      </div>

      {/* Table Header Actions */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Lista de Solicitações</h2>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Exportar
        </Button>
      </div>

      {/* Adoptions Table */}
      <AdoptionTable
        applications={filteredApplications}
        onApprove={handleApprove}
        onReject={handleReject}
        onView={handleView}
      />

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Mostrando {filteredApplications.length > 0 ? "1" : "0"}-{Math.min(10, filteredApplications.length)} de{" "}
          {filteredApplications.length} solicitações
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            {"<"}
          </Button>
          <Button variant="default" size="sm" className="bg-primary">
            1
          </Button>
          <Button variant="outline" size="sm">
            {">"}
          </Button>
        </div>
      </div>

      {/* View Modal */}
      <AdoptionViewModal
        open={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        application={selectedApplication}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  )
}
