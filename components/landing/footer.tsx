import Link from "next/link"
import { PawPrint } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand - matching prototype with paw icon */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="bg-secondary rounded-full p-2 group-hover:scale-110 transition-transform">
                <PawPrint className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">Encontra Pet</span>
            </Link>
            <p className="text-sm text-white/90 leading-relaxed">
              Conectando corações e salvando vidas através da adoção responsável.
            </p>
          </div>

          {/* Plataforma */}
          <div>
            <h3 className="font-bold text-lg mb-5">Plataforma</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#como-funciona"
                  className="text-sm text-white/90 hover:text-white transition-colors inline-block"
                >
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="#ongs" className="text-sm text-white/90 hover:text-white transition-colors inline-block">
                  Para ONGs
                </Link>
              </li>
              <li>
                <Link href="#pets" className="text-sm text-white/90 hover:text-white transition-colors inline-block">
                  Para Adotantes
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-bold text-lg mb-5">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#sobre" className="text-sm text-white/90 hover:text-white transition-colors inline-block">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-sm text-white/90 hover:text-white transition-colors inline-block">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-white/90 hover:text-white transition-colors inline-block">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-5">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#privacidade"
                  className="text-sm text-white/90 hover:text-white transition-colors inline-block"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#termos" className="text-sm text-white/90 hover:text-white transition-colors inline-block">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/80">© 2025 Encontra Pet. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
