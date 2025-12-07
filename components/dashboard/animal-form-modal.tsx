"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Animal } from "@/types"

interface AnimalFormModalProps {
  open: boolean
  onClose: () => void
  onSave: (animal: Partial<Animal>) => void
  animal?: Animal | null
}

export function AnimalFormModal({ open, onClose, onSave, animal }: AnimalFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    species: "dog" as "dog" | "cat" | "other",
    breed: "",
    age: "",
    gender: "male" as "male" | "female",
    status: "available" as "available" | "adopted" | "medical",
    location: "",
    description: "",
    healthNotes: "",
    behavior: "",
  })

  useEffect(() => {
    if (animal) {
      setFormData({
        name: animal.name,
        species: animal.species,
        breed: animal.breed,
        age: animal.age,
        gender: animal.gender,
        status: animal.status,
        location: animal.location,
        description: animal.description,
        healthNotes: animal.healthNotes || "",
        behavior: animal.behavior || "",
      })
    } else {
      setFormData({
        name: "",
        species: "dog",
        breed: "",
        age: "",
        gender: "male",
        status: "available",
        location: "",
        description: "",
        healthNotes: "",
        behavior: "",
      })
    }
  }, [animal, open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{animal ? "Editar Animal" : "Adicionar Novo Animal"}</DialogTitle>
          <DialogDescription>
            Preencha as informações do animal. Campos marcados com * são obrigatórios.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">
                Nome <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            {/* Species */}
            <div className="space-y-2">
              <Label htmlFor="species">
                Espécie <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.species}
                onValueChange={(value: any) => setFormData({ ...formData, species: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dog">Cão</SelectItem>
                  <SelectItem value="cat">Gato</SelectItem>
                  <SelectItem value="other">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Breed */}
            <div className="space-y-2">
              <Label htmlFor="breed">
                Raça <span className="text-destructive">*</span>
              </Label>
              <Input
                id="breed"
                value={formData.breed}
                onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                required
              />
            </div>

            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age">
                Idade <span className="text-destructive">*</span>
              </Label>
              <Input
                id="age"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                placeholder="Ex: 3 anos"
                required
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label htmlFor="gender">
                Sexo <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.gender}
                onValueChange={(value: any) => setFormData({ ...formData, gender: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Macho</SelectItem>
                  <SelectItem value="female">Fêmea</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <Label htmlFor="status">
                Status <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.status}
                onValueChange={(value: any) => setFormData({ ...formData, status: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Disponível</SelectItem>
                  <SelectItem value="medical">Cuidado Médico</SelectItem>
                  <SelectItem value="adopted">Adotado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location">
              Localização <span className="text-destructive">*</span>
            </Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="Ex: São Paulo, SP"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">
              Descrição <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Conte mais sobre o animal..."
              rows={3}
              required
            />
          </div>

          {/* Health Notes */}
          <div className="space-y-2">
            <Label htmlFor="healthNotes">Notas de Saúde</Label>
            <Textarea
              id="healthNotes"
              value={formData.healthNotes}
              onChange={(e) => setFormData({ ...formData, healthNotes: e.target.value })}
              placeholder="Ex: Vacinado, castrado..."
              rows={2}
            />
          </div>

          {/* Behavior */}
          <div className="space-y-2">
            <Label htmlFor="behavior">Comportamento</Label>
            <Textarea
              id="behavior"
              value={formData.behavior}
              onChange={(e) => setFormData({ ...formData, behavior: e.target.value })}
              placeholder="Ex: Sociável, brincalhão..."
              rows={2}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              {animal ? "Salvar Alterações" : "Adicionar Animal"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
