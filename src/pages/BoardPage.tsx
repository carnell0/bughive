import { useParams } from "react-router-dom"
import { useTickets } from "@/features/tickets/hooks/useTickets"

function BoardPage() {
    const { id } = useParams<{ id: string }>()
    const { tickets, loading } = useTickets(id!)

    return (
        <div>
            <h1>Board</h1>
            {loading ? (
                <p>Chargement...</p>
            ) : (
                tickets.map((ticket) => (
                    <div key={ticket.id}>{ticket.title}</div>
                ))
            )}
        </div>
    )
}

export default BoardPage