import type { Ticket } from "@/types"

const priorityConfig = {
  low: { color: "#22C55E", label: "Low" },
  medium: { color: "#EAB308", label: "Medium" },
  high: { color: "#F97316", label: "Major" },
  critical: { color: "#EF4444", label: "Critical" },
}

const statusConfig = {
  todo: "To Do",
  in_progress: "In Progress",
  done: "Done",
}

function TicketDetailPanel({ ticket, onClose }: { ticket: Ticket; onClose: () => void }) {
  const priority = priorityConfig[ticket.priority as keyof typeof priorityConfig] ?? priorityConfig.medium

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-40 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ backgroundColor: `${priority.color}20`, color: priority.color }}
          >
            {priority.label}
          </span>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900">{ticket.title}</h2>
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <span className="px-2 py-0.5 bg-gray-100 rounded-full">
              {statusConfig[ticket.status as keyof typeof statusConfig]}
            </span>
          </div>
          {ticket.description && (
            <p className="mt-4 text-sm text-gray-600 whitespace-pre-wrap">{ticket.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TicketDetailPanel
