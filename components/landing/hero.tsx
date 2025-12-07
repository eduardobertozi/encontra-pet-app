import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-balance leading-[1.1]">
              Conectando <span className="text-primary">Corações</span>, Salvando{" "}
              <span className="text-secondary">Vidas</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 text-pretty leading-relaxed max-w-xl">
              A plataforma que une abrigos de animais com pessoas dispostas a adotar, criar vínculos especiais e
              transformar vidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#pets">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base w-full sm:w-auto rounded-xl shadow-md"
                >
                  Quero Adotar
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-6 text-base w-full sm:w-auto bg-white rounded-xl"
                >
                  Sou uma ONG
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image with decorative plus icon */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 bg-secondary text-white rounded-full p-4 shadow-lg z-10">
              <Plus className="h-8 w-8" strokeWidth={3} />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden bg-muted shadow-2xl">
              <img
                src="/happy-family-with-adopted-dog-and-cat.jpg"
                alt="Família feliz com animais adotados"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
