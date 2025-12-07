"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, LayoutDashboard, PawPrint, FileText, Users, Calendar, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const menuItems = [
  { href: "/dashboard", label: "Painel", icon: LayoutDashboard },
  { href: "/dashboard/animals", label: "Gerenciamento de Animais", icon: PawPrint },
  { href: "/dashboard/adoptions", label: "Pedidos de Adoção", icon: FileText },
  { href: "/dashboard/volunteers", label: "Gerenciamento de Voluntários", icon: Users },
  { href: "/dashboard/events", label: "Gerenciador de Eventos", icon: Calendar },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r bg-card min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b">
        <Link href="/dashboard" className="flex items-center gap-2.5 group">
          <div className="bg-secondary rounded-full p-2 group-hover:scale-110 transition-transform">
            <PawPrint className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-2xl text-primary">Encontra Pet</span>
        </Link>
      </div>

      {/* User Profile */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Maria Santos" />
            <AvatarFallback className="bg-primary text-primary-foreground">MS</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm text-foreground">Maria Santos</p>
            <p className="text-xs text-muted-foreground">Administradora</p>
          </div>
        </div>
      </div>

      {/* Menu Principal */}
      <div className="flex-1 p-4">
        <p className="text-xs font-semibold text-muted-foreground uppercase mb-4 px-3">Menu Principal</p>
        <nav className="space-y-1">
          {menuItems.slice(0, 5).map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Relatórios Section */}
        <p className="text-xs font-semibold text-muted-foreground uppercase mb-4 mt-6 px-3">Relatórios</p>
        <nav className="space-y-1">
          <Link
            href="/dashboard/reports"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              pathname === "/dashboard/reports"
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            <BarChart3 className="h-5 w-5" />
            Relatórios
          </Link>
        </nav>
      </div>

      {/* User Profile (Bottom) - Duplicate for visibility */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Maria Santos" />
            <AvatarFallback className="bg-primary text-primary-foreground">MS</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm text-foreground">Maria Santos</p>
            <p className="text-xs text-muted-foreground">Administradora</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
