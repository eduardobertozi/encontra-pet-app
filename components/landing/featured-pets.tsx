"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MapPin } from "lucide-react"
import { mockAnimals } from "@/data/mockData"
import type { Animal } from "@/types"

export function FeaturedPets() {
  const [animals, setAnimals] = useState<Animal[]>([])

  useEffect(() => {
    // Simulate loading and filter only available animals
    const availableAnimals = mockAnimals.filter((animal) => animal.status === "available")
    setAnimals(availableAnimals.slice(0, 6))
  }, [])

  const getSpeciesLabel = (species: string) => {
    const labels: Record<string, string> = {
      dog: "Cão",
      cat: "Gato",
      other: "Outro",
    }
    return labels[species] || species
  }

  return (
    <section id="pets" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Pets em Destaque</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos animais que estão esperando por uma família
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <Card
              key={animal.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200 rounded-2xl"
            >
              {/* Animal Image */}
              <div className="relative h-72 bg-muted">
                <img
                  src={animal.imageUrl || "/placeholder.svg"}
                  alt={animal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary text-white font-semibold px-3 py-1.5 text-sm rounded-full shadow-md">
                    {getSpeciesLabel(animal.species)}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1.5">{animal.name}</h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {animal.breed} • {animal.age}
                  </p>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{animal.description}</p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{animal.location}</span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 rounded-xl shadow-sm">
                  <Heart className="w-5 h-5 mr-2" />
                  Quero Adotar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
