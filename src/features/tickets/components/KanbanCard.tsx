import { useDraggable } from "@dnd-kit/core"
import type { Ticket } from "@/types"

const priorityConfig = {
  low: { color: "#22C55E", label: "Low" },
  medium: { color: "#EAB308", label: "Medium" },
  high: { color: "#F97316", label: "Major" },
  critical: { color: "#EF4444", label: "Critical" },
}

function KanbanCard({ ticket, onTicketClick }: { ticket: Ticket; onTicketClick: (ticket: Ticket) => void }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: ticket.id,
  })

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined

  const priority = priorityConfig[ticket.priority as keyof typeof priorityConfig] ?? priorityConfig.medium

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white rounded-lg shadow-sm mb-2 cursor-grab active:cursor-grabbing overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
      onClick={() => onTicketClick(ticket)}
    >
      <div className="flex">
        <div className="w-1 flex-shrink-0 rounded-l-lg" style={{ backgroundColor: priority.color }} />
        <div className="p-3 flex-1">
          <p className="text-sm font-medium text-gray-800">{ticket.title}</p>
          <span
            className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-medium"
            style={{ backgroundColor: `${priority.color}20`, color: priority.color }}
          >
            {priority.label}
          </span>
        </div>
      </div>
    </div>
  )
}

export default KanbanCard
