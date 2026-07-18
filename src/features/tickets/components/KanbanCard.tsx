import { useDraggable } from "@dnd-kit/core"
import type { Ticket } from "@/types"

function KanbanCard({ ticket }: { ticket: Ticket }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: ticket.id,
    })

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="bg-white p-3 rounded shadow mb-2 cursor-grab"
        >
            {ticket.title}
        </div>
    )
}

export default KanbanCard
