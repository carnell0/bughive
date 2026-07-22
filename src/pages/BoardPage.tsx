import { useParams } from "react-router-dom"
import { useState } from "react"
import { useTickets } from "@/features/tickets/hooks/useTickets"
import KanbanBoard from "@/features/tickets/components/KanbanBoard"
import CreateTicketModal from "@/features/tickets/components/CreateTicketModal"

function BoardPage() {
  const { id } = useParams<{ id: string }>()
  const { tickets, loading, fetchTickets } = useTickets(id!)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-800">Board</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          + Nouveau ticket
        </button>
      </div>

      <div className="flex-1 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            Chargement...
          </div>
        ) : (
          <KanbanBoard tickets={tickets} onTicketMoved={fetchTickets} />
        )}
      </div>

      {showModal && (
        <CreateTicketModal
          projectId={id!}
          onClose={() => setShowModal(false)}
          onTicketCreated={fetchTickets}
        />
      )}
    </div>
  )
}

export default BoardPage
