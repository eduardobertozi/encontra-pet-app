"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Heart, Activity } from "lucide-react"
import type { Animal } from "@/types"

interface AnimalViewModalProps {
  open: boolean
  onClose: () => void
  animal: Animal | null
}

export function AnimalViewModal({ open, onClose, animal }: AnimalViewModalProps) {
  if (!animal) return null

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
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Detalhes do Animal</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image */}
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img src={animal.imageUrl || "/placeholder.svg"} alt={animal.name} className="w-full h-full object-cover" />
          </div>

          {/* Basic Info */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{animal.name}</h3>
                <p className="text-muted-foreground">
                  {getSpeciesLabel(animal.species)} • {animal.breed} • {getGenderLabel(animal.gender)}
                </p>
              </div>
              {getStatusBadge(animal.status)}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Idade:</span>
                <span className="font-medium">{animal.age}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Local:</span>
                <span className="font-medium">{animal.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Data de Entrada:</span>
              <span className="font-medium">{animal.entryDate}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              <h4 className="font-semibold text-foreground">Descrição</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{animal.description}</p>
          </div>

          {/* Health Notes */}
          {animal.healthNotes && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                <h4 className="font-semibold text-foreground">Notas de Saúde</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{animal.healthNotes}</p>
            </div>
          )}

          {/* Behavior */}
          {animal.behavior && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                <h4 className="font-semibold text-foreground">Comportamento</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{animal.behavior}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
