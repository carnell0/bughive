import { useState, useEffect } from "react"
import type { Ticket } from "@/types"
import { DndContext } from "@dnd-kit/core"
import KanbanColumn from "@/features/tickets/components/KanbanColumn"
import { supabase } from "@/lib/supabase"

function KanbanBoard({ tickets: initialTickets, onTicketMoved }: { tickets: Ticket[]; onTicketMoved: () => void }) {
  const [tickets, setTickets] = useState(initialTickets)

  useEffect(() => {
    setTickets(initialTickets)
  }, [initialTickets])

  const todoTickets = tickets.filter((ticket) => ticket.status === "todo")
  const inProgressTickets = tickets.filter((ticket) => ticket.status === "in_progress")
  const doneTickets = tickets.filter((ticket) => ticket.status === "done")

  async function handleDragEnd(event: any) {
    const { active, over } = event
    if (!over) return

    const ticketId = active.id
    const newStatus = over.id

    // Mise à jour immédiate (optimistic update)
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
      )
    )

    // Synchronisation avec Supabase en arrière-plan
    const { error } = await supabase.from("tickets").update({ status: newStatus }).eq("id", ticketId)

    if (error) {
      // En cas d'erreur, on annule le changement local
      setTickets(initialTickets)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4 p-4 h-full overflow-x-auto">
        <KanbanColumn id="todo" title="To Do" tickets={todoTickets} />
        <KanbanColumn id="in_progress" title="In Progress" tickets={inProgressTickets} />
        <KanbanColumn id="done" title="Done" tickets={doneTickets} />
      </div>
    </DndContext>
  )
}

export default KanbanBoard
