"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, Eye } from "lucide-react"
import type { AdoptionApplication } from "@/types"

interface AdoptionTableProps {
  applications: AdoptionApplication[]
  onApprove: (id: string) => void
  onReject: (id: string) => void
  onView: (application: AdoptionApplication) => void
}

export function AdoptionTable({ applications, onApprove, onReject, onView }: AdoptionTableProps) {
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
    <div className="border rounded-lg bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">ID</TableHead>
            <TableHead className="font-semibold">ANIMAL</TableHead>
            <TableHead className="font-semibold">CANDIDATO</TableHead>
            <TableHead className="font-semibold">CONTATO</TableHead>
            <TableHead className="font-semibold">DATA</TableHead>
            <TableHead className="font-semibold">STATUS</TableHead>
            <TableHead className="font-semibold text-right">AÇÕES</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.id}>
              <TableCell className="font-medium">#{application.id}</TableCell>
              <TableCell>
                <div className="font-medium text-sm">{application.animalName}</div>
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-medium text-sm">{application.applicantName}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <p className="text-muted-foreground">{application.applicantEmail}</p>
                  <p className="text-muted-foreground">{application.applicantPhone}</p>
                </div>
              </TableCell>
              <TableCell>{application.date}</TableCell>
              <TableCell>{getStatusBadge(application.status)}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <Button size="sm" variant="ghost" onClick={() => onView(application)} className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  {application.status === "pending" && (
                    <>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onApprove(application.id)}
                        className="h-8 w-8 p-0 text-green-600 hover:text-green-700 hover:bg-green-50"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onReject(application.id)}
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
