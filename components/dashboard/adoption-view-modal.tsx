"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Mail, Phone, Calendar, MessageSquare, Check, X } from "lucide-react"
import type { AdoptionApplication } from "@/types"

interface AdoptionViewModalProps {
  open: boolean
  onClose: () => void
  application: AdoptionApplication | null
  onApprove?: (id: string) => void
  onReject?: (id: string) => void
}

export function AdoptionViewModal({ open, onClose, application, onApprove, onReject }: AdoptionViewModalProps) {
  if (!application) return null

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-transparent">Aprovado</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-transparent">Rejeitado</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 border-transparent">Pendente</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Detalhes da Solicitação de Adoção</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Application Header */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Solicitação #{application.id}</p>
              <h3 className="text-2xl font-bold text-foreground">Interesse em {application.animalName}</h3>
            </div>
            {getStatusBadge(application.status)}
          </div>

          {/* Applicant Information */}
          <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              Informações do Candidato
            </h4>

            <div className="grid gap-3">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground w-24">Nome:</span>
                <span className="text-sm font-medium text-foreground">{application.applicantName}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground w-24">Email:</span>
                <span className="text-sm font-medium text-foreground">{application.applicantEmail}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground w-24">Telefone:</span>
                <span className="text-sm font-medium text-foreground">{application.applicantPhone}</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground w-24">Data:</span>
                <span className="text-sm font-medium text-foreground">{application.date}</span>
              </div>
            </div>
          </div>

          {/* Message */}
          {application.message && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                <h4 className="font-semibold text-foreground">Mensagem do Candidato</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed p-4 bg-muted/50 rounded-lg">
                {application.message}
              </p>
            </div>
          )}
        </div>

        {application.status === "pending" && onApprove && onReject && (
          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => {
                onReject(application.id)
                onClose()
              }}
              className="border-red-200 text-red-700 hover:bg-red-50"
            >
              <X className="w-4 h-4 mr-2" />
              Rejeitar
            </Button>
            <Button
              onClick={() => {
                onApprove(application.id)
                onClose()
              }}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Check className="w-4 h-4 mr-2" />
              Aprovar
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
