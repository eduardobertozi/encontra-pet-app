"use client"

import Link from "next/link"
import { PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with paw icon matching prototype */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="bg-secondary rounded-full p-2 group-hover:scale-110 transition-transform">
              <PawPrint className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-primary">Encontra Pet</span>
          </Link>

          {/* Navigation - matching prototype spacing */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link
              href="#como-funciona"
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Como Funciona
            </Link>
            <Link href="#ongs" className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
              Para ONGs
            </Link>
            <Link href="#sobre" className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
              Sobre Nós
            </Link>
            <Link href="#contato" className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          {/* Auth Buttons - matching prototype style */}
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button
                variant="ghost"
                className="hidden sm:inline-flex text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                Entrar
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2.5 rounded-lg shadow-sm">
                Cadastrar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
