"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Pencil, Trash2 } from "lucide-react"
import type { Animal } from "@/types"

interface AnimalTableProps {
  animals: Animal[]
  onEdit: (animal: Animal) => void
  onDelete: (id: string) => void
  onView: (animal: Animal) => void
}

export function AnimalTable({ animals, onEdit, onDelete, onView }: AnimalTableProps) {
  const getSpeciesLabel = (species: string) => {
    const labels: Record<string, string> = {
      dog: "Cão",
      cat: "Gato",
      other: "Outro",
    }
    return labels[species] || species
  }

  const getGenderLabel = (gender: string) => {
    const labels: Record<string, string> = {
      male: "Macho",
      female: "Fêmea",
    }
    return labels[gender] || gender
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-transparent">Disponível</Badge>
      case "medical":
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 border-transparent">Cuidado Médico</Badge>
        )
      case "adopted":
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-transparent">Adotado</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="border rounded-lg bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">ID</TableHead>
            <TableHead className="font-semibold">ANIMAL</TableHead>
            <TableHead className="font-semibold">ESPÉCIE</TableHead>
            <TableHead className="font-semibold">RAÇA</TableHead>
            <TableHead className="font-semibold">IDADE</TableHead>
            <TableHead className="font-semibold">STATUS</TableHead>
            <TableHead className="font-semibold">DATA DE ENTRADA</TableHead>
            <TableHead className="font-semibold text-right">AÇÕES</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {animals.map((animal) => (
            <TableRow key={animal.id}>
              <TableCell className="font-medium">#{animal.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={animal.imageUrl || "/placeholder.svg"}
                      alt={animal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{animal.name}</p>
                    <p className="text-xs text-muted-foreground">{getGenderLabel(animal.gender)}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{getSpeciesLabel(animal.species)}</TableCell>
              <TableCell>{animal.breed}</TableCell>
              <TableCell>{animal.age}</TableCell>
              <TableCell>{getStatusBadge(animal.status)}</TableCell>
              <TableCell>{animal.entryDate}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <Button size="sm" variant="ghost" onClick={() => onView(animal)} className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => onEdit(animal)} className="h-8 w-8 p-0">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onDelete(animal.id)}
                    className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
