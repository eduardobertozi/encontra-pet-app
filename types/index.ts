// Type definitions for Encontra Pet application

export type Species = "dog" | "cat" | "other"
export type AnimalStatus = "available" | "adopted" | "medical"
export type AdoptionStatus = "pending" | "approved" | "rejected"
export type Gender = "male" | "female"

export interface Animal {
  id: string
  name: string
  species: Species
  breed: string
  age: string
  gender: Gender
  status: AnimalStatus
  location: string
  description: string
  imageUrl: string
  healthNotes?: string
  behavior?: string
  entryDate: string
  ngoId: string
}

export interface NGO {
  id: string
  name: string
  email: string
  animals: Animal[]
  volunteers: number
  upcomingEvents: number
}

export interface AdoptionApplication {
  id: string
  animalId: string
  animalName: string
  applicantName: string
  applicantEmail: string
  applicantPhone: string
  status: AdoptionStatus
  date: string
  message?: string
}

export interface DashboardStats {
  totalAnimals: number
  totalAnimalsChange: number
  availableAnimals: number
  availableAnimalsChange: number
  medicalCare: number
  medicalCareChange: number
  adoptedThisMonth: number
  adoptedThisMonthChange: number
}
