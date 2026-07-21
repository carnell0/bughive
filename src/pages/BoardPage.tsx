import { useParams } from "react-router-dom"
import { useTickets } from "@/features/tickets/hooks/useTickets"
import KanbanBoard from "@/features/tickets/components/KanbanBoard"
import { useState } from "react"
import CreateTicketModal from "@/features/tickets/components/CreateTicketModal"

function BoardPage() {
    const { id } = useParams<{ id: string }>()
    const { tickets, loading, fetchTickets } = useTickets(id!)
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <h1>Board</h1>
            <button onClick={() => setShowModal(true)}>Nouveau ticket</button>
            {showModal && (
                <CreateTicketModal
                    projectId={id!}
                    onClose={() => setShowModal(false)}
                    onTicketCreated={fetchTickets}
                />
            )}
            {loading ? (
                <p>Chargement...</p>
            ) : (
                <KanbanBoard tickets={tickets} onTicketMoved={fetchTickets} />
            )}
        </div>
    )
}

export default BoardPage
