import { ClipboardList, Globe, Heart, Home } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: ClipboardList,
      title: "ONG Cadastra",
      description: "ONGs registram animais disponíveis com fotos e informações detalhadas",
    },
    {
      number: 2,
      icon: Globe,
      title: "Perfil Publicado",
      description: "O perfil do animal fica disponível na plataforma para visualização",
    },
    {
      number: 3,
      icon: Heart,
      title: "Interesse Demonstrado",
      description: "Adotantes interessados entram em contato através da plataforma",
    },
    {
      number: 4,
      icon: Home,
      title: "Adoção Realizada",
      description: "Uma nova família é formada e uma vida é transformada",
    },
  ]

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Como Funciona</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um processo simples e transparente para conectar animais com suas futuras famílias
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Step Card */}
              <div className="flex flex-col items-center text-center space-y-5 px-4">
                {/* Icon Circle - matching prototype circular design */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-blue-100 border-4 border-blue-200 flex items-center justify-center shadow-md">
                    <step.icon className="w-11 h-11 text-primary" strokeWidth={2} />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-bold text-xl text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Arrow for desktop - subtle connector */}
              {step.number < 4 && (
                <div className="hidden lg:block absolute top-12 -right-3 text-gray-300">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
