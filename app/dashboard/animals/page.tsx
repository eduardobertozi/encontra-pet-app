"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnimalTable } from "@/components/dashboard/animal-table"
import { AnimalFormModal } from "@/components/dashboard/animal-form-modal"
import { AnimalViewModal } from "@/components/dashboard/animal-view-modal"
import { Plus, Search, Download, SlidersHorizontal } from "lucide-react"
import { mockAnimals } from "@/data/mockData"
import type { Animal } from "@/types"
import { StatsCard } from "@/components/dashboard/stats-card"
import { PawPrint, Heart, Activity } from "lucide-react"

export default function AnimalsPage() {
  const [animals, setAnimals] = useState<Animal[]>([])
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [speciesFilter, setSpeciesFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isViewOpen, setIsViewOpen] = useState(false)
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null)

  useEffect(() => {
    // Simulate loading data
    setAnimals(mockAnimals)
    setFilteredAnimals(mockAnimals)
  }, [])

  useEffect(() => {
    // Filter animals based on search and filters
    let filtered = animals

    if (searchQuery) {
      filtered = filtered.filter(
        (animal) =>
          animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          animal.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          animal.breed.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (speciesFilter !== "all") {
      filtered = filtered.filter((animal) => animal.species === speciesFilter)
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((animal) => animal.status === statusFilter)
    }

    setFilteredAnimals(filtered)
  }, [searchQuery, speciesFilter, statusFilter, animals])

  const handleAddAnimal = () => {
    setSelectedAnimal(null)
    setIsFormOpen(true)
  }

  const handleEditAnimal = (animal: Animal) => {
    setSelectedAnimal(animal)
    setIsFormOpen(true)
  }

  const handleViewAnimal = (animal: Animal) => {
    setSelectedAnimal(animal)
    setIsViewOpen(true)
  }

  const handleDeleteAnimal = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este animal?")) {
      setAnimals(animals.filter((a) => a.id !== id))
    }
  }

  const handleSaveAnimal = (animalData: Partial<Animal>) => {
    if (selectedAnimal) {
      // Edit existing animal
      setAnimals(animals.map((a) => (a.id === selectedAnimal.id ? { ...selectedAnimal, ...animalData } : a)))
    } else {
      // Add new animal
      const newAnimal: Animal = {
        id: `A${(animals.length + 1).toString().padStart(3, "0")}`,
        ...animalData,
        imageUrl: "/placeholder.svg?height=400&width=400",
        entryDate: new Date().toLocaleDateString("pt-BR"),
        ngoId: "ngo1",
      } as Animal
      setAnimals([...animals, newAnimal])
    }
    setIsFormOpen(false)
  }

  // Calculate stats
  const totalAnimals = animals.length
  const availableAnimals = animals.filter((a) => a.status === "available").length
  const medicalCareAnimals = animals.filter((a) => a.status === "medical").length

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gerenciamento de Animais</h1>
          <p className="text-muted-foreground mt-1">Gerencie todos os animais sob cuidado</p>
        </div>
        <Button onClick={handleAddAnimal} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Novo Animal
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar animais por nome, ID ou espécie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={speciesFilter} onValueChange={setSpeciesFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Todas as Espécies" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as Espécies</SelectItem>
            <SelectItem value="dog">Cães</SelectItem>
            <SelectItem value="cat">Gatos</SelectItem>
            <SelectItem value="other">Outros</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Todos os Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os Status</SelectItem>
            <SelectItem value="available">Disponível</SelectItem>
            <SelectItem value="medical">Cuidado Médico</SelectItem>
            <SelectItem value="adopted">Adotado</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Mais Filtros
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Total de Animais" value={totalAnimals} change={12} icon={PawPrint} />
        <StatsCard title="Disponíveis" value={availableAnimals} change={8} icon={Heart} />
        <StatsCard title="Em Cuidado Médico" value={medicalCareAnimals} change={-2} icon={Activity} />
      </div>

      {/* Table Header Actions */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Lista de Animais</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button variant="outline" size="sm">
            Colunas
          </Button>
        </div>
      </div>

      {/* Animals Table */}
      <AnimalTable
        animals={filteredAnimals}
        onEdit={handleEditAnimal}
        onDelete={handleDeleteAnimal}
        onView={handleViewAnimal}
      />

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Mostrando {filteredAnimals.length > 0 ? "1" : "0"}-{Math.min(8, filteredAnimals.length)} de{" "}
          {filteredAnimals.length} animais
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            {"<"}
          </Button>
          <Button variant="default" size="sm" className="bg-primary">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <span className="text-sm text-muted-foreground">...</span>
          <Button variant="outline" size="sm">
            31
          </Button>
          <Button variant="outline" size="sm">
            {">"}
          </Button>
        </div>
      </div>

      {/* Modals */}
      <AnimalFormModal
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSaveAnimal}
        animal={selectedAnimal}
      />
      <AnimalViewModal open={isViewOpen} onClose={() => setIsViewOpen(false)} animal={selectedAnimal} />
    </div>
  )
}
