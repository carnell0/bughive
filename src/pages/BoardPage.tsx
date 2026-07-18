import { useParams } from "react-router-dom"
import { useTickets } from "@/features/tickets/hooks/useTickets"
import KanbanBoard from "@/features/tickets/components/KanbanBoard"

function BoardPage() {
    const { id } = useParams<{ id: string }>()
    const { tickets, loading, fetchTickets } = useTickets(id!)

    return (
        <div>
            <h1>Board</h1>
            {loading ? (
                <p>Chargement...</p>
            ) : (
                <KanbanBoard tickets={tickets} onTicketMoved={fetchTickets} />
            )}
        </div>
    )
}

export default BoardPage
