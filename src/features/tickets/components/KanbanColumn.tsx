import { useDroppable } from "@dnd-kit/core"
import type { Ticket } from "@/types"
import KanbanCard from "@/features/tickets/components/KanbanCard"

const columnConfig = {
  todo: { label: "To Do", count_color: "bg-gray-200 text-gray-600" },
  in_progress: { label: "In Progress", count_color: "bg-blue-100 text-blue-600" },
  done: { label: "Done", count_color: "bg-green-100 text-green-600" },
}

function KanbanColumn({ id, title, tickets }: { id: string; title: string; tickets: Ticket[] }) {
  const { setNodeRef, isOver } = useDroppable({ id })

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 min-w-0 rounded-xl p-4 transition-colors ${
        isOver ? "bg-blue-50 ring-2 ring-blue-200" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-semibold text-gray-700 uppercase tracking-wide whitespace-nowrap">{title}</h2>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${columnConfig[id as keyof typeof columnConfig]?.count_color}`}>
          {tickets.length}
        </span>
      </div>
      <div className="space-y-2">
        {tickets.map((ticket) => (
          <KanbanCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  )
}

export default KanbanColumn
